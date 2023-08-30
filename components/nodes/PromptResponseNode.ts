import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

import PromptResponse from "@/components/nodes/PromptResponse";

const PromptResponseNode = Node.create({
	name: "promptResponse",
	inline: false,
	content: "block*",
	group: "block",
	parseHTML() {
		return [
			{
				tag: "prompt-response",
			},
		];
	},
	renderHTML({ HTMLAttributes }) {
		return ["prompt-response", mergeAttributes(HTMLAttributes)];
	},
	addNodeView() {
		return ReactNodeViewRenderer(PromptResponse);
	},
});

export default PromptResponseNode;