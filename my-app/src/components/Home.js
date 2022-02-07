import React, { useState, useEffect } from 'react';

export default function Home() {
  const [inputWord, setInputWord] = useState("")
  const [search, setSearch] = useState("")
  const [inputMeaning, setInputMeaning] = useState("") 
  const [insertWord, setInsertWord] = useState(getDataLocal());
  function getDataLocal(){
     let localData = localStorage.getItem("dictionary")
     if(localData){
     return JSON.parse(localStorage.getItem("dictionary"))
     }
     else{
       return [];
     }
  }
  useEffect(() => {
           localStorage.setItem("dictionary", JSON.stringify(insertWord))
  }, [insertWord]);
  

  function addWord(e){
             e.preventDefault();
             let insertWords = {
               word: inputWord,
               meaning: inputMeaning
             }
             
             if(!inputWord){
 
             }
             else{
               setInsertWord([...insertWord, insertWords])
             setInputWord("")
             setInputMeaning("")
             }
  }

  return <div className='container'>
      <h1 className='my-5 mx-2'>Type your word below</h1>
      <div className="input-group input-group-lg">
  <input type="text" className="form-control" onChange={(e)=>{setSearch(e.target.value)}} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
</div>
      <div> <div id='notes'>{
                  insertWord.filter((val)=>{
                    if(search===""){
                      return val
                    }
                    else if(val.word.toLowerCase().includes(search.toLowerCase())){
                      return val
                    }
                  }).map((elem, index)=>{
                    return(
                      <h4 className='my-3' key={index}>{elem.word} : {elem.meaning}</h4>
                    )
                  })  
} </div></div>
  </div>;
}
