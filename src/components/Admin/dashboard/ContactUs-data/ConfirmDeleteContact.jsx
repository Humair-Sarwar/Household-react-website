import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { useDispatch, useSelector } from "react-redux";
import { contactUsSliceActions } from "../../../../store/contactUsDataSlices/contactUs";
import { MdDelete } from "react-icons/md";
import { deleteSingleContactUsSliceActions } from "../../../../store/contactUsDataSlices/deleteContactForm";
import { SuccessMsgActions } from "../../../../store/SuccessMsg";

const emails = [];

function SimpleDialog(props) {
  let dispatch = useDispatch();
  let deleteDataContact = useSelector((state) => state.deleteDataContact);

  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };
  
  let deleteRecordContactForm = () => {
    dispatch(contactUsSliceActions.formDataDeleteSingle(deleteDataContact));
    handleClose();
    dispatch(SuccessMsgActions.successMsgShow());
    setTimeout(()=>{
      dispatch(SuccessMsgActions.successMsgHide());
    },6000)
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <div style={{ padding: "24px" }}>
        <DialogTitle
          style={{
            padding: "0 0px 20px 0px",
            textAlign: "center",
            fontSize: "17px",
          }}
        >
          Are you sure do you want to delete this record?
          
        </DialogTitle>

        <div className="contact-us-view-popup">
          <Button
            onClick={handleClose}
            style={{
              marginRight: "9px",
              marginLeft: "5px",
              height: "30px",
              fontWeight: 600,
            }}
            variant="outlined"
          >
            No
          </Button>
          <Button
            onClick={deleteRecordContactForm}
            style={{ backgroundColor: "red", height: "30px", fontWeight: 600 }}
            variant="contained"
          >
            Yes
          </Button>
        </div>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function SimpleDialogDemoDelete({ index }) {
  let dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = (index) => {
    setOpen(true);
    dispatch(deleteSingleContactUsSliceActions.formDataDeleteSingle(index));
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <MdDelete variant="outlined" onClick={() => handleClickOpen(index)}>
        Open simple dialog
      </MdDelete>

      <SimpleDialog
        open={open}
        onClose={handleClose}
      />
    </>
  );
}
