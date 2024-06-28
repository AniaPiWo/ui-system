import React, { PropsWithChildren } from "react";
export interface TableProps {
    children: React.ReactNode;
}
export interface TableCellProps {
    align?: "left" | "center" | "right";
    children: React.ReactNode;
}
export declare const Table: React.FC<PropsWithChildren<TableProps>>;
export declare const TableHead: React.FC<PropsWithChildren<{}>>;
export declare const TableBody: React.FC<PropsWithChildren<{}>>;
export declare const TableRow: React.FC<PropsWithChildren<{}>>;
export declare const TableCell: React.FC<TableCellProps>;
