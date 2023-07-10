import { v4 as uuidv4 } from "uuid";

import { useNav } from "@/lib";

import { NavItemIcon } from "@/assets/icons";

const OpenSource = () => {
  const { show, handleOnClick, handleMouseEnter, handleMouseLeave } =
  useNav(false);

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        onClick={handleOnClick}
        type="button"
        className={`flex items-center p-1 transition ease-in duration-150 max-lg:justify-between max-lg:font-semibold max-lg:w-full ${
          show && "lg:text-neutral-300"
        }`}
      >
        Open Source
        <NavItemIcon
          className={`octicon octicon-chevron-down HeaderMenu-icon ml-1 transition-all ease-in duration-200  max-lg:scale-x-125 ${
            show
              ? "lg:mt-2 opacity-40 max-lg:rotate-0"
              : "mt-0 max-lg:-rotate-90"
          }`}
        />
      </button>
      <div
        className={`relative lg:absolute -ml-5 bg-white rounded-md lg:py-4 p-6 w-[320px] transition ease-in duration-150 ${
          show ? "opacity-100 visible" : "opacity-0 hidden"
        }`}
      >
        <div className="lg:border-b-[1px] mb-4 pb-6 pt-4 w-full">
          <span className="text-neutral-800 font-semibold text-base hover:text-blue-600">
            {" "}
            GitHub Sponsers{" "}
            <p className="text-sm font-normal text-neutral-500">
              Fund open source developers
            </p>
          </span>
        </div>
        <div className="lg:border-b-[1px] mb-4 pb-6 pt-0 w-full">
          <span className="text-neutral-800 font-semibold text-base hover:text-blue-600">
            The ReadMe Projects{" "}
            <p className="text-sm font-normal text-neutral-500">
              GitHub community articles
            </p>
          </span>
        </div>
        <div className="mb-4 pb-0 pt-2 w-full">
          <span className="text-neutral-800 font-semibold text-base">
            Repositories
          </span>
          <ul className="text-sm text-neutral-500 mt-1 w-full">
            {["Topics", "Trendings", "Collections"].map((item) => (
              <li key={uuidv4()}>
                <a href="#" className="block py-2 hover:text-blue-600">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default OpenSource;
