import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { contactUsSliceActions } from "../../../../store/contactUsDataSlices/contactUs";
import { RiPencilFill } from "react-icons/ri";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { UpdatedMsgSliceActions } from "../../../../store/UpdatedMsg";
import { UpdateSingleContactUsSliceActions } from "../../../../store/contactUsDataSlices/updateContactForm";
const emails = [];

function SimpleDialog(props) {
  let dispatch = useDispatch();
  let contactUs = useSelector((state) => state.contactUs);
  let viewDataContact = useSelector((state) => state.updateDataContact);
  let oneSingleRecordForm = contactUs.filter(
    (data, index) => index == viewDataContact
  );

  let oneSingleRecordFormData = oneSingleRecordForm[0];
  let [formData, updateData] = useState(oneSingleRecordFormData || {});
  React.useEffect(() => {
    updateData(oneSingleRecordFormData);
  }, [oneSingleRecordFormData]);
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
    updateData(oneSingleRecordFormData);
  };
  const handleClose1 = () => {
    onClose(selectedValue);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    updateData({
      ...formData,
      [name]: value,
    });
  };
  let handleUpdate = () => {
    handleClose1();
    dispatch(
      contactUsSliceActions.formDataUpdateSingle({ viewDataContact, formData })
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
        Contact Us Form Record Update
      </DialogTitle>
      <div style={{ padding: "10px" }}>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          {formData && (
            <TextField
              onChange={handleChange}
              name="username"
              value={formData.username}
              style={{ margin: "5px" }}
              fullWidth
              label="Name"
              id="fullWidth"
            />
          )}
          {formData && (
            <TextField
              onChange={handleChange}
              name="userEmail"
              type="email"
              value={formData.userEmail}
              style={{ margin: "5px" }}
              fullWidth
              label="Email"
              id="fullWidth"
            />
          )}
          {formData && (
            <TextField
              name="userDescription"
              onChange={handleChange}
              value={formData.userDescription}
              style={{ margin: "5px 5px 10px 5px", width: "500px" }}
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
            />
          )}
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

export default function SimpleDialogUpdateData({ indxxx }) {
  let dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
    dispatch(UpdateSingleContactUsSliceActions.formDataUpdateSingle(indxxx));
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
