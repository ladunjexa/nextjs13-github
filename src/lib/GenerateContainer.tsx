const generateContainer = (
  opacity: number,
  staggerChildren: number,
  delayChildren: number
) => {
  return {
    hidden: { opacity: 0 },
    show: {
      opacity: opacity,
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };
};

export default generateContainer;
