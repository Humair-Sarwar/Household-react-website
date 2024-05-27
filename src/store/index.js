import { configureStore } from "@reduxjs/toolkit";
import contactUsSlice from "./contactUsDataSlices/contactUs";
import ViewSingleContactUsSlice from "./contactUsDataSlices/viewContactForm";
import deleteSingleContactUsSlice from "./contactUsDataSlices/deleteContactForm";
import SuccessMsgSlice from "./SuccessMsg";
import UpdatedMsgSlice from "./UpdatedMsg";
import UpdateSingleContactUsSlice from "./contactUsDataSlices/updateContactForm";
import JobFormSlice from "./jobFormDataSlices/jobForm";
import deleteSingleJobFormSlice from "./jobFormDataSlices/deleteConfirmJobForm";
import usersSlice from "./users/users";
import AddNewUserMsgSlice from "./AddedNewMsg";
import deleteSingleUserSlice from "./users/deleteUser";
import updateUserSlice from "./users/updateUsers";
import showUsernameSlice from "./users/usernameShowSide";


let webStore = configureStore({
  reducer:{
    contactUs: contactUsSlice.reducer,
    viewDataContact: ViewSingleContactUsSlice.reducer,
    updateDataContact : UpdateSingleContactUsSlice.reducer,
    deleteDataContact : deleteSingleContactUsSlice.reducer,
    success: SuccessMsgSlice.reducer,
    updated: UpdatedMsgSlice.reducer,
    jobFormData: JobFormSlice.reducer,
    deleteJobFormSingle : deleteSingleJobFormSlice.reducer,
    users: usersSlice.reducer,
    addNewUser: AddNewUserMsgSlice.reducer,
    deleteUserId: deleteSingleUserSlice.reducer,
    updateUser: updateUserSlice.reducer,
    showUsername: showUsernameSlice.reducer
  }
});

export default webStore;