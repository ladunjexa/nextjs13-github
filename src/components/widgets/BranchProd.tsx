/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

import { useFloat } from "@/lib";

import { Picture, BranchPicture, AnimatedAnchor } from "@/components/atoms";


const BranchProductivity = () => {
  const { float, handleFloat } = useFloat(false);

  const lineVariant = {
    hidden: { height: 0 },
    show: { height: "100%" },
  };
  return (
    <div className="flex relative md:pl-10">
      <Picture
        src="/home-campaign/bg-stars-1.webp"
        size={[2712]}
        className="absolute top-0 right-0 h-auto pointer-events-none"
      />
      <div className="flex items-center flex-row relative">
        <motion.div
          variants={lineVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          transition={{ duration: 0.3 }}
          className="w-[3px] h-full increase origin-top"
        ></motion.div>
        <BranchPicture branch="productivity" />
      </div>
      <div className="lg:pl-24 md:pl-16 pl-6">
        <div className="flex max-md:flex-col-reverse my-8 items-center lg:gap-x-5 sm:my-12 md:my-16 pb-6 md:pb-20 md:flex-row">
          <div className="py-4 mb-2 w-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, type: "tween" }}
              className="md:pr-6"
            >
              <h2 className="mb-4 text-2xl max-lg:text-[20px] max-md:w-10/12 lg:w-full w-full text-[#7d8590]">
                <span className="font-normal text-white">
                  GitHub Codespaces
                </span>{" "}
                offers a complete dev environment in seconds, so you can code,
                build, test, and open pull requests from any repo anywhere.
              </h2>

              <AnimatedAnchor
                onMouseEnter={() => handleFloat(true)}
                onMouseLeave={() => handleFloat(false)}
                title="Check out GitHub Codespaces"
                controller={float}
                isUnderline
              />
            </motion.div>
          </div>
          <div className="py-4 px-6 w-full">
            <div className="relative">
              <div className="flex flex-row relative">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ type: "tween" }}
                  className="sm:absolute z-[1] top-[-200px] right-7 shadow-2xl"
                >
                  <img
                    src="/codespaces/illo-context-menu.png"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="w-[300px] h-auto rounded-md"
                  />
                  <Picture
                    src="/codespaces/illo-cursor.png"
                    className="absolute js-build-in-item build-in-slideX-left h-auto build-in-animate"
                    size={[60, 96]}
                    style={{
                      right: "20%",
                      bottom: "23%",
                      width: "30px",
                      transitionDelay: "200ms",
                    }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ type: "tween", delay: 0.1 }}
                  className="overflow-hidden max-w-[373px] bottom-0 rounded-md relative hidden sm:block build-in-animate"
                >
                  <Picture
                    src="/codespaces/illo-ports.png"
                    size={[746, 368]}
                    className="width-full d-block h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "tween", delay: 0.1 }}
          className="mb-10 md:mb-32 pb-4 "
        >
          <div className="py-4 text-left">
            <div className="z-[1] inline-block rounded-full px-2 border-2 border-[#7ee787] relative font-medium bg-gradient-to-r from-[#7ee787] to-[#aff5b4] bg-clip-text text-transparent">
              <span className="font-semibold text-[12px]">Did you know?</span>
            </div>
            <h3 className="text-[#7ee787] mb-2 mt-3 lg:text-6xl md:text-5xl text-3xl font-medium">
              22% increase
            </h3>
            <p className="mb-3 md:text-xl text-base font-medium text-white">
              in developer productivity <br /> after three years with GitHub
              <sup>1</sup>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BranchProductivity;
