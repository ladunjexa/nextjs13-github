"use client";

import { v4 as uuidv4 } from "uuid";

import { StickyNavbar } from "@/components/layout";
import { Hero } from "@/components/sections";
import { Globe } from "@/components/widgets";

import { navigationData } from "@/data";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="relative">
        <img
          className="absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] -z-30 image"
          width="4377"
          src="/home-campaign/hero-bg.webp"
          alt="Hero Background"
        />
      </div>
      <Hero />
      <StickyNavbar />
      {navigationData.items.map((section, index) => (
        <div
          key={uuidv4()}
          id={section.id}
          className={`home-campaign-productivity px-4 pt-8 ${
            navigationData.items.length - 1 === index && "pb-16"
          }`}
        >
          {section.component}
        </div>
      ))}
      <Globe />
      <div className="max-w-[1280px] mx-auto relative z-[2] px-8">
        <ul className="lg:w-9/12 text-[14px] pt-16 text-[#7d8590] space-y-1">
          {navigationData.footnotes.map((fn, _index) => (
            <li key={uuidv4()}>
              <sup id={`footnote-${_index}`}>{_index + 1}</sup> {fn}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
