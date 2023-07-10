"use client";

import { useEffect, useState } from "react";

import { AnimatedAnchor } from "@/components/atoms";

import { DownArrowIcon, CloseIcon, GithubIcon } from "@/assets/icons";

import { navigationData, GH_REPOSITORY_URL } from "@/data";

import { StickyState, InteractionState } from "@types";

const StickyNavbar = () => {
  const [stickyState, setStickyState] = useState<StickyState>({
    isSticky: false,
    isFixed: false,
  });

  const [interactionState, setInteractionState] = useState<InteractionState>({
    hovered: "",
    showMobileNav: false,
  });

  const [activeSection, setActiveSection] = useState("");

  const handleMouseEnter = (id: string) => {
    updateInteractionState({ hovered: id });
  };

  const handleMouseLeave = () => {
    updateInteractionState({ hovered: "" });
  };

  const updateStickyState = (newState: Partial<StickyState>): void => {
    setStickyState((prevState) => ({ ...prevState, ...newState }));
  };

  const updateInteractionState = (
    newState: Partial<InteractionState>
  ): void => {
    setInteractionState((prevState) => ({ ...prevState, ...newState }));
  };

  const handleScroll = () => {
    const navElement = document.getElementById("nav");
    const topCoordinate = navElement?.getBoundingClientRect().top;

    if (topCoordinate) {
      updateStickyState({
        isSticky: topCoordinate < 0,
        isFixed: topCoordinate < -20,
      });
    }

    navigationData.items.forEach((item) => {
      const sectionEl = document.getElementById(item.id);
      let topSection = (sectionEl?.getBoundingClientRect().top ?? 0) - 100;
      if (topSection) topSection -= 100;
      setActiveSection((prevActiveSection) =>
        topSection && topSection < 10 ? item.id : prevActiveSection
      );
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      id="nav"
      className={`absolute h-[100px] z-[3] transition ease-in duration-150 ${
        stickyState.isSticky ? "visible" : "invisible"
      }`}
    >
      <div
        className={`w-screen ${
          stickyState.isFixed ? "fixed" : "sticky"
        }  py-2 bg-[#0d1117] shadow-slate-950 shadow-md top-0 `}
      >
        <div className="max-w-[1280px] mx-auto pb-2 lg:pb-3 pt-1 flex lg:px-3 px-12 items-center max-lg:flex-col relative">
          <button
            onClick={() =>
              updateInteractionState({
                showMobileNav: !interactionState.showMobileNav,
              })
            }
            className="lg:hidden absolute right-12 top-4"
          >
            <DownArrowIcon show={interactionState.showMobileNav} />
            <CloseIcon show={interactionState.showMobileNav} />
          </button>
          <div className="flex lg:flex-row flex-col text-[16px] justify-start max-lg:w-full flex-auto lg:space-x-4  text-white">
            {navigationData.items.map(({ id, label }) => {
              const isActive =
                activeSection === id;

              return (
                <a
                  key={`sticky-navbar-item-${label}-${id}`}
                  href={`#${id}`}
                  onClick={() =>
                    updateInteractionState({ showMobileNav: false })
                  }
                  onMouseEnter={() => handleMouseEnter(id)}
                  onMouseLeave={handleMouseLeave}
                  className={`max-lg:pt-2 lg:hover:text-blue-500 ${
                    interactionState.showMobileNav || isActive
                      ? "max-lg:pb-6"
                      : "max-lg:hidden"
                  }`}
                >
                  {label}
                  <div
                    className={`w-10/12 max-lg:hidden mx-auto mt-1 h-[1px] scale-0 transition ease-in duration-200 ${
                      isActive && interactionState.hovered !== id && "scale-100 bg-white"
                    } ${interactionState.hovered === id && "scale-100 bg-blue-500"}`}
                  />
                </a>
              );
            })}
          </div>
          <div
            className={`lg:ml-5 flex items-center lg:space-x-5 max-lg:space-y-3 max-lg:flex-col max-lg:w-full max-lg:mt-5 ${
              !interactionState.showMobileNav && "max-lg:hidden"
            }`}
          >
            <a href={GH_REPOSITORY_URL}>
              <GithubIcon
                size={32}
                classes="text-black hover:text-white transition ease-in duration-200"
              />
            </a>
            {navigationData.options.map(({ id, className, header, href }) => (
              <AnimatedAnchor
                key={`sticky-navbar-option-${header}-${id}`}
                href={href}
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={handleMouseLeave}
                className={`flex items-center max-lg:w-full font-semibold justify-center rounded-md px-3 py-3 text-base ${className}`}
                title={header}
                isBlack={id === "signUp"}
                controller={interactionState.hovered === id}
                iconSize={16}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyNavbar;
