import { AnimatedAnchor } from "@/components/atoms";
import { InteractiveCard } from "@/components/widgets";

import { MarkIcon } from "@/assets/icons";

import type { BlockDataProps } from "@types";

const BlockData = ({
  controller,
  handleController,
  block,
  index,
}: BlockDataProps) => {
  return (
    <InteractiveCard
      backgroundColor="#939aff"
      direction={block.direction ?? ""}
      left={block.left ?? "0"}
    >
      <div className={block.className}>
        <p className="text-lg md:text-xl mb-6 font-medium text-[#7d8590]">
          <span className="text-white font-medium">{block.title}</span>{" "}
          {block.description}
        </p>
        <div>
          <AnimatedAnchor
            onMouseEnter={() => handleController(true, index)}
            onMouseLeave={() => handleController(false, index)}
            href={block.href}
            title={block.linkTitle}
            controller={controller[index]}
            isUnderline
          />
        </div>
      </div>
      {block.imgComponent}
    </InteractiveCard>
  );
};

const CMakeData = () => {
  return (
    <li className="mb-6 flex items-center justify-between">
      <div className="flex items-center">
        <MarkIcon />
        <span className="font-medium text-white">Build</span>
      </div>
      <span className="text-[14px] text-[#7d8590]">1m 21s</span>
    </li>
  );
};

export { BlockData, CMakeData };
