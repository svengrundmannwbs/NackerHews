import { useState } from "react";

const Search = ({ handleSearch, setTopic, topic }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTopic(inputValue.trim());
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col d-flex gap-2">
          <input
            id="topic"
            name="topic"
            className="form-control"
            type="text"
            placeholder="Enter topic..."
            onChange={handleInputChange}
            onInvalid={(event) =>
              event.target.setCustomValidity("Enter search topic")
            }
            onInput={(event) => event.target.setCustomValidity("")}
            required
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
