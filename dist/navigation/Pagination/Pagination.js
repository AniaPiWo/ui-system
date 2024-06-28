import React, { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./Pagination.module.css";
import ArrowPaginationIcon from "../../assets/icons/ArrowPaginationIcon";
export var Pagination = function (_a) {
    var maxPages = _a.maxPages, currentPage = _a.currentPage, onChange = _a.onChange;
    var _b = useState(currentPage), page = _b[0], setPage = _b[1];
    useEffect(function () {
        setPage(currentPage);
    }, [currentPage]);
    var handlePrev = function () {
        if (page > 1) {
            var newPage = page - 1;
            setPage(newPage);
            onChange(newPage);
        }
    };
    var handleNext = function () {
        if (page < maxPages) {
            var newPage = page + 1;
            setPage(newPage);
            onChange(newPage);
        }
    };
    var handlePageClick = function (pageNumber) {
        if (pageNumber !== page) {
            setPage(pageNumber);
            onChange(pageNumber);
        }
    };
    var renderPageNumbers = function () {
        var pageNumbers = Array.from({ length: maxPages }, function (_, i) { return i + 1; });
        return pageNumbers.map(function (pageNumber) {
            var _a;
            return (React.createElement("button", { key: pageNumber, className: classNames(styles.pageNumber, (_a = {},
                    _a[styles.active] = pageNumber === page,
                    _a)), onClick: function () { return handlePageClick(pageNumber); } }, pageNumber));
        });
    };
    return (React.createElement("div", { className: styles.pagination },
        React.createElement("button", { className: styles.navButton, onClick: handlePrev, disabled: page === 1 },
            React.createElement(ArrowPaginationIcon, { className: styles.arrowLeft })),
        renderPageNumbers(),
        React.createElement("button", { className: styles.navButton, onClick: handleNext, disabled: page === maxPages },
            React.createElement(ArrowPaginationIcon, null))));
};
//# sourceMappingURL=Pagination.js.map