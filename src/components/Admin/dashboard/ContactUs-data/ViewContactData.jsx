import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { MdOutlineCancel } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { ViewSingleContactUsSliceActions } from '../../../../store/contactUsDataSlices/viewContactForm';

const emails = [];

function SimpleDialog(props) {
  let contactUs = useSelector(state=>state.contactUs);
  let viewDataContact = useSelector(state=>state.viewDataContact);
  let oneSingleRecordForm = contactUs.filter((data, index)=> index == viewDataContact);
  let oneSingleRecordFormData = oneSingleRecordForm[0] || {};
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  

  return (
    <Dialog onClose={handleClose} open={open}>
      <MdOutlineCancel onClick={handleClose} style={{margin: '5px 5px 0px 5px', fontSize: '20px', color: 'red', cursor:'pointer'}}/>
      <DialogTitle style={{padding: '0 24px', textAlign: 'center'}}>Contact Us Form Record</DialogTitle>
      
      <div className='contact-us-view-popup'>
        <table border={'1'}>
          <tr>
            <th>Name: </th>
            <td>{oneSingleRecordFormData.username}</td>
          </tr>
          <tr>
            <th>Email: </th>
            <td>{oneSingleRecordFormData.userEmail}</td>
          </tr>
          <tr>
            <th>Message: </th>
            <td>{oneSingleRecordFormData.userDescription}</td>
          </tr>
        </table>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function SimpleDialogDemo({index}) {
  let dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  
  const handleClickOpen = (index) => {
    setOpen(true);
    dispatch(ViewSingleContactUsSliceActions.formDataViewSingle(index))
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      
      
      <FaEye style={{ color: "green" }}  variant="outlined" onClick={()=>handleClickOpen(index)}>
        Open simple dialog
      </FaEye>
      
      <SimpleDialog
        open={open}
        onClose={handleClose}
      />
      
    </>
  );
}
