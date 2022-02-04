import React from 'react';

export default function Newword() {
  return <div className='container'>
      <h1 className='mx-2 my-5'> Add your word to our database</h1>
      <div className="input-group mb-3">
  <input type="text" className="form-control mx-2" placeholder="Word" />
  <input type="text" className="form-control mx-2" placeholder="Meaning"/>
</div>
  </div>;
}
