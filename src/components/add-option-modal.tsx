import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../asserts/css/add-product.css';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddOpt() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal_box">
          <Typography id="modal-modal-title" variant="h6" component="h2" className='tilte_modal'>
      Option
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <ul>
            <li>Kahve Extra</li>
            <li>Kahve Extra</li>
            <li>Kahve Extra</li>
            <li>Kahve Extra</li>
            <li>Kahve Extra</li>
            <li>Kahve Extra</li>
            <li>Kahve Extra</li>
        </ul>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}