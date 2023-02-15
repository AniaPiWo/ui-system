import { PropsWithChildren } from "react";
import * as React from "react";
import * as css from "./Link.module.css";
import { IconPlus } from "../../icons/IconPlus";

interface LinkProps {
  to: string;
  id: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  disabled?: boolean;
}

export const Link = ({
  disabled = false,
  ...props
}: PropsWithChildren<LinkProps>) => {
  const disabledClass = disabled == true ? css.disabled : " ";
  const linkClasses = [css.link, disabledClass].join(" ");

  return (
    <a className={linkClasses} id={props.id} target={props.target}>
      <IconPlus />
      Link
    </a>
  );
};
