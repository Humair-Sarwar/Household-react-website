import { configureStore } from "@reduxjs/toolkit";
import contactUsSlice from "./contactUsDataSlices/contactUs";
import ViewSingleContactUsSlice from "./contactUsDataSlices/viewContactForm";
import deleteSingleContactUsSlice from "./contactUsDataSlices/deleteContactForm";
import SuccessMsgSlice from "./SuccessMsg";
import UpdatedMsgSlice from "./UpdatedMsg";
import UpdateSingleContactUsSlice from "./contactUsDataSlices/updateContactForm";


let webStore = configureStore({
  reducer:{
    contactUs: contactUsSlice.reducer,
    viewDataContact: ViewSingleContactUsSlice.reducer,
    updateDataContact : UpdateSingleContactUsSlice.reducer,
    deleteDataContact : deleteSingleContactUsSlice.reducer,
    success: SuccessMsgSlice.reducer,
    updated: UpdatedMsgSlice.reducer
  }
});

export default webStore;