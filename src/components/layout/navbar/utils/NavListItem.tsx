import { useFloat } from "@/lib";

import type { NavListItemProps } from "@types";

const NavListItem = ({
  main,
  sub,
  path,
  path2,
  href = "#",
}: NavListItemProps) => {
  const { float: focus, handleFloat: handleFocus } = useFloat(false);

  return sub ? (
    <>
      <a
        href={href}
        onMouseEnter={() => handleFocus(true)}
        onMouseLeave={() => handleFocus(false)}
        className="py-3 flex items-center space-x-3 cursor-pointer"
      >
        <svg
          aria-hidden="true"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          version="1.1"
          width="24"
          data-view-component="true"
          className={` mr-3 transition ease-in duration-100  ${
            focus ? "text-blue-600" : "text-neutral-500"
          }`}
        >
          <path d={path} />
          <path d={path2} />
        </svg>
        <div
          className={`${
            focus ? "text-blue-600" : "text-neutral-500"
          } transition ease-in duration-100   text-[14px]`}
        >
          <div
            className={`font-semibold transition ease-in duration-100  ${
              focus ? "text-blue-600" : "text-neutral-800"
            } text-base leading-5`}
          >
            {main}
          </div>
          {sub}
        </div>
      </a>
    </>
  ) : (
    <>
      <a
        href={href}
        onMouseEnter={() => handleFocus(true)}
        onMouseLeave={() => handleFocus(false)}
        className={`flex  items-center ${
          focus ? "text-blue-600" : "text-neutral-500"
        }`}
      >
        {main}
        {path && (
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            version="1.1"
            width="16"
            data-view-component="true"
            className={`octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle ml-2 transition ease-in duration-150 ${
              focus
                ? " translate-x-0 text-blue-500 opacity-100"
                : " -translate-x-3 opacity-0"
            }`}
          >
            <path d={path} />
          </svg>
        )}
      </a>
    </>
  );
};

export default NavListItem;
