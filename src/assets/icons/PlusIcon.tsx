import React from "react";

interface PlusIconProps {
  className?: string;
}

const PlusIcon = ({ className }: PlusIconProps) => {
  return (
    <svg
      className={className}
      width="11"
      height="11"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
    </svg>
  );
};

export default PlusIcon;
