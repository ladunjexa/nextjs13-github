import type { AnimatedUnderlineProps } from "@types";

const AnimatedUnderline = ({ controller }: AnimatedUnderlineProps) => {
  return (
    <div
      className={` ${
        controller ? "w-11/12 scale-100" : "w-0 scale-0"
      } origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}
    />
  );
};

export default AnimatedUnderline;
