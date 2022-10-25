import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div className={`container-fluid bg-${props.mode}`}>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav align-items-center me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">{props.aboutText}</a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <div className="d-flex align-items-center">
              <div className='blue-circle color-circle me-2'></div>
              <div className='yellow-circle color-circle me-2'></div>
              <div className='purple-circle color-circle me-2' onClick={props.redMode}></div>
            </div>
            <div className="form-check form-switch ps-5">
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" />
              <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`}>Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About'
};