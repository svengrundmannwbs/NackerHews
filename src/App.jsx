import axios from "axios";
import { useEffect, useState } from "react";

import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Paginator from "./components/Paginator";
import ItemList from "./components/ItemList";

function App() {
  const [hits, setHits] = useState([]);
  const [topic, setTopic] = useState("react");
  const [page, setPage] = useState(0);
  const [nbPages, setnbPages] = useState(0);
  const [hitCount, setHitCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState([]);

  document.body.style = "background: #2ec4b6;";

  const url = `http://hn.algolia.com/api/v1/search_by_date?query=${topic}&tags=story&page=${page}`;

  useEffect(() => {
    handleSearch();
  }, [page]);

  useEffect(() => {
    setPage(0);
    setnbPages(0);
    handleSearch();
  }, [topic]);

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url).then(function (response) {
        const searchData = response.data;
        setHits(searchData.hits);
        setHitCount(searchData.nbHits);
        setPage(searchData.page);
        setnbPages(searchData.nbPages);
      });
    } catch (error) {
      //error handling
      error.code === "ERR_NETWORK" ? setApiError([true, error.message]) : null;
    }
    setIsLoading(false);
  };

  return (
    <>
      <header className="container mt-4">
        <div className="row d-flex align-items-center">
          <Nav handleSearch={handleSearch} setTopic={setTopic} topic={topic} />
        </div>
      </header>
      <main className="container">
        <div className="row">
          <div className="col">
            {apiError[0] ? (
              <div>
                <h2>API Fehler!</h2>
                <p>{apiError[1]}</p>
              </div>
            ) : null}
            {hits.length === 0 ? (
              "No search results"
            ) : (
              <ItemList
                hits={hits}
                isLoading={isLoading}
                page={page}
                topic={topic}
                hitCount={hitCount}
              />
            )}
          </div>
        </div>

        {nbPages > 1 ? (
          <Paginator page={page} setPage={setPage} nbPages={nbPages} />
        ) : (
          ""
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
