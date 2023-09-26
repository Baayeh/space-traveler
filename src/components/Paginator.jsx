/* eslint-disable react/prop-types */
import React from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const Paginator = ({
  totalPages,
  currentPage,
  setCurrentPage,
}) => (
  <div className="lg:w-[60rem] mx-auto">
    <div className="flex items-center justify-end gap-x-3 mb-3 me-2">
      <button
        title="Previous"
        type="button"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="disabled:cursor-not-allowed disabled:text-gray-500"
      >
        <span>
          <BsArrowLeftSquareFill size={24} />
        </span>
      </button>
      <button
        title="Next"
        type="button"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="disabled:cursor-not-allowed disabled:text-gray-500"
      >
        <span>
          <BsArrowRightSquareFill size={24} />
        </span>
      </button>
    </div>
  </div>
);

export default Paginator;
