"use client";

import { v4 as uuidv4 } from "uuid";

import { useNav } from "@/lib";

import { NavListItem } from "@/components/layout";

import { NavItemIcon } from "@/assets/icons";

import { navigationData } from "@/data";

const Product = () => {
  const { show, handleOnClick, handleMouseEnter, handleMouseLeave } =
  useNav(false);

  const { productItems } = navigationData;

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        onClick={handleOnClick}
        type="button"
        className={`flex items-center p-1 max-lg:font-semibold  transition ease-in duration-150 max-lg:justify-between max-lg:w-full ${
          show && "lg:text-neutral-300"
        }`}
      >
        Product
        <NavItemIcon
          className={` ml-1 transition-all ease-in duration-200  max-lg:scale-x-125 ${
            show ? "lg:mt-2 opacity-40 max-lg:0" : "mt-0 max-lg:-rotate-90"
          }`}
        />
      </button>
      <div
        className={`relative lg:absolute lg:flex -ml-5 bg-white rounded-md lg:py-4 py-2 transition ease-in duration-150 ${
          show ? "opacity-100 " : "opacity-0 invisible max-lg:hidden"
        }`}
      >
        <div className="lg:px-4 lg:border-r-[1px] mb-4 lg:mb-0 lg:pr-10">
          <ul className="max-lg:pl-6">
            {productItems
              .filter((item) => item.hasOwnProperty("submain"))
              .map((item) => (
                <li key={uuidv4()}>
                  <NavListItem
                    main={item.main}
                    sub={item.submain}
                    path={item.path}
                    path2={item.path2}
                  />
                </li>
              ))}
          </ul>
        </div>
        <div className="lg:px-8 lg:pr-20 py-2 max-lg:pl-6">
          <span className="my-1 text-neutral-800 font-semibold">Explore</span>
          <ul className="text-sm">
            <li className="text-neutral-500 hover:text-blue-500 py-2">
              <a href="#">All Features</a>
            </li>
            {productItems
              .filter((item) => !item.hasOwnProperty("submain"))
              .map((item) => (
                <li key={uuidv4()} className="py-2">
                  <NavListItem main={item.main} path={item.path} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Product;
