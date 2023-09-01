/* eslint-disable react/prop-types */
import moment from "moment/moment";

function Item({ page, hit, id }) {
  function getDomain(url) {
    return url.match(
      /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im
    )[1];
  }
  const ago = moment().diff(hit.created_at, "hours");
  return (
    <li className="list-group-item">
      <div id="title text-truncate">
        <span className="badge rounded-pill text-bg-secondary">
          {id + 1 + page * 20}
        </span>
        <div className="d-inline">
          {ago < 12 ? (
            <span className="badge text-bg-danger mx-2">New</span>
          ) : (
            <span className="mx-1"></span>
          )}
          {hit.url ? (
            <>
              <span>
                <a href={hit.url} target="new">
                  {hit.title}
                </a>
              </span>
              <small className="px-3">({getDomain(hit.url)})</small>
            </>
          ) : (
            <span>{hit.title} </span>
          )}
        </div>
      </div>
      <small className="fw-lighter mx-2 ps-4">
        {hit.points} points by {hit.author}
      </small>
      <div className="vr"></div>
      <small className="fw-lighter px-3">
        {moment(hit.created_at).fromNow()}
      </small>
      <div className="vr"></div>
      <small className="fw-lighter px-3">{hit.num_comments} comments</small>
    </li>
  );
}

export default Item;
