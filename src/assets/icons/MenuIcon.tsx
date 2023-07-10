const MenuIcon = ({ size, className }: { size: number, className?: string }) => {
  return (
    <svg
      aria-hidden="true"
      height={size}
      fill="currentColor"
      viewBox="0 0 16 16"
      version="1.1"
      width={size}
      data-view-component="true"
      className={className}
    >
      <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z" />
    </svg>
  );
};

export default MenuIcon;
