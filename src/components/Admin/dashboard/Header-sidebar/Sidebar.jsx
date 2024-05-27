import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GoDatabase } from "react-icons/go";
import { IoLogOutOutline } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { useSelector } from "react-redux";

const Sidebar = () => {
  let showUsername = useSelector(state=>state.showUsername);
  let location = useLocation();
  return (
    <>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: "20%", height: "100vh", position:'fixed', top:'0'}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4">Household</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
      
        <Link to="/admin/dashboard" className={`nav-link text-white ${location.pathname== '/admin/dashboard' && 'active'}`} aria-current="page"><MdOutlineDashboardCustomize />&nbsp;
          Dashboard
        </Link>
      </li>
      
      <li>
        <Link to="/admin/job-form-data" className={`nav-link text-white ${location.pathname== '/admin/job-form-data' && 'active'}`}><GoDatabase />&nbsp;
          Job Form Data
        </Link>
      </li>
      <li>
        <Link to="/admin/contact-us-data" className={`nav-link text-white ${location.pathname== '/admin/contact-us-data' && 'active'}`}><IoMdContacts />&nbsp;
          Contact Us Data
        </Link>
      </li>
      <li>
        <Link to="/admin/users" className={`nav-link text-white ${location.pathname== '/admin/users' && 'active'}`}>
        <FaUsers />&nbsp;
          Users
        </Link>
      </li>
      <li>
        <Link to="/admin/login" className={`nav-link text-white ${location.pathname== '/admin/login' && 'active'}`}><IoLogOutOutline />&nbsp;
          Logout
        </Link>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        
        <div style={{backgroundColor: 'green', width: '33px', height: '33px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '500', fontSize: '18px'}} className="design-sidebar-circle"> {showUsername.charAt(0).toUpperCase()}</div>&nbsp;
        <strong>{showUsername}</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
    </>
  );
};

export default Sidebar;
