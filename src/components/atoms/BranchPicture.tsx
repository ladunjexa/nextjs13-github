import Picture from "./Picture";

import type { BranchPictureProps } from "@types";

const BranchPicture = (props: BranchPictureProps) => {
  const { branch, src } = props;

  return (
    <Picture
      className="hidden md:block absolute bottom-4 left-0"
      src={src ?? `/home-campaign/git-branch-${branch}.svg`}
      size={[81, 485]}
      style={{
        left: "calc(50% - 2px)",
        height: "auto",
        maxWidth: "9vw",
        transitionDelay: "100ms",
      }}
    />
  );
};

export default BranchPicture;
