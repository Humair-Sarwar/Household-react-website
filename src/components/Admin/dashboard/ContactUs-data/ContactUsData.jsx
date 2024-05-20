import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SimpleDialogDemo from "./ViewContactData";
import SimpleDialogDemoDelete from "./ConfirmDeleteContact";
import SimpleDialogUpdateData from "./UpdateContactData";
import TransitionAlerts, { SuccessfullyUpdated } from "../SuccessMessage";
import CircularIndeterminate from "../Loader";
import Pagination from '@mui/material/Pagination';

const ContactUsData = () => {
  const [searchTerm, updateSearch] = useState("");
  const [load, updateLoad] = useState(true);
  setTimeout(() => {
    updateLoad(false);
  }, 2000);
  const contactUs = useSelector((store) => store.contactUs);
  const success = useSelector((store) => store.success);
  const updated = useSelector((store) => store.updated);
  const [page, setPage] = useState(1)
  const contactUsSearchFilter = (e) => {
    updateSearch(e.target.value);
    setPage(1);
  };
  const filteredContacts = contactUs.filter((list) => {
    return (
      searchTerm === "" ||
      list.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handlePageChange = (event, value) => {
    setPage(value);
  };
 

  const startIndex = (page - 1) * 5;
  const endIndex = startIndex + 5;
  const paginatedContacts = filteredContacts.slice(startIndex, endIndex);

  return (
    <div className="flexing-body clr-body-users service-cont-set-confirm">
      <div className="page-container-admin">
        <div className="user-container">
          {load == true ? (
            <CircularIndeterminate />
          ) : (
            <>
              <h1>
                <Link to="/contact-us" style={{ color: "black" }}>
                  Contact Us Data
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
                    onInput={contactUsSearchFilter}
                    type="search"
                    name="search"
                    id="searchInput"
                    placeholder="Search by name..."
                  />
                </div>
              </div>

              <table id="userTable">
                <thead>
                  <tr>
                    <th>Sr. No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {paginatedContacts.length === 0 ? (
                    <tr className="special-chang no-data-cls">
                      <td colSpan="5">No data available.</td>
                    </tr>
                  ) : (
                    paginatedContacts.map((data, index) => (
                      <tr key={index} className="special-chang">
                        <td>{startIndex + index + 1}</td>
                        <td>{data.username}</td>
                        <td>{data.userEmail}</td>
                        <td>
                          <div
                            className="truncate"
                            style={{
                              width: "200px",
                              paddingLeft: "20px",
                            }}
                          >
                            {data.userDescription}
                          </div>
                        </td>
                        <td>
                          <a href="#" id="edit-user-btn" title="Edit">
                            <i className="fa-solid">
                              <SimpleDialogUpdateData indxxx={startIndex + index} />
                            </i>
                          </a>
                          <a
                            href="#"
                            className="delete-trash"
                            id="delete-service-btn"
                            title="Delete"
                          >
                            <i className="fa-solid">
                              <SimpleDialogDemoDelete index={startIndex + index} />
                            </i>
                          </a>
                          <a href="#" id="edit-user-btn" title="Edit">
                            <i className="fa-solid">
                              <SimpleDialogDemo index={startIndex + index} />
                            </i>
                          </a>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              <div style={{display: 'flex', justifyContent: 'center', marginTop:'10px'}}>
                <Pagination 
                  count={Math.ceil(filteredContacts.length / 5)} 
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

export default ContactUsData;
