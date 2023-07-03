import { LexicalComposer } from 'lexical-solid/LexicalComposer';
import { PlainTextPlugin } from 'lexical-solid/LexicalPlainTextPlugin';
import { ContentEditable } from 'lexical-solid/LexicalContentEditable';
import { LexicalErrorBoundary } from 'lexical-solid/LexicalErrorBoundary';

import { MentionNode } from '../plugins/MentionNode';
import MentionsPlugin from '../plugins/MentionsPlugin';

function Editor() {
	return (
		<LexicalComposer
			initialConfig={{
				namespace: 'lexical',
				onError(error) {
					throw error;
				},
				nodes: [MentionNode],
				theme: {
					ltr: 'ltr',
					rtl: 'rtl',
					placeholder: 'editor-placeholder',
					paragraph: 'editor-paragraph',
				},
			}}
		>
			<div class="editor-container">
				<PlainTextPlugin
					errorBoundary={LexicalErrorBoundary}
					contentEditable={<ContentEditable class="editor-input" />}
					placeholder={<div class="editor-placeholder">What's happening?</div>}
				/>
			</div>
			<MentionsPlugin />
		</LexicalComposer>
	);
}

export default Editor;
