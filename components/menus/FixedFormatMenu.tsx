import { Editor } from "@tiptap/react";

import Heading1FormatButton from "@/components/buttons/format/Heading1FormatButton";
import Heading2FormatButton from "@/components/buttons/format/Heading2FormatButton";
import Heading3FormatButton from "@/components/buttons/format/Heading3FormatButton";
import OrderedListFormatButton from "@/components/buttons/format/OrderedListFormatButton";
import BulletListFormatButton from "@/components/buttons/format/BulletListFormatButton";
import CodeBlockFormatButton from "@/components/buttons/format/CodeBlockFormatButton";
import BoldFormatButton from "@/components/buttons/format/BoldFormatButton";
import ItalicFormatButton from "@/components/buttons/format/ItalicFormatButton";
import StrikeFormatButton from "@/components/buttons/format/StrikeFormatButton";
import CodeFormatButton from "@/components/buttons/format/CodeFormatButton";

import styles from "./FixedFormatMenu.module.css";

export default function FixedMenu({ editor }: { editor: Editor }) {
	return (
		<div className={styles.container}>
			<div className={styles.element}>
				<Heading1FormatButton editor={editor} className={styles.button} />
				<Heading2FormatButton editor={editor} className={styles.button} />
				<Heading3FormatButton editor={editor} className={styles.button} />
				<BulletListFormatButton editor={editor} className={styles.button} />
				<OrderedListFormatButton
					editor={editor}
					className={styles.button}
				/>
				<CodeBlockFormatButton editor={editor} className={styles.button} />
				<BoldFormatButton className={styles.button} editor={editor} />
				<ItalicFormatButton editor={editor} className={styles.button} />
				<StrikeFormatButton editor={editor} className={styles.button} />
				<CodeFormatButton editor={editor} className={styles.button} />
			</div>
		</div>
	);
}