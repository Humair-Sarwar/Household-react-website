import React from 'react'
import { TfiWorld } from "react-icons/tfi";
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  return (
    <>
      <div className="container outer-unique-head-admin">
    <header className=" py-3 unique-head-admin">
      <ul className="nav nav-pills" >
        <li className="nav-item"><Link to="/" target='_blank' className="nav-link active browse-btn" aria-current="page"><TfiWorld style={{marginRight: '8px'}} />Browse Web</Link></li>
        
      </ul>
    </header>
  </div>
        
    </>
  )
}

export default AdminHeader
