import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { generateContainer, useFloat } from "@/lib";

import { CopilotBlock, AnimatedAnchor } from "@/components/atoms";
import { InteractiveCard } from "@/components/widgets";

import { ReplayIcon } from "@/assets/icons";

import { productivityData } from "@/data";

const Copilot = () => {
  const { float, handleFloat } = useFloat(false);

  const [count, setCount] = useState(0);
  const [activeLanguage, setActiveLanguage] = useState<string>("python");

  const handleLanguageChange = (language: string) => {
    setActiveLanguage(language);
  };

  const container = generateContainer(1, 0.05, 0.1);

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { type: "tween" } },
  };

  return (
    <InteractiveCard backgroundColor="#7ee787" direction="" left="0">
      <div className="md:flex flex-col md:space-y-20 flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 justify-between">
        <p className="text-lg md:text-xl mb-6 font-medium text-[#7d8590]">
          <span className="text-white font-medium">GitHub Copilot</span> is your
          AI pair programmer that empowers you to complete tasks 55% faster by
          turning natural language prompts into coding suggestions.
        </p>
        <div>
          <AnimatedAnchor
            onMouseEnter={() => handleFloat(true)}
            onMouseLeave={() => handleFloat(false)}
            className="md:text-xl text-white font-semibold inline-block"
            title="Meet GitHub Copilot"
            controller={float}
            isUnderline
          />
        </div>
      </div>
      <div className="overflow-hidden rounded-s-lg z-[1] flex-1 shadow-3xl">
        <div className="text-left border-[0.5px] bg-[#161b22] border-[#30363d] rounded-lg text-[#161b22] box-shadow-card-mktg md:mt-10 md:ml-0 sm:ml-10 sm:mr-10 mb-16 ml-3 mr-3">
          <div className="">
            <div className="overflow-x-auto pt-2 px-2 mb-0 border-b-[0.5px] border-[#30363d]">
              <div className="flex items-center bg-[#161b22] text-[#7d8590] tab-nav">
                {productivityData.CopilotFeatures.map((script) => (
                  <button
                    key={uuidv4()}
                    type="button"
                    className={`flex items-center  py-2 px-4 ${
                      activeLanguage === script.language &&
                      "border-[0.5px] rounded-t-md border-b-[0] text-white border-[#30363d] bg-[#0d1117]"
                    }  `}
                    onClick={() =>
                      handleLanguageChange(script.language as string)
                    }
                  >
                    {script.icon}
                    &nbsp;
                    <span>{script.title}</span>
                  </button>
                ))}
              </div>
            </div>
            {productivityData.CopilotFeatures.map((script) => (
              <div
                key={uuidv4()}
                className={`p-4 relative bg-[#0d1117] ${
                  activeLanguage !== script.language && "hidden"
                }`}
              >
                <div className="flex">
                  <div className="text-[#6e7681] text-right">
                    {Array.from({ length: script.block.length }, (_, index) => (
                      <div className="pr-2" key={uuidv4()}>
                        {index + 1}
                      </div>
                    ))}
                  </div>
                  <CopilotBlock
                    container={container}
                    item={item}
                    count={count}
                    drawId={script.block.draw}
                  />
                </div>
                <div className="absolute w-full z-[1]  bottom-[-60px] left-0 flex items-center justify-center mb-5">
                  <button
                    onClick={() => setCount(count + 1)}
                    type="button"
                    className="flex items-center text-white justify-between"
                  >
                    <ReplayIcon />
                    Replay
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </InteractiveCard>
  );
};

export default Copilot;
