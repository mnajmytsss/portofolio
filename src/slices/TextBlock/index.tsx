import Button from "@/components/Button";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { MdOutlineArrowOutward } from "react-icons/md";

/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

/**
 * Component for "TextBlock" Slices.
 */
const TextBlock = ({ slice }: TextBlockProps): JSX.Element => {
  return (
    <div className="max-w-prose">
      <PrismicRichText field={slice.primary.text} />
      <Button
        linkField={slice.primary.button_link}
        label={slice.primary.button_text}
        className={""}
        showIcon={<MdOutlineArrowOutward />}
      />
    </div>
  );
};

export default TextBlock;
