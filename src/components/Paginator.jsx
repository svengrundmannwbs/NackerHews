import React from "react";

const Paginator = ({ page, setPage, nbPages }) => {
  function prevPage() {
    setPage((prevPage) => prevPage - 1);
  }

  function nextPage() {
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <nav>
      <ul className="pagination">
        {page === 0 ? (
          ""
        ) : (
          <button
            className="pagination-button"
            id="prev"
            title="Previous page"
            aria-label="Previous page"
            onClick={prevPage}
          >
            &lt;
          </button>
        )}

        <div> {`${page + 1}/${nbPages}`} </div>
        {page + 1 === nbPages ? (
          ""
        ) : (
          <button
            className="pagination-button"
            id="next"
            title="Next page"
            aria-label="Next page"
            onClick={nextPage}
          >
            &gt;
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Paginator;
