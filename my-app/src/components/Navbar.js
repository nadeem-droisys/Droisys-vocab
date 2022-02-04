import React, {useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import img1 from "./logo-droisys.png";

export default function Navbar() {
  let location = useLocation();
  useEffect(() => {
  }, [location]);
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={img1} alt="Droisys" width="150" height="30" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/"?"active":""}`} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/Database"?"active":""}`} to="/Database">
                  Database
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/Newword"?"active":""}`} to="/Newword">
                  Add new
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/About"?"active":""}`} to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/Log-in"?"active":""}`} to="/Log-in">
                  Log in
                </Link>
              </li>
            </ul><div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">You are not logged in</label>
</div>
          </div>
        </div>
      </nav>
    </div>
  );
}
