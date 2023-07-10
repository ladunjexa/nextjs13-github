const DownArrowIcon = ({ show  }: { show: boolean }) => {
  return (
    <svg
      aria-hidden="true"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
      version="1.1"
      width="24"
      data-view-component="true"
      className={` text-white ${show && "hidden"}`}
    >
      <path d="M5.22 8.22a.749.749 0 0 0 0 1.06l6.25 6.25a.749.749 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939 6.28 8.22a.749.749 0 0 0-1.06 0Z" />
    </svg>
  );
};

export default DownArrowIcon;
