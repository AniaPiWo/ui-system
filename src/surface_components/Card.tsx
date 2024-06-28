import React, { PropsWithChildren } from "react";
import styles from "./Card.module.css";

interface CardProps {
  fullWidth?: boolean;
}

interface CardImageProps {
  url: string;
  alt?: string;
}

interface CardContentProps {
  title: string;
  description: string;
}

export const CardImage = ({ url, alt }: CardImageProps) => {
  return (
    <div className={styles.cardImage}>
      <img src={url} alt={alt} />
    </div>
  );
};

export const CardContent = ({
  title,
  description,
  children,
}: PropsWithChildren<CardContentProps>) => {
  return (
    <div className={styles.cardContent}>
      <p className={styles.cardTitle}>{title}</p>
      <p className={styles.cardDescription}>{description}</p>
      {children}
    </div>
  );
};

export const Card = ({ children, fullWidth }: PropsWithChildren<CardProps>) => {
  return (
    <div className={`${styles.card} ${fullWidth ? styles.big : styles.small}`}>
      {children}
    </div>
  );
};
