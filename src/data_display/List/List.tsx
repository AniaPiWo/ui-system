import React from "react";
import styles from "./List.module.css";

export interface ListProps {
  children: React.ReactNode;
}

export const List: React.FC<ListProps> = ({ children }) => {
  return <ul className={styles.list}>{children}</ul>;
};

export const ListItem: React.FC<ListProps> = ({ children }) => {
  return <li className={styles.listItem}>{children}</li>;
};

export const ListHeader: React.FC<ListProps> = ({ children }) => {
  return <a className={styles.listHeader}>{children}</a>;
};

export const ListText: React.FC<ListProps> = ({ children }) => {
  return <a className={styles.listText}>{children}</a>;
};
