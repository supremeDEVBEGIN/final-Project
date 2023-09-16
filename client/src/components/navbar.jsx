import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style.css'
import liff from '@line/liff'

function Navbar() {
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  useEffect(()=>{
    liff.init({liffId:'2000508817-l2074gpM'})
  },[])

  const handleLoginLiff = ()=>{
    try{
      liff.login()
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">ResBook</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/promotion" style={linkStyle}>โปรโมชั่น</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/booking" style={linkStyle}>จองโต๊ะ</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/map" style={linkStyle}>แผนที่</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login" style={linkStyle}>เมมเบอร์</Link>
              </li>
            </ul>
          </div>
          <div className="ml-auto">
            <a className="line-login-button" onClick={handleLoginLiff}>Line Login</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
