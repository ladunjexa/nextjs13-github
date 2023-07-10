const CloseIcon = ({ show }: { show: boolean }) => {
  return (
    <svg
      aria-hidden="true"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
      version="1.1"
      width="24"
      data-view-component="true"
      className={` text-white ${!show && "hidden"}`}
    >
      <path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z" />
    </svg>
  );
};

export default CloseIcon;
