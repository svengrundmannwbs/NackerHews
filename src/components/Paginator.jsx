import React from "react";

const Paginator = ({ page, setPage, nbPages }) => {
  function prevPage(e) {
    e.preventDefault();
    setPage((prevPage) => prevPage - 1);
  }

  function nextPage(e) {
    e.preventDefault();
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <nav aria-label="Page navigation example">
            <ul className="pagination pagination-lg">
              <li className={page <= 0 ? "page-item disabled" : "page-item"}>
                <a className="page-link" href="#" onClick={prevPage}>
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" onClick={(e) => e.preventDefault()}>
                  {page + 1} / {nbPages < 0 ? page : nbPages}
                </a>
              </li>
              <li
                className={
                  page === nbPages - 1 ? "page-item disabled" : "page-item"
                }
              >
                <a className="page-link" href="#" onClick={nextPage}>
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Paginator;
