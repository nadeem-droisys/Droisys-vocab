import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Newword() {
  const [inputWord, setInputWord] = useState("");
  const [inputMeaning, setInputMeaning] = useState("");
  const [insertWord, setInsertWord] = useState(getDataLocal());
  const sortType ="asc";
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
    console.log("clicked")
    let currentTime = String(new Date());
    let myTime = currentTime.substring(4, 21);
    let insertWords = {
      word: inputWord,
      meaning: inputMeaning,
      time: myTime,
    };
    if (!inputWord || !inputMeaning) {
      alert("both fields required");
    } else {
      insertWord.filter((val) => {
        if (val.word.toLowerCase().includes(inputWord.toLowerCase())) {
          alert("already in our data base");
        } else {
          setInsertWord([...insertWord, insertWords]);
          setInputWord("");
          setInputMeaning("");
        }
      });
    }
  }
  const sortedData = insertWord.sort((a, b) => {
    const isReversed = sortType === "asc" ? 1 : -1;
    return isReversed * a.word.localeCompare(b.word);
  });

  return (
    <div className="container">
    <div className="d-flex justify-content-between mt-5"><button type="button" className="btn btn-success"><Link className='text-decoration-none text-light ' to="/">Back</Link></button><button type="button" className="btn btn-success"><Link className='text-decoration-none text-light ' to="/Database">DataBase</Link></button></div>
      <h1 className="mx-2 my-4 text-center"> Add your word to our database</h1>
      <div className="input-group mb-3">
        <div className="ml-2 w-20">
          <input
            type="text"
            value={inputWord}
            onChange={(e) => {
              setInputWord(e.target.value);
            }}
            className="form-control"
            id="inputword"
            placeholder="Word"
          />
        </div>
        <div className="w-50 mx-2">
          <input
            type="text"
            value={inputMeaning}
            onChange={(e) => {
              setInputMeaning(e.target.value);
            }}
            className="form-control"
            id="inputmeaning"
            placeholder="Meaning"
          />
        </div>
        <button
          type="button"
          id="addbtn"
          onClick={addWord}
          className="btn btn-info text-light"
        >
          Add to Dictionary
        </button>
      </div>
      <table className="table table-striped table-hover table-responsive">
        <thead>
          <tr>
            <th scope="col">Word</th>
            <th scope="col">Meaning</th>
            <th scope="col">History</th>
          </tr>
        </thead>

        <tbody>
          {sortedData.map((elem, index) => {
            return (
              <tr key={index}>
                <td>{elem.word}</td>
                <td>{elem.meaning}</td>
                <td>{elem.time}</td>
              </tr>
            );
          })}{" "}
        </tbody>
      </table>
    </div>
  );
}
