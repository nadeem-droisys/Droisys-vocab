import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [inputWord, setInputWord] = useState("");
  const [search, setSearch] = useState("");
  const [inputMeaning, setInputMeaning] = useState("");
  const [insertWord, setInsertWord] = useState(getDataLocal());
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

  function addWord(e) {
    e.preventDefault();
    let insertWords = {
      word: inputWord,
      meaning: inputMeaning,
    };

    if (!inputWord) {
    } else {
      setInsertWord([...insertWord, insertWords]);
      setInputWord("");
      setInputMeaning("");
    }
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-between mt-5">
        <button type="button" className="btn btn-success">
          <Link className="text-decoration-none text-light " to="/Database">
            Database
          </Link>
        </button>
        <button type="button" className="btn btn-success">
          <Link className="text-decoration-none text-light " to="/Newword">
            Add New
          </Link>
        </button>
      </div>
      <h1 className="my-4 mx-2 text-center">Search your word below</h1>
      <div className="input-group input-group-lg">
        <input
          type="text"
          className="form-control"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>
      <div>
            {insertWord
              .filter((val) => {
                if (search === "") {
                  return val;
                } else if (
                  val.word.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((elem, index) => {
                return (
                  <h5 key={index}>{elem.word}        {elem.meaning}         {elem.time}
              </h5>
                );
              })}
      </div>
    </div>
  );
}
