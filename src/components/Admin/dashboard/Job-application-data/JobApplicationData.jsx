import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import CircularIndeterminate from '../Loader';
const JobApplicationData = () => {
    const [load, updateLoad] = useState(true);
  setTimeout(()=>{
    updateLoad(false)
  },2000)
  return (
    <div className="flexing-body clr-body-users service-cont-set-confirm">
    <div className="page-container-admin">
        
        <div className="user-container">
            {load == true ? 
            <CircularIndeterminate/>: <>
                <h1>Job Form Data</h1>
            <div className="search-add-container">
                <div className="search-box-icn border-global-css">
                    <i className="fa-solid"><IoIosSearch style={{fontSize:'20px'}}/></i>
                    <input type="search" name="search" id="searchInput" placeholder="Search candidates by name..." />
                </div>
                {/* <a href="add-service.php" id="add-user-btn"><i className="fa-solid "><IoIosAddCircleOutline style={{fontSize: '25px'}}/></i> Add Service</a> */}
            </div>
           
            <div className="background-full-dark-cont-service"></div>
           
            
            <table id="userTable">
                <thead>
                    <tr>
                        <th>Sr. No</th>
                        <th>Service Name</th>
                        <th>Inactive/ Active</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                
                        <tr className="special-chang">
                            <td>545</td>
                            <td>fadsf</td>
                            <td>
                            </td>
                            <td>
                                <a href="edit-service.php?id=<?php echo $row['sid']; ?>" id="edit-user-btn" title="Edit"><i className="fa-solid fa-pencil"></i></a>
                                <a href="delete-service.php?id=<?php echo $row['sid']; ?>" className="delete-trash" id="delete-service-btn"><i className="fa-solid fa-trash"></i></a>
                                
                            </td>
                            
                        </tr>
                        <tr className="special-chang">
                            <td>545</td>
                            <td>fadsf</td>
                            <td>
                            </td>
                            <td>
                                <a href="edit-service.php?id=<?php echo $row['sid']; ?>" id="edit-user-btn" title="Edit"><i className="fa-solid fa-pencil"></i></a>
                                <a href="delete-service.php?id=<?php echo $row['sid']; ?>" className="delete-trash" id="delete-service-btn"><i className="fa-solid fa-trash"></i></a>
                                
                            </td>
                            
                        </tr>
                        <tr className="special-chang">
                            <td>545</td>
                            <td>fadsf</td>
                            <td>
                            </td>
                            <td>
                                <a href="edit-service.php?id=<?php echo $row['sid']; ?>" id="edit-user-btn" title="Edit"><i className="fa-solid fa-pencil"></i></a>
                                <a href="delete-service.php?id=<?php echo $row['sid']; ?>" className="delete-trash" id="delete-service-btn"><i className="fa-solid fa-trash"></i></a>
                                
                            </td>
                            
                        </tr>
                        
                    <tr id="noUserRow" style={{display:"none"}}>
                <td colSpan="4">Service not found.</td>
            </tr>
                </tbody>
            </table>

            </>}
            

        </div>
    </div>

</div>
  )
}

export default JobApplicationData
