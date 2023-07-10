
/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

import { Picture } from "@/components/atoms";
import {
  BranchCollab,
  InteractiveCard,
  CollabDialog,
} from "@/components/widgets";

import { useFloat, generateContainer } from "@/lib";
import { CollaborationIcon, HeartIcon } from "@/assets/icons";

import { collaborationData } from "@/data";

const Collaboration = () => {
  const { float, handleFloat } = useFloat([false, false, false]);

  const container = generateContainer(1, 0.1, 0.1);

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="flex md:pl-7 space-x-3 md:space-x-10">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <CollaborationIcon />
            <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-2 z-3"></span>
          </motion.div>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ delay: 0.8 }}
            className="h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#ffd6cc] via-[#ec6547] to-transparent"
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
            Collaboration
          </h2>
          <h3
            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "300ms" }}
          >
            <span className="text-[#ffa28b]">Supercharge collaboration.</span>
            We provide unlimited repositories, best-in-class version control,
            and the world’s most powerful open source community—so your team can
            work more efficiently together.
          </h3>
        </motion.div>
      </div>
      <Picture
        src="/issues/illo/issues-plan.png"
        size={[2500, 1500]}
        className="w-full h-auto d-block rounded-lg border-[1px] border-[#30363d]"
      />
      <BranchCollab />
      <div className="flex justify-between items-center">
        <div className="flex justify-between md:space-x-10 max-md:flex-col">
          <InteractiveCard
            backgroundColor="#ffa28b"
            direction="flex-col"
            left="0"
          >
            <CollabDialog
              title="GitHub Actions"
              desc="automates your build, test, and deployment workflow with simple
              and secure CI/CD."
              handleController={handleFloat}
              controller={float}
              index={0}
            />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="overflow-hidden rounded-s-lg"
            >
              <Picture
                src="/home-campaign/illo-discussions.webp"
                size={[1209, 890]}
                className="w-full h-auto"
              />
            </motion.div>
          </InteractiveCard>
          <InteractiveCard
            backgroundColor="#ffa28b"
            direction="flex-col"
            left="-400px"
          >
            <CollabDialog
              title="GitHub Mobile"
              desc="fits your projects in your pocket, so you never miss a beat
                while on the go."
              handleController={handleFloat}
              controller={float}
              index={1}
              text="Check out pull request"
            />
            <div className="overflow-hidden rounded-s-lg">
              <motion.img
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "tween", duration: 0.3 }}
                className="w-full h-auto "
                width="1208"
                height="764"
                loading="lazy"
                decoding="async"
                alt=""
                aria-hidden="true"
                src="/home-campaign/illo-pull-requests.webp"
              />
            </div>
          </InteractiveCard>
        </div>
      </div>
      <InteractiveCard backgroundColor="#ffa28b" direction="" left="">
        <CollabDialog
          title="GitHub Sponsors"
          desc="lets you support your favorite open source maintainers and projects."
          handleController={handleFloat}
          controller={float}
          index={2}
          text="Check out pull request"
          className="md:flex flex-col md:space-y-20 flex-1 py-20 p-10 justify-between"
        />
        <div className="overflow-hidden rounded-s-lg z-[1] flex-1">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="flex flex-wrap w-full relative -top-[120px] -rotate-12 -right-6 -mt-6  p-6 max-h-[480px]"
          >
            {collaborationData.sponsors.map((sponsor) => (
              <motion.div
                key={uuidv4()}
                variants={item}
                transition={{ type: "tween " }}
                className="w-1/3"
              >
                <a
                  href={`https://github.com/${sponsor.name}`}
                  target="_blank"
                  className="rounded-md bg-[#161b22] border-[0.5px] border-[#30363d] flex flex-col items-center m-2 p-6"
                >
                  <Picture
                    src={sponsor.src}
                    size={[96]}
                    className="rounded-md"
                  />
                  <div className="text-[#7d8590] my-2">{sponsor.name}</div>
                  <button type="button" className="bg-[#21262d] rounded-md">
                    <span className="flex items-center justify-between px-2 py-1 space-x-2">
                      <HeartIcon />
                      <span className="Button-label text-[#c9d1d9]">
                        Sponsor
                      </span>
                    </span>
                  </button>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </InteractiveCard>
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "160px" }}
        transition={{ delay: 0.2 }}
        className="md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-gradient-to-b from-transparent via-[#797ef9] to-[#abb4ff]"
      ></motion.div>
    </div>
  );
};

export default Collaboration;
