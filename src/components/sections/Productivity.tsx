import { motion } from "framer-motion";

import { Picture, AnimatedAnchor } from "@/components/atoms";
import {
  IDE,
  BranchProd,
  InteractiveCard,
  Copilot,
} from "@/components/widgets";

import { useFloat } from "@/lib";

import { ProductivityIcon } from "@/assets/icons";

const Productivity = () => {
  const { float, handleFloat } = useFloat([false, false]);

  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="flex md:pl-10 space-x-3 md:space-x-10">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: false }}
            className="relative"
          >
            <ProductivityIcon />
            <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-1 z-3"></span>
          </motion.div>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#7ee787]"
          ></motion.div>
        </div>
        <div className="md:w-10/12 mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            viewport={{ once: false }}
            className="text-[20px] md:text-2xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "200ms" }}
          >
            Productivity
          </motion.div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: false }}
            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "300ms" }}
          >
            <span className="text-[#7ee787]">
              Accelerate high-quality software development.
            </span>
            Our AI-powered platform drives innovation with tools that boost
            developer velocity.
          </motion.h3>
        </div>
      </div>
      <IDE />
      <BranchProd />
      <div className="relative z-[1]">
        <Copilot />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between md:space-x-10 max-md:flex-col">
          <InteractiveCard
            backgroundColor="#7ee787"
            direction="flex-col"
            left="0"
          >
            <div className="md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32">
              <p className="text-lg md:text-xl mb-6 font-medium text-[#7d8590]">
                <span className="text-white font-semibold">GitHub Actions</span>{" "}
                automates your build, test, and deployment workflow with simple
                and secure CI/CD.
              </p>
              <div>
                <AnimatedAnchor
                  onMouseEnter={() => handleFloat(true, 0)}
                  onMouseLeave={() => handleFloat(false, 0)}
                  className="md:text-xl text-white font-semibold inline-block"
                  title="Discover GitHub Actions"
                  controller={float[0]}
                  isUnderline
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-s-lg">
              <Picture
                src="/home-campaign/illo-actions.png"
                size={[1209, 890]}
                className="w-full h-auto js-build-in-item build-in-scale-fade build-in-animate"
              />
            </div>
          </InteractiveCard>
          <InteractiveCard
            backgroundColor="#7ee787"
            direction="flex-col"
            left="-400px"
          >
            <div className="md:flex flex-col  flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32">
              <p className="text-lg md:text-xl mb-6 font-medium text-[#7d8590]">
                <span className="text-white font-semibold">GitHub Mobile</span>{" "}
                fits your projects in your pocket, so you never miss a beat
                while on the go.
              </p>
              <div>
                <AnimatedAnchor
                  onMouseEnter={() => handleFloat(true, 1)}
                  onMouseLeave={() => handleFloat(false, 1)}
                  className="md:text-xl text-white font-semibold inline-block"
                  title="Get GitHub Mobile"
                  controller={float[1]}
                  isUnderline
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-s-lg">
              <Picture
                className="w-full h-auto"
                size={[1208, 764]}
                src="/home-campaign/illo-mobile.png"
              />
            </div>
          </InteractiveCard>
        </div>
      </div>
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "160px" }}
        transition={{ delay: 0.3 }}
        viewport={{ once: false }}
        className="md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-gradient-to-b from-transparent via-[#ea6045] to-[#ffa28b]"
      ></motion.div>
    </div>
  );
};

export default Productivity;
