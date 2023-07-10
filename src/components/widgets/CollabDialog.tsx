import { AnimatedAnchor } from "@/components/atoms";

import type { CollabDialogProps } from "@types";

const CollabDialog = ({
  title,
  desc,
  handleController,
  controller,
  index,
  text = "Enable GitHub Discussion",
  className = "md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32",
}: CollabDialogProps) => {
  return (
    <div className={className}>
      <p className="text-lg md:text-xl mb-6 font-medium text-[#7d8590]">
        <span className="text-white font-semibold">{title}</span> {desc}
      </p>
      <div>
        <AnimatedAnchor
          onMouseEnter={() => handleController(true, index)}
          onMouseLeave={() => handleController(false, index)}
          title={text}
          controller={controller[index]}
          isUnderline
        />
      </div>
    </div>
  );
};

export default CollabDialog;
