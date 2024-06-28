import React from "react";
export interface PaginationProps {
    maxPages: number;
    currentPage: number;
    onChange(value: number): void;
}
export declare const Pagination: React.FC<PaginationProps>;
