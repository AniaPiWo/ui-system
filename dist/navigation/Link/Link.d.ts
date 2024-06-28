import React from "react";
export interface LinkProps {
    to: string;
    id?: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
    disabled?: boolean;
    icon?: boolean;
    onClick?(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void;
}
declare const Link: React.FC<React.PropsWithChildren<LinkProps>>;
export default Link;
