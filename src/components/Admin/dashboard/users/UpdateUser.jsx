import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RiPencilFill } from "react-icons/ri";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { updateUserSliceActions } from "../../../../store/users/updateUsers";
import { usersSliceActions } from "../../../../store/users/users";
import { UpdatedMsgSliceActions } from "../../../../store/UpdatedMsg";
const emails = [];

function SimpleDialog(props) {
  let dispatch = useDispatch();
  let users = useSelector((state) => state.users);
  let id = useSelector((state) => state.updateUser);
  
  let oneSingleUser = users.filter(
    (data) => data.id == id
  );

  let oneSingleUserData = oneSingleUser[0];
  let [userData, updateData] = useState(oneSingleUserData || {});
  React.useEffect(() => {
    updateData(oneSingleUserData);
  }, [oneSingleUserData]);
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
    updateData(oneSingleUserData);
  };
  const handleClose1 = () => {
    onClose(selectedValue);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateData({
      ...userData,
      [name]: value,
    });
  };
  let handleUpdate = () => {
    handleClose1();
    dispatch(
      usersSliceActions.updateUserData({ id, userData })
    );
    dispatch(UpdatedMsgSliceActions.updatedMsgShow());
    setTimeout(() => {
      dispatch(UpdatedMsgSliceActions.updatedMsgHide());
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
        User Update
      </DialogTitle>
      <div style={{ padding: "10px" }}>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          {userData && 
            <TextField
              size="small"
              onChange={handleChange}
              name="userName"
              value={userData.userName}
              style={{ margin: "5px" }}
              fullWidth
              label="Username"
              id="fullWidth"
            />
          }
          {userData &&
            <TextField
              size="small"
              onChange={handleChange}
              name="password"
              
              value={userData.password}
              style={{ margin: "5px" }}
              fullWidth
              label="Password"
              id="fullWidth"
            />
          }
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
              Update
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

export default function UpdateUser({ id }) {
  let dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
    dispatch(updateUserSliceActions.getUserUpdateId(id));
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <RiPencilFill variant="outlined" onClick={() => handleClickOpen()}>
        Open simple dialog
      </RiPencilFill>

      <SimpleDialog
        open={open}
        onClose={handleClose}
      />
    </>
  );
}
