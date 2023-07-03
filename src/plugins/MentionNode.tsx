import type { Spread } from 'lexical';

import {
	DOMConversionMap,
	DOMConversionOutput,
	DOMExportOutput,
	EditorConfig,
	LexicalNode,
	NodeKey,
	SerializedTextNode,
	TextNode,
} from 'lexical';

export type SerializedMentionNode = Spread<
	{
		did: string;
		type: 'mention';
		version: 1;
	},
	SerializedTextNode
>;

const DID_ATTRIBUTE = 'data-mention-did';

function convertMentionElement(domNode: HTMLElement): DOMConversionOutput | null {
	const did = domNode.getAttribute(DID_ATTRIBUTE);
	const handle = domNode.textContent;

	if (did !== null && handle !== null) {
		const node = $createMentionNode(did, handle);
		return {
			node,
		};
	}

	return null;
}

const MENTION_TAG = 'span';

export class MentionNode extends TextNode {
	__did: string;

	static getType(): string {
		return 'mention';
	}

	static clone(node: MentionNode): MentionNode {
		return new MentionNode(node.__did, node.__text, node.__key);
	}
	static importJSON(serializedNode: SerializedMentionNode): MentionNode {
		const node = $createMentionNode(serializedNode.did, serializedNode.text);
		node.setFormat(serializedNode.format);
		node.setDetail(serializedNode.detail);
		node.setMode(serializedNode.mode);
		node.setStyle(serializedNode.style);
		return node;
	}

	constructor(did: string, handle: string, key?: NodeKey) {
		super(handle, key);
		this.__did = did;
	}

	exportJSON(): SerializedMentionNode {
		return {
			...super.exportJSON(),
			did: this.__did,
			type: 'mention',
			version: 1,
		};
	}

	createDOM(config: EditorConfig): HTMLElement {
		const dom = super.createDOM(config);
		dom.className = 'mention';
		return dom;
	}

	exportDOM(): DOMExportOutput {
		const element = document.createElement(MENTION_TAG);
		element.setAttribute(DID_ATTRIBUTE, this.__did);
		element.textContent = this.__text;
		return { element };
	}

	isSegmented(): false {
		return false;
	}

	static importDOM(): DOMConversionMap | null {
		return {
			[MENTION_TAG]: (domNode: HTMLElement) => {
				if (!domNode.hasAttribute(DID_ATTRIBUTE)) {
					return null;
				}

				return {
					conversion: convertMentionElement,
					priority: 1,
				};
			},
		};
	}

	isTextEntity(): true {
		return true;
	}

	isToken(): true {
		return true;
	}
}

export const $createMentionNode = (did: string, handle: string): MentionNode => {
	const mentionNode = new MentionNode(did, handle);
	mentionNode.setMode('segmented').toggleDirectionless();
	return mentionNode;
};

export const $isMentionNode = (node: LexicalNode | null | undefined): node is MentionNode => {
	return node instanceof MentionNode;
};
