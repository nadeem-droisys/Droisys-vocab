import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return <div className='container mt-5'>
      <form>
  <div className="form-group w-90">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group w-90">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Log in</button>
  <button type="button" className="btn btn-success mx-2"><Link className='text-decoration-none text-light ' to="/Sign-up">Sign up</Link></button>
  
</form>
  </div>;
}
