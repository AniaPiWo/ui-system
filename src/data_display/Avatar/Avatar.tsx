import React, { useState } from "react";
import styles from "./Avatar.module.css";

export interface AvatarProps {
  src?: string;
  alt: string;
  size?: "big" | "medium" | "small";
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "medium",
}) => {
  const [imgError, setImgError] = useState(false);

  const handleError = () => {
    setImgError(true);
  };

  return (
    <div className={`${styles.avatar} ${styles[size]}`}>
      {imgError || !src ? (
        <span className={styles.fallback}>A</span>
      ) : (
        <img
          className={styles.avatar}
          src={src}
          alt={alt}
          onError={handleError}
        />
      )}
    </div>
  );
};

export default Avatar;
