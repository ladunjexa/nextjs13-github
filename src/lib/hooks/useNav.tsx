"use client";

import { useState } from "react";

const useNav = (initialState: boolean) => {
  const [show, setShow] = useState<boolean>(initialState);

  const handleOnClick = () => {
    if (window.innerWidth < 1024) {
      setShow(!show);
    }
  };

  const handleMouseEnter = () => {
    if (window.innerWidth > 1024) {
      setShow(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 1024) {
      setShow(false);
    }
  };

  return { show, handleOnClick, handleMouseEnter, handleMouseLeave };
};

export default useNav;
