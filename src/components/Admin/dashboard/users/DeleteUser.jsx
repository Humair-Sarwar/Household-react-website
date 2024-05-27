import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md"
import { deleteSingleUserSliceActions } from "../../../../store/users/deleteUser";
import { usersSliceActions } from "../../../../store/users/users";
import { SuccessMsgActions } from "../../../../store/SuccessMsg";


const emails = [];

function SimpleDialog(props) {
  let dispatch = useDispatch();
  let deleteUserId = useSelector((state) => state.deleteUserId);
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };
  
  let deleteRecordContactForm = () => {
    dispatch(usersSliceActions.deleteUser(deleteUserId));
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
          Are you sure do you want to delete this user?
          
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

export default function DeleteUser({ id }) {
  console.log('idddddddddd', id);
  let dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = (id) => {
    setOpen(true);
    dispatch(deleteSingleUserSliceActions.deleteSingleUser(id));
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <MdDelete variant="outlined" style={{color: '#e94560'}} onClick={() => handleClickOpen(id)}>
        Open simple dialog
      </MdDelete>

      <SimpleDialog
        open={open}
        onClose={handleClose}
      />
    </>
  );
}
