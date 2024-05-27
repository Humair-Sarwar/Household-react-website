import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { MdOutlineCancel } from "react-icons/md";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { usersSliceActions } from '../../../../store/users/users'
import { v4 } from "uuid";
import { AddNewUserMsgSliceActions } from "../../../../store/AddedNewMsg";
const emails = [];

function SimpleDialog(props) {
  let dispatch = useDispatch();
  let id = v4();
  let usernameVal = React.useRef();
  let passwordVal = React.useRef();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };
  const handleClose1 = () => {
    onClose(selectedValue);
  };
  
  let handleUpdate = () => {
    handleClose1();
    let userName = usernameVal.current.value;
    let password = passwordVal.current.value;
    dispatch(
      usersSliceActions.showAllUsers({id, userName, password})
    );
    id = '';
    usernameVal.current.value = '';
    passwordVal.current.value = '';
    dispatch(AddNewUserMsgSliceActions.addMsgShow());
    setTimeout(() => {
      dispatch(AddNewUserMsgSliceActions.addMsgHide());
    }, 6000);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <MdOutlineCancel
        onClick={handleClose}
        style={{
          margin: "5px 5px 0px 5px",
          fontSize: "20px",
          color: "red",
          cursor: "pointer",
        }}
      />
      <DialogTitle style={{ padding: "0 24px", textAlign: "center" }}>
        Add New User
      </DialogTitle>
      <div style={{ padding: "10px" }}>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
            <TextField
              inputRef={usernameVal}
              size="small"
              name="username"
              style={{ margin: "5px" }}
              fullWidth
              label="Username"
              id="fullWidth"
            />
            <TextField
              size="small"
              inputRef={passwordVal}
              style={{ margin: "5px" }}
              fullWidth
              label="Password"
              id="fullWidth"
            />
          
          
          <div style={{ display: "flex", justifyContent: "right" }}>
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
              onClick={handleUpdate}
              style={{
                backgroundColor: "red",
                height: "30px",
                fontWeight: 600,
              }}
              variant="contained"
            >
              Add
            </Button>
          </div>
        </Box>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function AddNewUser() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      
      <Button onClick={() => handleClickOpen()} style={{fontSize: '22px', backgroundColor: '#0d6efd'}} variant="contained" type="submit">
            <IoIosAddCircleOutline />
              </Button>

      <SimpleDialog
        open={open}
        onClose={handleClose}
      />
    </>
  );
}
