import { useFloat } from "@/lib";

import { AnimatedAnchor, Picture } from "@/components/atoms";
import { Earth } from "@/components/widgets";

import type { GlobeAnchorProps } from "@types";

const GlobeAnchor = ({
  controller,
  handleController,
  index,
  className,
  header,
  isBlack = false,
  href = "#",
}: GlobeAnchorProps) => {
  return (
    <AnimatedAnchor
      onMouseEnter={() => handleController(true, index)}
      onMouseLeave={() => handleController(false, index)}
      href={href}
      className={`py-3 flex items-center justify-center rounded-md font-bold text-[20px] ${className}`}
      title={header}
      controller={controller[index]}
      isBlack={isBlack}
    />
  );
};

const Globe = () => {
  const { float, handleFloat } = useFloat([false, false]);

  return (
    <div className="overflow-hidden relative">
      <div className="max-w-[1280px] mx-auto relative z-[2]">
        <div className="flex my-8 md:my-16 sm:my-12 relative md:items-center text-center flex-col">
          <div className="py-3 mb-2 flex flex-col justify-center items-center">
            <h2 className="px-4 mb-4 md:w-9/12 mx-auto lg:text-5xl md:text-4xl text-3xl font-bold text-white">
              The place for anyone from anywhere to build anything
            </h2>
            <p className="mb-4 md:text-xl text-[16px] text-[#7d8590] px-4 mx-auto md:w-7/12">
              Whether you’re scaling your startup or just learning how to code,
              GitHub is your home. Join the world’s largest developer platform
              to build the innovations that empower humanity. Let’s&nbsp;build
              from&nbsp;here.
            </p>
            <div className="lg:ml-5 flex items-center justify-center lg:space-x-5 max-lg:space-y-3 max-lg:flex-col max-lg:w-full max-lg:mt-5">
              <GlobeAnchor
                controller={float}
                handleController={handleFloat}
                index={0}
                className="bg-white px-14"
                header="Sign up for GitHub"
                isBlack
              />
              <GlobeAnchor
                controller={float}
                handleController={handleFloat}
                index={1}
                className="text-white space-x-2 border-[1px] border-neutral-500 px-4"
                header="Start a free enterprise trail"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`relative z-[2] max-sm:hidden`}>
        <Earth />
      </div>
      <div className={`relative z-[2] sm:hidden`}>
        <Earth offset={[0, 0]} />
      </div>
      <Picture
        className="absolute bottom-0 left-0 object-cover w-full h-full"
        // size={[801, 807]}
        size={[958, 484]}
        src="/home-campaign/footer-galaxy.jpg"
      />
      <div className="flex items-center justify-center relative z-[2] mt-[-260px]">
        <Picture
          src="/home-campaign/astrocat.png"
          className="w-[400px] h[403] object-cover pointer-events-none"
          size={[801, 807]}
          loading="eager"
          decoding="auto"
        />
      </div>
    </div>
  );
};

export default Globe;
