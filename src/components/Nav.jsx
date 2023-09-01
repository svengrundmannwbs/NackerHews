import Search from "./Search";

const Nav = ({ handleSearch, setTopic, topic }) => {
  return (
    <>
      <div className="col">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-6">
            <nav>
              <a href="#">
                <img src="/nackerhews.svg" width="50" />
              </a>
              &nbsp;
              <strong>Nacker Hews</strong>
              <span className="mx-2">
                new | past | comments | ask | show | jobs | submit
              </span>
            </nav>
          </div>
          <div className="col-6">
            <Search
              handleSearch={handleSearch}
              setTopic={setTopic}
              topic={topic}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
