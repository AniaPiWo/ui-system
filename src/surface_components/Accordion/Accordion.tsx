import React, { useState } from "react";
import styles from "./Accordion.module.css";
import AccordionIcon from "../../assets/icons/AccordionIcon";

export interface AccordionProps {
  header: string;
  content: string;
  defaultOpen?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  header,
  content,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={styles.accordion}>
      <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <h2 className={styles.title}>{header}</h2>
        <AccordionIcon
          className={`${styles.arrow} ${isOpen ? styles.open : ""}`}
        />
      </div>
      <div className={`${styles.content} ${isOpen ? styles.open : ""}`}>
        {content}
      </div>
    </div>
  );
};
