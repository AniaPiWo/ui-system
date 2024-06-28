import React from "react";

type Props = {
  className?: string;
};

const AccordionIcon = (props: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g id="Icons/navigate_before">
        <path
          id="icon"
          d="M7.41 8.295L6 9.705L12 15.705L18 9.705L16.59 8.295L12 12.875L7.41 8.295Z"
          fill="#1C1B1F"
        />
      </g>
    </svg>
  );
};

export default AccordionIcon;
