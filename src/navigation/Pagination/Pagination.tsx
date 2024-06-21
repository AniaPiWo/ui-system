import React, { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./Pagination.module.css";
import ArrowPaginationIcon from "../../assets/icons/ArrowPaginationIcon";

export interface PaginationProps {
  maxPages: number;
  currentPage: number;
  onChange(value: number): void;
}

export const Pagination: React.FC<PaginationProps> = ({
  maxPages,
  currentPage,
  onChange,
}) => {
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  const handlePrev = () => {
    if (page > 1) {
      const newPage = page - 1;
      setPage(newPage);
      onChange(newPage);
    }
  };

  const handleNext = () => {
    if (page < maxPages) {
      const newPage = page + 1;
      setPage(newPage);
      onChange(newPage);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber !== page) {
      setPage(pageNumber);
      onChange(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = Array.from({ length: maxPages }, (_, i) => i + 1);
    return pageNumbers.map((pageNumber) => (
      <button
        key={pageNumber}
        className={classNames(styles.pageNumber, {
          [styles.active]: pageNumber === page,
        })}
        onClick={() => handlePageClick(pageNumber)}
      >
        {pageNumber}
      </button>
    ));
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.navButton}
        onClick={handlePrev}
        disabled={page === 1}
      >
        <ArrowPaginationIcon className={styles.arrowLeft} />
      </button>
      {renderPageNumbers()}
      <button
        className={styles.navButton}
        onClick={handleNext}
        disabled={page === maxPages}
      >
        <ArrowPaginationIcon />
      </button>
    </div>
  );
};
