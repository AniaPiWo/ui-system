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
    const pageNumbers: (number | "...")[] = [];

    if (maxPages <= 5) {
      // Jeśli liczba stron <= 5, pokaż wszystkie strony
      for (let i = 1; i <= maxPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Dodaj pierwszą stronę
      pageNumbers.push(1);

      // Dodaj elipsę, jeśli bieżąca strona jest daleko od początku
      if (page > 3) {
        pageNumbers.push("...");
      }

      // Dodaj bieżącą stronę i jej sąsiednie strony
      const startPage = Math.max(2, page - 1);
      const endPage = Math.min(maxPages - 1, page + 1);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      // Dodaj elipsę, jeśli bieżąca strona jest daleko od końca
      if (page < maxPages - 2) {
        pageNumbers.push("...");
      }

      // Dodaj ostatnią stronę
      pageNumbers.push(maxPages);
    }

    return pageNumbers.map((pageNumber, index) =>
      typeof pageNumber === "number" ? (
        <button
          key={index}
          className={classNames(styles.pageNumber, {
            [styles.active]: pageNumber === page,
          })}
          onClick={() => handlePageClick(pageNumber)}
        >
          {pageNumber}
        </button>
      ) : (
        <span key={index} className={styles.ellipsis}>
          {pageNumber}
        </span>
      )
    );
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
