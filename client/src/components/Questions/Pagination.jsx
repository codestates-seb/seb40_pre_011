import React from 'react';
import Pagenav from './Pagenav';

function Pagination({
  postPerPage,
  totalPosts,
  paginate,
  currentPage,
  setCurrentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i += 1) {
    pageNumbers.push(i);
  }
  return (
    <Pagenav>
      <ul>
        <li>
          <button
            disabled={currentPage <= 1}
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
            className="Prev"
          >
            Prev
          </button>
        </li>
        {pageNumbers &&
          pageNumbers.map(number => {
            return (
              <li key={number}>
                <button
                  onClick={() => {
                    paginate(number);
                  }}
                  className={currentPage === number ? 'active' : 'buttons'}
                >
                  {number}
                </button>
              </li>
            );
          })}
        <li>
          <button
            disabled={currentPage >= pageNumbers.length}
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
            className="Next"
          >
            Next
          </button>
        </li>
      </ul>
    </Pagenav>
  );
}

export default Pagination;
