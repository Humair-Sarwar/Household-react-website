import React, { useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import CircularIndeterminate from "../Loader";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ViewJobFormData from "./ViewJobFormData";
import ConfirmDeleteJobForm from "./ConfirmDeleteJobForm";
import EditJobFormData from "./EditJobForm";
import TransitionAlerts, { SuccessfullyUpdated } from "../SuccessMessage";

import Pagination from '@mui/material/Pagination';
const JobApplicationData = () => {
  const success = useSelector((store) => store.success);
  const updated = useSelector((store) => store.updated);
  const [page, setPage] = useState(1)
    let [getInputVal, updateInputVal] = useState('');
    let handleBySearch = (e)=>{
        updateInputVal(e.target.value);
        setPage(1);
    }
  let jobFormData = useSelector((state) => state.jobFormData);
  const [load, updateLoad] = useState(true);
  setTimeout(() => {
    updateLoad(false);
  }, 2000);
  let filteredData = jobFormData.filter((data)=>{
    return (
        (data.firstName.toLowerCase().includes(getInputVal.toLowerCase()) || data.lastName.toLowerCase().includes(getInputVal.toLowerCase())) || getInputVal == '')
  })
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const startIndex = (page - 1) * 5;
  const endIndex = startIndex + 5;
  const paginatedContacts = filteredData.slice(startIndex, endIndex);
  return (
    <div className="flexing-body clr-body-users service-cont-set-confirm">
      <div className="page-container-admin">
        <div className="user-container">
          {load == true ? (
            <CircularIndeterminate />
          ) : (
            <>
              <h1>
                <Link
                  style={{ color: "black" }}
                  to="/careers/job-application-form"
                >
                  Job Form Data
                </Link>
              </h1>
              {success == true && <TransitionAlerts />}
              {updated == true && <SuccessfullyUpdated />}
              <div className="search-add-container">
                <div className="search-box-icn border-global-css">
                  <i className="fa-solid">
                    <IoIosSearch style={{ fontSize: "20px" }} />
                  </i>
                  <input
                    onInput={handleBySearch}
                    type="search"
                    name="search"
                    id="searchInput"
                    placeholder="Search candidates by name..."
                  />
                </div>
              </div>

              <table id="userTable">
                <thead>
                  <tr>
                    <th>Sr. No</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Role Applying For</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                    {paginatedContacts.length === 0 || filteredData == '' ? <tr className="special-chang no-data-cls">
                      <td colSpan="5">No data available.</td>
                    </tr> : paginatedContacts.map((data, index) => {
                    return (
                      <tr className="special-chang">
                        <td>{startIndex + index + 1}</td>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.email}</td>
                        <td>{data.roleApplyingFor}</td>
                        <td>
                          <a href="#" id="edit-user-btn" title="Edit">
                            <i className="fa-solid">
                              <EditJobFormData id={data.id}/>
                            </i>
                          </a>
                          <a
                            href="#"
                            className="delete-trash"
                            id="delete-service-btn"
                            title="Delete"
                          >
                            <i className="fa-solid">
                              <ConfirmDeleteJobForm id={data.id} />
                            </i>
                          </a>
                          <a href="#" id="edit-user-btn" title="Edit">
                            <i className="fa-solid">
                                <ViewJobFormData id={data.id} />
                            </i>
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div style={{display: 'flex', justifyContent: 'center', marginTop:'10px'}}>
                <Pagination 
                  count={Math.ceil(filteredData.length / 5)} 
                  page={page} 
                  onChange={handlePageChange} 
                  variant="outlined" 
                  color="primary" 
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobApplicationData;
