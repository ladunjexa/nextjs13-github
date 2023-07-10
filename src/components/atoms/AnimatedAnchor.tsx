import { AnimatedUnderline } from "@/components/atoms";

import { ArrowIcon } from "@/assets/icons";

import type { AnimatedAnchorProps } from "@types";

const AnimatedAnchor = ({
  title,
  href = "#",
  className = "",
  controller,
  onMouseEnter,
  onMouseLeave,
  isUnderline = false,
  isBlack = false,
  iconSize = 20,
}: AnimatedAnchorProps) => {
  return (
    <a
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={href ? href : "#"}
      className={
        className !== ""
          ? className
          : `py-1 inline-block text-lg text-white font-semibold`
      }
    >
      {title}
      <ArrowIcon controller={controller} size={iconSize} isBlack={isBlack} />
      {isUnderline && <AnimatedUnderline controller={controller} />}
    </a>
  );
};

export default AnimatedAnchor;
