"use client";

import { useState } from "react";

const useFloat = (initialState: boolean[] | boolean) => {
  const [float, setFloat] = useState<boolean[] | boolean | any>(initialState);

  const handleFloat = (isFloated: boolean, index?: number) => {
    setFloat((prevState: any) => {
      if (typeof prevState === "boolean") return isFloated;
      const newFloated = [...prevState];
      newFloated[index ?? 0] = isFloated;
      return newFloated;
    });
  };

  const toggleFloat = (index?: number) => {
    setFloat((prevState: any) => {
      if (typeof prevState === "boolean") return !prevState;
      const newFloated = [...prevState];
      newFloated[index ?? 0] = !newFloated[index ?? 0];
      return newFloated;
    });
  };

  return { float, toggleFloat, handleFloat };
};

export default useFloat;
