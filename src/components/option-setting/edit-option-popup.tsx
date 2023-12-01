import React, { useEffect, useRef } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close'; // Import the Close icon
import '../../asserts/css/product.css';
import '../../asserts/css/delete-popup.css';
import Form from 'react-bootstrap/Form';
// import DeleteMod from './delete-btn';
import { useState } from 'react';
import { addNewOption, getAllAllergen, getAllCategories } from "./api";
import { showErrorMsg, showSuccessMsg } from "../../utils/notifications";
import { useNavigate } from "react-router-dom";
import {addOptionById} from '../../components/option-setting/api';
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
interface Categories {
  id: string;
  title: string;
  isSubCategory: string;
  rank: string;
}
interface ListItem {
  name: string;
  price: string;
}
interface Allergens {
  id: string,
  special_name: string,
  name :string
}



  const OptionEdit = () => {


 const [open, setOpen] = React.useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [locale, setLocale] = useState([{ name: '', special_name: '' }]);
 const [type, setType] = useState('');
  const [ProductBase, setProductBase] = useState(false);
 const [Unlimited, setUnlimited] = useState(false);


 const [categories, setCategories] = useState<Categories[]>([]);
 const [allAllergens, setAllAllergens] = useState<Allergens[]>([]);
  const handleLocale = (type: string, value: string, index: number) => {
    let localeData = locale;
    let currentObj = locale[index];
    switch (type) {
      case 'name':
        currentObj.name = value;
        break;
      case 'special_name':
        currentObj.special_name = value;
       
      // case 'lang':
      //   currentObj.lang = value;
    }

    localeData[index] = currentObj;
    setLocale(localeData);
    console.log(currentObj.name)

  };
 
  const handleSave = async () => {
    setLoading(true);
   try {
    const payload = {
      option: {
        name: locale[0].name,
        special_name: locale[0].special_name,
         ProductBase: ProductBase,
         unlimitedChoice: Unlimited,

      },

   
    }

    const response = await addNewOption(payload);
    console.log('== response ===', response);
     if (response.response) {
        if(response?.response?.status === 400) {
         showErrorMsg('Please fill all required fields');
        }else {
        showErrorMsg(response.message);
       }
      }else if (response?.data){
        showSuccessMsg('Product added successfully');
        navigate('/option');

      }else {
        showErrorMsg('Something went wrong');
  }
    

   } catch (err) {
    console.log('=== err ===', err);
   }finally{
    setLoading(false);
   }
    
  };

  useEffect(() => {
    getAllCategories(setCategories);
    getAllAllergen(setAllAllergens);
  }, [])
  const [items, setItems] = useState<ListItem[]>([]);

  const handleAddItem = () => {
    setItems([...items, { name: '', price: '' }]);
  };

  const handleDeleteItem = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleInputChange = (index: number, field: keyof ListItem, value: string) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };
  return (
    <div>
     
     <button className="product_add add_opt_btn" onClick={handleOpen} >
           
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 5L19 8M20.385 6.585C20.7788 6.19115 21.0001 5.65698 21.0001 5.1C21.0001 4.54302 20.7788 4.00885 20.385 3.615C19.9912 3.22115 19.457 2.99989 18.9 2.99989C18.343 2.99989 17.8088 3.22115 17.415 3.615L9 12V15H12L20.385 6.585Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
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
<path d="M16 2C8.2 2 2 8.2 2 16C2 23.8 8.2 30 16 30C23.8 30 30 23.8 30 16C30 8.2 23.8 2 16 2ZM21.4 23L16 17.6L10.6 23L9 21.4L14.4 16L9 10.6L10.6 9L16 14.4L21.4 9L23 10.6L17.6 16L23 21.4L21.4 23Z" fill="#E31927" fill-opacity="0.5"/>
</svg>

          </button>
        
          <div className='add_option_style'>
          <h4>
Add Option
</h4>

<select name="Categories" id="" className="add_language" onChange={(e) => setType(e.target.value)}>
                <option value="">Categories</option>
                <option value="1">English</option>
                <option value="2">Turkish</option>
               </select>
               <input type="text" name="" id="" placeholder=" Name " className="input" onChange={(e) => handleLocale('name', e.target.value, 0)}  />
               <input type="text" name="" id="" placeholder=" Speical Name" className="input" onChange={(e) => handleLocale('special_name', e.target.value, 0)} />
                     <div className='d-flex '>
                      <div className='d-flex  check_sec'>   


                      
                      <Form.Group className="mb-3 " controlId="formBasicCheckbox" >
                      <div className='d-flex m-auto '>
                      <Form.Check type="checkbox" label="Product Based"   onChange={(e) => setProductBase(e.target.checked)}/>
                      </div>
                    </Form.Group>     
                      </div>



                      <div className='d-flex m-auto check_sec'>        
                      </div>
                      <div className='d-flex  check_sec'>   


                      
<Form.Group className="mb-3 " controlId="formBasicCheckbox1" >

<div className='d-flex m-auto check_sec'>
<Form.Check type="checkbox" label="Unlimited"  onChange={(e) => setUnlimited(e.target.checked)}/>
</div>
</Form.Group>     
</div>


                      </div>

                      <button className="btn_to_add_list mt-3">Add Language</button>
            {items.map((item, index) => (
              <div key={index} className='list_add_sec_language'>
 <input
            type="text"
            placeholder="Name"
            className="input"
            value={item.name}
            onChange={(e) => handleInputChange(index, 'name', e.target.value)}
          />
          <input
            type="text"
            placeholder="Price"
            className="input"
            value={item.price}
            onChange={(e) => handleInputChange(index, 'price', e.target.value)}
          />                <button className='list_btn_edit_dlt delt' onClick={() => handleDeleteItem(index)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="white" />
      </svg>
                </button>
              </div>
            ))}
            <button className="add_languages mt-2" onClick={handleAddItem}>
              Add
            </button>



          </div>
          {/* Move the closing tag for <Box> outside of add_option_style */}
               <button className="saved_product" onClick={handleSave}>
              Save
            </button>
        </Box>
      </Modal>
    </div>
  );
}

export default OptionEdit;





