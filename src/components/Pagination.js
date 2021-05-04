import React from 'react'

const Pagination = ({
  friendsListToShow,
  itemsPerPage,
  handlePageNumberClick,
}) => {

  const pageNumbers = []
  for (
    let i = 1;
    i <= Math.ceil(friendsListToShow.length / itemsPerPage);
    i++
  ) {
    pageNumbers.push(i)
  }

  return pageNumbers.map((number) => {
    return (
      <div
        className='pagination-number'
        key={number}
        id={number}
        onClick={handlePageNumberClick}
      >
        {number}
      </div>
    )
  })
}

export default Pagination
