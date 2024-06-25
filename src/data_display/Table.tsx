import styles from "./Table.module.css";
import React, { PropsWithChildren } from "react";

export interface TableProps {
  children: React.ReactNode;
}

export interface TableCellProps {
  align?: "left" | "center" | "right";
  children: React.ReactNode;
}

export const Table: React.FC<PropsWithChildren<TableProps>> = ({
  children,
}) => {
  return <table className={styles.table}>{children}</table>;
};

export const TableHead: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <thead className={styles.tableHead}>{children}</thead>;
};

export const TableBody: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <tbody className={styles.tableBody}>{children}</tbody>;
};

export const TableRow: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <tr className={styles.tableRow}>{children}</tr>;
};

export const TableCell: React.FC<TableCellProps> = ({
  align = "left",
  children,
}) => {
  return (
    <td className={styles.tableCell} style={{ textAlign: align }}>
      {children}
    </td>
  );
};
