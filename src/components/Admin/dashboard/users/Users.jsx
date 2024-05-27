import React, { useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import CircularIndeterminate from "../Loader";
import { useSelector } from "react-redux";
import AddNewUser from "./AddUsers";
import AddedNewUser, { SuccessfullyUpdated } from "../AddedSuccess";
import DeleteUser from "./DeleteUser";
import TransitionAlerts from "../SuccessMessage";
import { Pagination } from "@mui/material";
import UpdateUser from "./UpdateUser";

const Users = () => {
  const [searchTerm, updateSearch] = useState("");
  let users = useSelector(state=>state.users);
  const addNewUser = useSelector((store) => store.addNewUser);
  const success = useSelector((store) => store.success);
  const updated = useSelector((store) => store.updated);
  const [page, setPage] = useState(1)
  const userSearchFilter = (e) => {
    updateSearch(e.target.value);
    setPage(1);
  };
  const filteredUsers = users.filter((list) => {
    return (
      searchTerm === "" ||
      list.userName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  const handlePageChange = (event, value) => {
    setPage(value);
  };
 

  const startIndex = (page - 1) * 5;
  const endIndex = startIndex + 5;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);
  const [load, updateLoad] = useState(true);
  setTimeout(()=>{
    updateLoad(false)
  },2000)
 

  

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
          {addNewUser == true && <AddedNewUser />}
          {success == true && <TransitionAlerts />}
          {updated == true && <SuccessfullyUpdated />}
          <div className="search-add-container">
            <div className="search-box-icn border-global-css">
              <i className="fa-solid">
                <IoIosSearch style={{ fontSize: "20px" }} />
              </i>
              <input
                onInput={userSearchFilter}
                type="search"
                name="search"
                id="searchInput"
                placeholder="Search by name..."
              />
            </div>
            <AddNewUser/>
          </div>

          <table id="userTable">
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>Username</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {paginatedUsers.length == 0 ? (
                    <tr className="special-chang no-data-cls">
                      <td colSpan="5">No data available.</td>
                    </tr>
                  ) : paginatedUsers.map((user, index)=>{
                return(
                  <tr className="special-chang">
                    <td>{startIndex + index + 1}</td>
                    <td>{user.userName}</td>
                    <td>{user.password}</td>
                    
                    <td>
                    <a href="#" id="edit-user-btn" title="Edit">
                        <i className="fa-solid">
                          <UpdateUser id={user.id} />
                        </i>
                      </a>
                      <a href="#" title="Delete">
                      <i className="fa-solid">
                              <DeleteUser id={user.id} />
                      </i>
                      </a>
                    </td>
                  </tr>
                )
              })}
                  
            </tbody>
          </table>
          <div style={{display: 'flex', justifyContent: 'center', marginTop:'10px'}}>
                <Pagination 
                  count={Math.ceil(filteredUsers.length / 5)} 
                  page={page} 
                  onChange={handlePageChange} 
                  variant="outlined" 
                  color="primary" 
                />
              </div>
          </>
}
                </div>
      </div>
    </div>
  );
};

export default Users;
