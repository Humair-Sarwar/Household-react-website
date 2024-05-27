import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function AddedNewUser() {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ width: '100%' }} >
      <Collapse  in={open}>
        <Alert className='successMsg'
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Successfully! Added New User
        </Alert>
      </Collapse>
      <Button
        style={{display: 'none'}}
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Re-open
      </Button>
    </Box>
  );
}
export function SuccessfullyUpdated() {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ width: '100%' }} >
      <Collapse  in={open}>
        <Alert className='successMsg'
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Successfully! Updated Record
        </Alert>
      </Collapse>
      <Button
        style={{display: 'none'}}
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Re-open
      </Button>
    </Box>
  );
}