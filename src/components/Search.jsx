import { useState } from "react";

const Search = ({ handleSearch, setTopic }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue.trim());
    setTopic(inputValue.trim());
    handleSearch();
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col d-flex gap-2">
          <input
            className="form-control"
            type="text"
            placeholder="Enter topic..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary" type="sumbit">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
