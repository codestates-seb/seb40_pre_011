import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import asynclistFetch from '../../action/asynclistFetch';
import Pagenav from './Pagenav';

function Pagination() {
  const pageNumbers = [];
  const dispatch = useDispatch();
  const pagedata = useSelector(state => state.content.pageInfo);

  for (
    let i = 1;
    i <= Math.ceil(pagedata.totalElements / pagedata.size);
    i += 1
  ) {
    pageNumbers.push(i);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pagedata]);
  return (
    <Pagenav>
      <ul>
        <li>
          <button
            disabled={pagedata.page <= 1}
            onClick={() => {
              dispatch(asynclistFetch(pagedata.page - 1));
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
                    dispatch(asynclistFetch(number));
                  }}
                  className={pagedata.page === number ? 'active' : 'buttons'}
                >
                  {number}
                </button>
              </li>
            );
          })}
        <li>
          <button
            disabled={pagedata.page >= pagedata.totalPages}
            onClick={() => {
              dispatch(asynclistFetch(pagedata.page + 1));
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
