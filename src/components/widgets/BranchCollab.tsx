/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

import { useFloat } from "@/lib";

import { Picture, BranchPicture, AnimatedAnchor } from "@/components/atoms";


const BranchCollaboration = () => {
  const { float, handleFloat } = useFloat(false);

  return (
    <div className="flex relative md:pl-10">
      <Picture
        src="/home-campaign/bg-stars-1.webp"
        size={[2712]}
        className="absolute top-0 right-0 h-auto pointer-events-none"
      />
      <div className="flex items-center flex-row relative">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          className="w-[3px] h-full increase1"
        ></motion.div>
        <BranchPicture branch="collaboration" />
      </div>
      <div className="lg:pl-24 md:pl-16 pl-6">
        <div className="flex max-md:flex-col-reverse my-8 items-center lg:gap-x-5 sm:my-12 md:my-16 pb-6 md:pb-20 md:flex-row">
          <div className="py-4 mb-2 w-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="md:pr-6"
            >
              <h2 className="mb-4 text-2xl max-lg:text-[20px] max-md:w-10/12 lg:w-full w-full text-[#7d8590]">
                <span className="font-semibold text-white">
                  GitHub Issues and GitHub Projects
                </span>{" "}
                supply flexible project management tools that adapt to your team
                alongside your code.
              </h2>
              <AnimatedAnchor
                onMouseEnter={() => handleFloat(true)}
                onMouseLeave={() => handleFloat(false)}
                title="Explore GitHub Issues"
                controller={float}
                isUnderline
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="py-4 px-6 w-full"
          >
            <div className="relative">
              <div className="md:absolute z-[1] top-[-200px] lg:top-[-300px] right-0 shadow-2xl">
                <Picture
                  src="/home-campaign/illo-projects.png"
                  size={[1190, 1004]}
                  className="w-full h-auto d-block rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "tween", duration: 0.3 }}
          className="mb-10 md:mb-32 pb-4 "
        >
          <div className="py-4 text-left">
            <div className="z-[1] inline-block rounded-full px-2 border-2 border-[#ffc2b2] relative font-medium bg-gradient-to-r from-[#ffa28b] to-[#ffc2b2] bg-clip-text text-transparent">
              <span className="font-semibold text-[12px]">Did you know?</span>
            </div>
            <h3 className="text-[#ffa28b] mb-2 mt-3 lg:text-6xl md:text-5xl text-3xl font-medium">
              80% reduction
            </h3>
            <p className="mb-3 md:text-xl text-base font-medium text-white">
              in onboarding time with GitHub<sup>1</sup>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BranchCollaboration;
