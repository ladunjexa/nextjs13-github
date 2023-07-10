/* eslint-disable @next/next/no-img-element */
import { v4 as uuidv4 } from "uuid";

import { useFloat } from "@/lib";

import { AnimatedAnchor, Picture } from "@/components/atoms";

import { ArrowIcon, HeroIcon } from "@/assets/icons";

import { heroData } from "@/data";

const Hero = () => {
  const { float, handleFloat } = useFloat([false, false]);

  return (
    <section className="hero-section px-3">
      <div className="relative max-w-[1280px] lg:pt-32 md:px-10 mx-auto pt-16">
        <Picture
          className="absolute hero-drone top-28 w-1/4 h-auto right-0 xl:right-0"
          size={[500, 326]}
          src="/home-campaign/hero-drone.webp"
        />
        <div className="flex">
          <div className="relative">
            <Picture size={[437, 637]} src="/home-campaign/lines-hero.svg" />
            <div className="mx-auto my-3">
              <span className="relative z-[11]">
                <HeroIcon />
                <span
                  className="absolute left-0 top-0 w-6 h-full  home-campaign-glowing-icon-glow "
                  style={{
                    backgroundColor: "var(--mktg-accent-primary)",
                    filter: "blur(17px)",
                  }}
                />
              </span>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364)",
                marginLeft: "11px",
              }}
              className="max-md:w-[2px] w-[3px] h-[450px] max-md:h-[650px] max-sm:h-[750px] max-ssm:h-[900px] max-sssm:h-[1150px] line rounded-md"
            />
          </div>
          <div className="absolute pt-32 mt-28 max-md:px-4 ml-4 md:ml-12">
            <div className="relative md:top-20 mb-[24px]">
              <a
                onMouseEnter={() => handleFloat(true, 0)}
                onMouseLeave={() => handleFloat(false, 0)}
                href=""
                className="border-[1px] border-neutral-600 copilot rounded-full inline-block mb-2"
              >
                <div className="flex items-center p-3 px-5">
                  <Picture
                    className="d-block w-auto flex-grow-0 flex-shrink-0 mr-6 max-md:mr-3 scale-110"
                    size={[44]}
                    src="/eyebrow-banner-icon-copilot-x.svg"
                  />
                  <div className="md:mr-2 md:pl-2 py-0.5">
                    <div className="font-medium text-white text-[16px] max-md:text-[14px] leading-5">
                      Introducing GitHub Copilot X
                    </div>
                    <div className="text-neutral-500 max-md:text-[14px] text-[16px]">
                      Your Ai pair programmer is leveling Up
                    </div>
                  </div>
                  <div className="ml-auto">
                    <ArrowIcon controller={float[0]} size={16} />
                  </div>
                </div>
              </a>
            </div>
            <h1 className="md:mt-28 lg:mt-32 sm:mt-12 relative z-2 max-md:mb-5 text-[48px] md:text-[72px] max-sm:leading-[60px] max-md:leading-[80px] lg:text-[80px] font-semibold text-white">
              {" "}
              Let&apos;s build from&nbsp;here
            </h1>
            <p className="relative z-1 text-[24px] md:text-[28px]  lg:text-[32px] leading-[30px] md:leading-[36px] lg:leading-[44px] mb-5 md:mb-12 md:10/12  lg:w-9/12 text-[#7d8590]">
              Harnessed for productivity. Designed for collaboration. Celebrated
              for built-in security. Welcome to the platform
              developers&nbsp;love.
            </p>
            <div className="flex lg:w-11/12 md:space-x-5 max-md:flex-col">
              <form>
                <div className="grid max-md:grid-rows-2 md:grid-cols-2">
                  <dl>
                    <dd>
                      <input
                        className="h-12 focus:outline-none max-md:rounded-md md:rounded-s-md right-0 w-full placeholder:text-[16px] pl-3"
                        placeholder="Email address"
                        type="email"
                        name="user_email"
                        id="user_email"
                      />
                    </dd>
                  </dl>
                  <button
                    type="button"
                    className="mb-10 md:mb-0 py-3 w-full home-campaign-signup-button text-[16px] max-md:rounded-md md:rounded-e-md text-white font-semibold"
                  >
                    Sign up for GitHub
                  </button>
                </div>
              </form>
              <span className="border-t-[1px] md:border-l-[1px] border-neutral-700 md:mx-10 mb-3 md:mb-0"></span>
              <AnimatedAnchor
                onMouseEnter={() => handleFloat(true, 1)}
                onMouseLeave={() => handleFloat(false, 1)}
                className="flex items-center w-full md:w-auto justify-center text-[16px] py-3 px-5 max-md:mt-4 rounded-md border-[#ae88f9] border-[1.5px] text-white"
                title="Start a free enterprise trial"
                controller={float[1]}
              />
            </div>
            <div className="md:my-32 my-24">
              <p className="text-[16px] leading-[24px] text-[#7d8590]">
                Trusted by the world&apos;s leading&nbsp;organizations&nbsp;↘︎
              </p>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-center gap-y-4 gap-x-0.5">
                {heroData.collabs.map((logo) => (
                  <img
                    key={uuidv4()}
                    src={logo.src}
                    alt={logo.alt}
                    height={logo.height}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
