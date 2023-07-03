import { For, Show, createMemo, createResource, createSignal } from 'solid-js';
import { Portal } from 'solid-js/web';

import { $createTextNode, TextNode } from 'lexical';

import { useLexicalComposerContext } from 'lexical-solid/LexicalComposerContext';
import { LexicalTypeaheadMenuPlugin, QueryMatch } from 'lexical-solid/LexicalTypeaheadMenuPlugin';
import { MenuOption } from 'lexical-solid/LexicalTypeaheadMenuPlugin';

import { type SuggestedMentionsData, dummyLookupService } from '../services/mentions';

import { $createMentionNode } from './MentionNode';

const MENTION_RE = /(^|\s|\()(@[a-zA-Z0-9.-]+)$/;
const MIN_MATCH_LENGTH = 1;

const getPossibleQueryMatch = (text: string): QueryMatch | null => {
	const match = MENTION_RE.exec(text);

	if (match !== null) {
		// The strategy ignores leading whitespace but we need to know it's
		// length to add it to the leadOffset
		const maybeLeadingWhitespace = match[1];
		const matchingString = match[2];

		if (matchingString != null && matchingString.length >= MIN_MATCH_LENGTH) {
			return {
				leadOffset: match.index + maybeLeadingWhitespace.length,
				matchingString,
				replaceableString: matchingString,
			};
		}
	}

	return null;
};

class MentionTypeaheadOption extends MenuOption {
	constructor(public data: SuggestedMentionsData) {
		super(data.did);
	}
}

interface MentionTypeaheadMenuItemProps {
	index: number;
	option: MentionTypeaheadOption;
	selected: boolean;
	onClick: () => void;
	onMouseEnter: () => void;
}

const MentionTypeaheadMenuItem = (props: MentionTypeaheadMenuItemProps) => {
	const data = () => props.option.data;

	return (
		<li
			tabIndex={-1}
			class="item"
			classList={{ selected: props.selected }}
			ref={props.option.setRefElement}
			role="option"
			aria-selected={props.selected}
			id={'typeahead-item-' + props.index}
			onMouseEnter={props.onMouseEnter}
			onClick={props.onClick}
		>
			<span class="text">{data().handle}</span>
		</li>
	);
};

const MentionsPlugin = () => {
	const [editor] = useLexicalComposerContext();

	const [query, setQuery] = createSignal('');

	const [results] = createResource(
		() => query() || false,
		($query) => dummyLookupService.search($query.slice(1)),
	);

	const options = createMemo(() => {
		const $results = results();

		if ($results) {
			return $results.map((item) => new MentionTypeaheadOption(item));
		}

		return [];
	});

	const onSelectOption = (
		option: MentionTypeaheadOption,
		replaceNode: TextNode | null,
		closeMenu: () => void,
	) => {
		editor.update(() => {
			const data = option.data;
			const node = $createMentionNode(data.did, '@' + data.handle);

			if (replaceNode) {
				replaceNode.replace(node);
			}

			if (node.canInsertTextAfter()) {
				const ws = $createTextNode(' ');

				node.insertAfter(ws);
				ws.select();
			} else {
				node.select();
			}

			closeMenu();
		});
	};

	return (
		<>
			<div style={{ 'font-size': '14px' }}>
				<div>query: {query()}</div>
				<div>loading: {'' + results.loading}</div>
				<div>options length: {options().length}</div>
			</div>
			<LexicalTypeaheadMenuPlugin<MentionTypeaheadOption>
				onQueryChange={setQuery}
				onSelectOption={onSelectOption}
				triggerFn={getPossibleQueryMatch}
				options={options()}
				menuRenderFn={(anchor, { selectedIndex, selectOptionAndCleanUp, setHighlightedIndex }) => (
					<Show when={options().length > 0 && anchor.current}>
						{($anchor) => (
							<Portal mount={$anchor()}>
								<div class="typeahead-popover mentions-menu">
									<ul>
										<For each={options()}>
											{(option, index) => (
												<MentionTypeaheadMenuItem
													index={index()}
													option={option}
													selected={selectedIndex() === index()}
													onClick={() => {
														setHighlightedIndex(index());
														selectOptionAndCleanUp(option);
													}}
													onMouseEnter={() => {
														setHighlightedIndex(index());
													}}
												/>
											)}
										</For>
									</ul>
								</div>
							</Portal>
						)}
					</Show>
				)}
			/>
		</>
	);
};

export default MentionsPlugin;
