import React from "react";
import { Pagination } from "react-instantsearch-dom";

const PaginationAlgolia = () => {
  return (
    <Pagination
      padding={2}
      showFirst={false}
      showLast={false}
      translations={{
        previous: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
          >
            <g
              fill="none"
              fillRule="evenodd"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.143"
            >
              <path d="M9 5H1M5 9L1 5l4-4" />
            </g>
          </svg>
        ),
        next: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
          >
            <g
              fill="none"
              fillRule="evenodd"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.143"
            >
              <path d="M1 5h8M5 9l4-4-4-4" />
            </g>
          </svg>
        ),
      }}
    />
  );
};

export default PaginationAlgolia;
