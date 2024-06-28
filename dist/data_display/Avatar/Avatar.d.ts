import React from "react";
export interface AvatarProps {
  src?: string;
  alt: string;
  size?: "big" | "medium" | "small";
}
export declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
