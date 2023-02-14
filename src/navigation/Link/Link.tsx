import { PropsWithChildren } from "react";
import * as React from "react";
import * as css from "./Link.module.css";
import { IconPlus } from "../../icons/IconPlus";

interface LinkProps {
  id: string;
  to?: string;
  value?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  disabled?: boolean;
  onClick(): void;
}

export const Link = ({
  disabled = false,
  ...props
}: PropsWithChildren<LinkProps>) => {
  const disabledClass = disabled == true ? css.disabled : " ";
  const linkClasses = [css.link, disabledClass].join(" ");

  return (
    <a
      className={linkClasses}
      id={props.id}
      target={props.target}
      onClick={() => {}}
    >
      <IconPlus /> {props.value}
    </a>
  );
};
