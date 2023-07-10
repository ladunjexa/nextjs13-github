import { motion } from "framer-motion";

import { generateContainer, useFloat } from "@/lib";

import {
  CMakeData,
  BlockData,
} from "@/components/atoms";
import { InteractiveCard, BranchSec } from "@/components/widgets";

import { SecurityIcon } from "@/assets/icons";

import { securityData } from "@/data";

const Security = () => {
  const { float, handleFloat } = useFloat([false, false, false]);

  const container = generateContainer(1, 0.1, 0.4);

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };
  return (
    <div className="max-w-[1280px] mx-auto">
      <motion.div className="flex md:pl-7 space-x-3 md:space-x-10">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <SecurityIcon />
            <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-3 z-3"></span>
          </motion.div>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ delay: 0.8 }}
            className="h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#abb4ff] via-[#797ef9] to-transparent"
          ></motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, type: "tween" }}
          className="md:w-10/12 mb-24"
        >
          <h2
            className="text-[20px] md:text-2xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "200ms" }}
          >
            Security
          </h2>
          <h3
            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "300ms" }}
          >
            <p className="text-[#939aff]">
              Embed security into the developer workflow.
            </p>
            With GitHub, developers can secure their code in minutes and
            organizations can automatically comply with regulations.
          </h3>
        </motion.div>
      </motion.div>
      <InteractiveCard backgroundColor="#939aff" direction="" left="0">
        <div className="flex w-10/12 flex-col mx-auto">
          <div className="text-[#7d8590] p-6">
            <div className="font-medium">cmake.yml</div>
            <span className="text-[12px] f6">on: push</span>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="relative flex text-[17px] flex-col md:flex-row lg:my-10 flex-1 justify-between w-10/12 mx-auto md:gap-10"
          >
            <motion.div
              variants={item}
              transition={{ type: "tween" }}
              className="animate w-full"
            >
              <div
                className="p-6 md:mt-8 mb-10 box-shadow-mktg-xl rounded-md"
                style={{ background: "rgba(235, 245, 255, 0.2)" }}
              >
                <ul className="-mb-6">
                  <CMakeData />
                </ul>
              </div>
            </motion.div>
            <motion.div
              variants={item}
              transition={{ type: "tween" }}
              className="absolute md:top-12   lg:left-[47%] md:left-[46%] max-md:top-[88px] z-[1] flex items-center max-md:rotate-90"
            >
              <div
                className="inline-block rounded-full p-1 bg-[#6e7681]"
                style={{ boxShadow: "0 0 0 2px #444D56" }}
              ></div>
              <div
                style={{ width: "37px", height: "2px", background: "#D1D5DA" }}
              ></div>
              <div
                className="inline-block rounded-full p-1 bg-[#6e7681]"
                style={{ boxShadow: "0 0 0 2px #444D56" }}
              ></div>
            </motion.div>
            <motion.div
              variants={item}
              transition={{ type: "tween" }}
              className="animate w-full"
            >
              <div
                className="pt-2 pb-1 px-6 text-[15px] rounded-t-md inline-block font-medium text-white"
                style={{ background: "rgba(235, 245, 255, 0.2)" }}
              >
                Steps
              </div>
              <div
                className="p-6 mb-10 box-shadow-mktg-xl rounded-tl-none rounded-md"
                style={{ background: "rgba(235, 245, 255, 0.2)" }}
              >
                <ul className="-mb-6">
                  <CMakeData />
                  <CMakeData />
                  <CMakeData />
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </InteractiveCard>
      <BranchSec />
      <div className="relative z-[1]">
        <BlockData
          controller={float}
          handleController={handleFloat}
          block={securityData.blocks[0]}
          index={0}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        <BlockData
          controller={float}
          handleController={handleFloat}
          block={securityData.blocks[1]}
          index={1}
        />
        <BlockData
          controller={float}
          handleController={handleFloat}
          block={securityData.blocks[2]}
          index={2}
        />
      </div>
    </div>
  );
};

export default Security;
