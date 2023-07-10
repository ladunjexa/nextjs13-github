import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

import { generateContainer } from "@/lib";

import { HTMLBlock, Picture } from "@/components/atoms";

import {
  EditoLeftArrow,
  EditorRightArrow,
  LockIcon,
  RefreshIcon,
  PlusIcon,
  MenuIcon,
  GithubIcon,
  RingIcon,
} from "@/assets/icons";

import { productivityData } from "@/data";

const icons = [
  { icon: <MenuIcon size={16} /> },
  { icon: <GithubIcon /> },
  { icon: <RingIcon /> },
];

const IDE = () => {
  const container = generateContainer(1, 0.1, 0.1);

  const item = {
    hidden: { opacity: 0, y: 3 },
    show: { opacity: 1, y: 0, transition: { type: "keyframe" } },
  };

  return (
    <div className="tab rounded-xl border-[0.5px] border-[#30363d] overflow-hidden relative shadow-2xl bg-[#161b22]">
      <div className="flex items-center justify-between border-b-[0.5px] border-[#30363d] p-4">
        <div className="pre-next max-md:hidden flex text-[#7d8590] font-medium">
          <EditoLeftArrow />
          <EditorRightArrow />
        </div>
        <div className="flex items-center justify-between px-2 py-1 rounded-md bg-[#0d1117] border-[0.5px] border-[#30363d] w-full md:w-auto">
          <LockIcon />
          <div className="md:px-8 px-2 text-white whitespace-nowrap overflow-hidden text-[14px] text-ellipsis">
            mona-github-github-g59jpq2w5w7.github.dev
          </div>
          <RefreshIcon />
        </div>
        <div className="pre-next max-md:hidden flex text-[#7d8590] font-medium">
          <PlusIcon />
        </div>
      </div>
      <div className="flex items-stretch">
        <div className="hidden md:block p-6 border-r-[0.5px] border-[#30363d]">
          <MenuIcon
            size={24}
            className={"octicon octicon-three-bars color-fg-muted text-[#7d8590]"}
          />
        </div>
        <div className="min-w-0 w-full">
          <div className="border-b-[0.5px] border-[#30363d] text-[#7d8590]">
            <ul className="flex px-3 pt-4">
              <li className="px-3 py-2 rounded-t-md bg-[#0d1117] text-gray-300">
                index.html
              </li>
              <li className="px-3 py-2">script.js</li>
              <li className="px-3 py-2">package.json</li>
            </ul>
            <div className="bg-[#0d1117] p-4">
              <div className="flex">
                <div className="">
                  {Array.from({ length: 12 }, (_, index) => (
                    <div className="pr-2" key={uuidv4()}>
                      {index + 1}
                    </div>
                  ))}
                </div>
                <HTMLBlock />
              </div>
            </div>
          </div>
          <div className="p-4 text-[#7d8590]">
            <ul className="flex mb-3">
              {productivityData.IDE.logs.map((item, _index) => (
                <li
                  key={uuidv4()}
                  className={`pr-3 ${_index === 0 && "text-gray-200"}`}
                >
                  {item}
                </li>
              ))}
            </ul>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="overflow-hidden whitespace-nowrap font-mono text-[14px] text-[#7d8590]"
              data-type-row-delay="50"
            >
              {productivityData.IDE.terminalOutput.map((ext) => (
                <motion.div
                  key={uuidv4()}
                  variants={item}
                  className="no-wrap js-type-row row-is-visible"
                >
                  [<span className="color-fg-subtle">{ext.time}</span>]{" "}
                  <span>{ext.action}</span> &apos;
                  <span className="color-fg-accent">{ext.extension}</span>
                  &apos;{" "}
                  {ext.duration && (
                    <>
                      after &nbsp;
                      <span className="color-fg-done">{ext.duration}</span>
                    </>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="md:block hidden border-l-[0.5px] border-[#30363d] w-full">
          <div className="flex items-center justify-between px-[16px] pt-[22px] pb-2 text-gray-100">
            {icons.map((item) => (
              <div key={uuidv4()}>{item.icon}</div>
            ))}
          </div>
          <div className="px-6 flex items-center justify-between h-full bg-[#040d21]">
            <Picture
              className="w-full h-auto md:block"
              size={[1238, 1404]}
              src="/home/globe.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDE;
