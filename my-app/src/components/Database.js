import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Database() {
  const [insertWord, setInsertWord] = useState(getDataLocal());
  const sortType = "asc";
  function getDataLocal() {
    let localData = localStorage.getItem("dictionary");
    if (localData) {
      return JSON.parse(localStorage.getItem("dictionary"));
    } else {
      return [];
    }
  }
  useEffect(() => {
    localStorage.setItem("dictionary", JSON.stringify(insertWord));
  }, [insertWord]);

  const sortedData = insertWord.sort((a, b) => {
    const isReversed = sortType === "asc" ? 1 : -1;
    return isReversed * a.word.localeCompare(b.word);
  });
  return (
    <div className="container">
      <div className="d-flex justify-content-between mt-5">
        <button type="button" className="btn btn-success">
          <Link className="text-decoration-none text-light " to="/">
            Back
          </Link>
        </button>
        <button type="button" className="btn btn-success">
          <Link className="text-decoration-none text-light " to="/Newword">
            Add New
          </Link>
        </button>
      </div>
      <h1 className="my-4 mx-2 text-center">Our DataBase</h1>
          {sortedData.map((elem, index) => {
            return (
              <h5 key={index}>{elem.word}        {elem.meaning}         {elem.time}
              </h5>
            );
          })}
    </div>
  );
}
