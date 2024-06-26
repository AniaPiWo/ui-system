import React from "react";

interface ArrowPaginationIconProps {
  className?: string;
}

const ArrowPaginationIcon = ({ className }: ArrowPaginationIconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="Icons/arrow_forward_24px">
        <path
          id="icon"
          d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
          fill="#1C1B1F"
        />
      </g>
    </svg>
  );
};

export default ArrowPaginationIcon;
