import React from 'react';

export default function Form() {
  return <div className='container'>
      <form className='mt-5'>
  <div className="mb-3 w-90">
    <label htmlFor="exampleInputUsername" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="exampleInputUsername" />
  </div>
  <div className="mb-3 w-90">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3 w-90">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
    <small id="passwordHelpBlock" className="form-text text-muted">
  Password must be 8-20 characters long, contain letters and numbers only.
</small>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Sign up</button>
</form>
  </div>;
}
