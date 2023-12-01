import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close'; // Import the Close icon
import '../asserts/css/product.css';
import '../asserts/css/delete-popup.css';
import Form from 'react-bootstrap/Form';
import DeleteMod from './delete-btn';
import Img from '../asserts/imgs/category.png';
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

export default function CategoryAdd() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>

      <button className="product_add add_opt_btn add_cat_opt" onClick={handleOpen} >
        Add Category
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1.5C9.22562 1.53347 6.57431 2.65047 4.61239 4.61239C2.65047 6.57431 1.53347 9.22562 1.5 12C1.53347 14.7744 2.65047 17.4257 4.61239 19.3876C6.57431 21.3495 9.22562 22.4665 12 22.5C14.7744 22.4665 17.4257 21.3495 19.3876 19.3876C21.3495 17.4257 22.4665 14.7744 22.5 12C22.4665 9.22562 21.3495 6.57431 19.3876 4.61239C17.4257 2.65047 14.7744 1.53347 12 1.5ZM18 12.75H12.75V18H11.25V12.75H6V11.25H11.25V6H12.75V11.25H18V12.75Z" fill="white" />
        </svg>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <Box sx={style} className='opt_add_main'>
          {/* Close button */}
          <button className='close-button close_btn' onClick={handleClose}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2C8.2 2 2 8.2 2 16C2 23.8 8.2 30 16 30C23.8 30 30 23.8 30 16C30 8.2 23.8 2 16 2ZM21.4 23L16 17.6L10.6 23L9 21.4L14.4 16L9 10.6L10.6 9L16 14.4L21.4 9L23 10.6L17.6 16L23 21.4L21.4 23Z" fill="#E31927" fill-opacity="0.5" />
            </svg>

          </button>
          <div className='add_option_style'>
            <h4>
              Add Option
            </h4>
            <div className='cate_img'>
              <img src={Img} alt="" className='' />
              <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17" stroke="#1E1E1E" stroke-opacity="0.55" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16 5.00011L19 8.00011M20.385 6.58511C20.7788 6.19126 21.0001 5.65709 21.0001 5.10011C21.0001 4.54312 20.7788 4.00895 20.385 3.61511C19.9912 3.22126 19.457 3 18.9 3C18.343 3 17.8088 3.22126 17.415 3.61511L9 12.0001V15.0001H12L20.385 6.58511Z" stroke="#1E1E1E" stroke-opacity="0.55" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg></button>
            </div>
            <div className='cateory_add_field'>
              <select name="Categories" id="" className="add_language">
                <option value="English">English</option>
                <option value="English">English</option>
              </select>
              <input type="text" name="" id="" placeholder=" category Tilte " className="input" />

            </div>



            <button className='btn_to_add_list mt-3'>Add Language</button>
            <select name="Categories" id="" className="add_language">
              <option value="Present Category">Present Category</option>
              <option value="Present Category">Present Category</option>
            </select>
          </div>
          <button className="saved_product" >
            Save
          </button>

        </Box>
      </Modal>
    </div>
  );
}