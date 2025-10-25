import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("coding");
  const [results, setResults] = useState({});
  const [photos, setPhotos] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleImageResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    const apiKey = "abcf5d3b0bd02t169o09a45ab84f1629";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    const imgApiKey = "abcf5d3b0bd02t169o09a45ab84f1629";
    let imgApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imgApiKey}`;

    axios.get(imgApiUrl).then(handleImageResponse);
  }

  return (
    <div className="Dictionary">
      <section className="Diction">
        <form onSubmit={search}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                autoFocus={true}
                onChange={handleKeywordChange}
                defaultValue="coding"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Define"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
          <br />
          <small>e.g., sunset, yoga, forest...</small>
        </form>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
