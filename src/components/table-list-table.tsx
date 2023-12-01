import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import DeleteMod from './delete-btn';
import Tableimg from '../asserts/imgs/logo.png';
import CircularProgress from '@mui/material/CircularProgress';
import ProductImg from '../asserts/imgs/product-add.png';
import '../asserts/css/category.css';

const Tableaddtable = () => {



  return (
    <TableContainer component={Paper} className="product">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="th_hds">
            <TableCell align="center">TABLE</TableCell>
            <TableCell align="center">CREATION DATE</TableCell>
            <TableCell align="center">Setting</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
         
       
          
              <TableRow className='category_row'>
             
                <TableCell align="center">
                    <img src={ProductImg} className="product_img category_img" />
                    Product Name</TableCell>
                <TableCell align="center">10/24/2023</TableCell>
             
                <TableCell align="center">
                  <div className="setting_list">
             
                    <button className="list_btn_edit_dlt edit opt_edit_btn">
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
                    <DeleteMod />
                  </div>
                </TableCell>
              </TableRow>
        
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Tableaddtable;