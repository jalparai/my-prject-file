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
import '../asserts/css/cases.css';
import CaseSelect from './case-select';
import { useNavigate } from 'react-router-dom';

const Casestable = () => {
    
    const navigate = useNavigate();

    const handleButtonClick = () => {
  
      navigate('/selectcase');
    };

  return (
    <TableContainer component={Paper} className="product">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="th_hds">
            <TableCell align="left">CASE OWNER</TableCell>
            <TableCell align="left">OPENING DATE</TableCell>
            <TableCell align="left">UPDATED DATE</TableCell>
            <TableCell align="left">Status</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
        
         
       
          
              <TableRow className='category_row'>
             
                <TableCell align="left">
                   
                Digigarson Teknikss</TableCell>
                <TableCell align="left">10 Ağustos 2023 12:56</TableCell>
                <TableCell align="left">10 Ağustos 2023 12:56</TableCell>

                <TableCell align="left">
                  <div className=" cases_status">
             
                  <span className='status'>Open</span>
<button onClick={handleButtonClick}>
    Select
</button>
{/* <CaseSelect /> */}
                  
                  </div>
                </TableCell>
              </TableRow>
        
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Casestable;