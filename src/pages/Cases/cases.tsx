import React, { useEffect, useState } from "react";
import '../../asserts/css/product.css';
import BasicTable from "../../components/table";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { getAllCategories, getAllProducts, updateProductSettingAPI } from "../../pages/product/api/index";
import SectionAdd from "../../components/add-section-popup";
import Casestable from "../../components/cases-table";



const Cases = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {

    navigate('/edit-rank');
  };

  return (
    <>
      <div>
        <div className="import_strip ">
          <div>
         <h2 className="title_tag">Case List</h2>
         
          </div>
          <div className="d-flex">
    

            
          </div>
        </div>

     

   
        <Casestable />
      </div>
    </>

  )
}
export default Cases