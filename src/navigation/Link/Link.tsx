import { PropsWithChildren } from "react";
import * as React from "react";
import * as css from "./Link.module.css";

interface LinkProps {
  to: string;
  id?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  disabled?: boolean;
  onClick?(): void;
}

export const Link = (props: PropsWithChildren<LinkProps>) => {
  const disabledClass = props.disabled == true ? css.disabled : " ";
  const linkClasses = [css.link, disabledClass].join(" ");

  return (
    <a
      href={props.to}
      className={linkClasses}
      id={props.id}
      target={props.target}
      onClick={props.onClick}
    >
      {props.children}
    </a>
  );
};
