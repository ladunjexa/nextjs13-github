"use client";

/* eslint-disable @next/next/no-img-element */
import { v4 as uuidv4 } from "uuid";

import { Picture } from "@/components/atoms";

import { GithubWordMark } from "@/assets/icons";

import { GH_USER_URL, footerData } from "@/data";

const Footer = () => {
  const { sections, items, socials } = footerData;

  return (
    <footer className="footer relative pt-14 break-words">
      <div className="max-w-[1280px] mx-auto relative z-[2] overflow-hidden">
        <div className="flex flex-col lg:flex-row py-10 mb-8 space-x-6 px-4">
          <div className="mb-12 px-4">
            <a
              href="https://github.com/"
              className="color-fg-default d-inline-block"
              aria-label="Go to GitHub homepage"
            >
              <GithubWordMark />
            </a>
            <div className="text-white">
              <h2 className="mt-6 font-semibold">
                Subscribe to our newsletter
              </h2>
              <p className="text-[14px] text-[#7d8590] mb-8">
                Get product updates, company news, and more.
              </p>
              <a
                href="#"
                className="mb-10 px-6 py-3.5 text-[17px] font-semibold border-[0.1px] border-gray-600 rounded-lg hover:border-[2px] hover:border-white transition ease-in duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
          <div className="lg:flex w-full justify-between grid md:grid-cols-4 grid-cols-2 gap-6">
            {sections.map((column) => (
              <div key={uuidv4()} className="text-[#7d8590]">
                <h2 className="font-medium mb-4 font-mono">{column.title}</h2>
                <ul className="text-[13px]">
                  {column.items.map((item) => (
                    <a href="#" key={uuidv4()} className="hover:text-[#1f6feb] hover:underline">
                      <li className="mb-4">{item}</li>
                    </a>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#161b22]">
        <div className="max-w-[1280px] mx-auto text-[12px] md:flex flex-row-reverse py-6 justify-between items-center px-4">
          <ul className="flex items-center max-md:mb-4">
            {socials.map((url) => (
              <li className="mr-4" key={uuidv4()}>
                <a href={url.href}>
                  <Picture
                    src={url.src}
                    size={[18, 22]}
                    className="d-block"
                    alt={`${url.title}'s Icon`}
                  />
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex items-center mb-4 sm:mb-0 text-[#7d8590] flex-wrap">
            <li className="mr-3">
              &copy; 2023 GitHub, Inc | by <a href={GH_USER_URL} className="transition ease-in duration-100 hover:text-[#1f6feb] hover:underline">@ladunjexa</a>
            </li>
            {items.map((item) => (
              <li className="mr-3" key={uuidv4()}>
                <a href="#" className="transition ease-in duration-100 hover:text-[#1f6feb] hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
