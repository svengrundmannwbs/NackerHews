import Item from "./Item";

function ItemList({ page, hits, isLoading, topic, hitCount }) {
  return (
    <>
      <span className="badge rounded-pill text-bg-secondary position-relative">
        Results for topic: "{topic}"
      </span>
      &nbsp;
      {hitCount > 1000 ? (
        <span className="badge rounded-pill text-bg-secondary position-relative bg-danger">
          {hitCount}
        </span>
      ) : (
        <span className="badge rounded-pill text-bg-secondary position-relative bg-success">
          {hitCount}
        </span>
      )}
      <ul className="list-group" id="hits">
        {!isLoading ? (
          hits.map((hit, index) => (
            <Item page={page} hit={hit} key={index} id={index} />
          ))
        ) : (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </ul>
    </>
  );
}

export default ItemList;
