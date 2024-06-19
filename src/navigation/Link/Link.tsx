import React, { Fragment } from "react";
import styles from "./Link.module.css";
import PlusIcon from "../../assets/icons/PlusIcon";

export interface LinkProps {
  to: string;
  id?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  disabled?: boolean;
  icon?: boolean;
  onClick?(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void;
}

const Link: React.FC<React.PropsWithChildren<LinkProps>> = ({
  to,
  id,
  target = "_self",
  disabled = false,
  icon = false,
  onClick,
  children,
}) => {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <a
      href={disabled ? undefined : to}
      id={id}
      target={target}
      className={`${styles.link} ${disabled ? styles.disabled : ""}`}
      onClick={handleClick}
    >
      {icon && <PlusIcon className={styles.icon} />}
      {children}
    </a>
  );
};

Link.displayName = "Link";

export default Link;
