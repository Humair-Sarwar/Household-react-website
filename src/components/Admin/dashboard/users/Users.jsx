import React, { useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useSelector } from "react-redux";
import CircularIndeterminate from "../Loader";

const Users = () => {
  const [searchTerm, updateSearch] = useState("");
  const [load, updateLoad] = useState(true);
  setTimeout(()=>{
    updateLoad(false)
  },2000)
  const contactUs = useSelector((store) => store.contactUs);
  const success = useSelector((store) => store.success);
  const contactUsSearchFilter = (e) => {
    updateSearch(e.target.value);
  };
  const filteredContacts = contactUs.filter((list) => {
    return searchTerm === "" || list.username.toLowerCase().includes(searchTerm.toLowerCase());
  });
  

  return (
    
    <div className="flexing-body clr-body-users service-cont-set-confirm">
      <div className="page-container-admin">
        <div className="user-container">
        
        {load == true ? <>
          <CircularIndeterminate/>
          
        </> : <>
        
          <h1>
            
              Users
            
          </h1>
          {success == true && <TransitionAlerts/>}
          
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
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
            
              {filteredContacts.length === 0 && searchTerm === '' ? (
                <tr className="special-chang no-data-cls">
                  <td colSpan="5">No data available.</td>
                </tr>
              ) : filteredContacts.length === 0 ? (
                <tr className="special-chang no-data-cls">
                  <td colSpan="5">No data match the search term.</td>
                </tr>
              ) : (
                filteredContacts.map((data, index) => (
                  <tr key={index} className="special-chang">
                    <td>{index + 1}</td>
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
                          <SimpleDialogUpdateData index={index} />
                        </i>
                      </a>
                      <a
                        href="#"
                        className="delete-trash"
                        id="delete-service-btn"
                        title="Delete"
                      >
                        <i className="fa-solid">
                          <SimpleDialogDemoDelete index={index} />
                        </i>
                      </a>
                      <a href="#" id="edit-user-btn" title="Edit">
                        <i className="fa-solid">
                          <SimpleDialogDemo index={index} />
                        </i>
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          </>
}
                </div>
      </div>
    </div>
  );
};

export default Users;
