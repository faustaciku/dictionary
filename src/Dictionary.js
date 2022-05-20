import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);
  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="Dictionary">
      <section>
        <h2>What word do you want to look up?</h2>
        <form onSubmit={search}>
          <input type="search" onChange={handleKeywordChange} />
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
