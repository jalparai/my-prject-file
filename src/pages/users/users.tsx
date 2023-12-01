import React, { useEffect, useState } from "react";
import '../../asserts/css/product.css';
import BasicTable from "../../components/table";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { getAllCategories, getAllProducts, updateProductSettingAPI } from "../../pages/product/api/index";
import Sectiontable from "../../components/section-table";
import SectionAdd from "../../components/add-section-popup";
import Userstable from "../../components/users-table";
import UserAdd from "../../components/user-add-popup";
import { getAllUsers } from "./api";


interface Users {
  id: string;
  lastName: string;
  createdAt: string;
}

const Users = () => {

  const [data, setData] = useState<Users[]>([]);



  const navigate = useNavigate();

  const handleButtonClick = () => {

    navigate('/edit-rank');
  };

  const fetchData = () => {
    getAllUsers(setData);
  }

  useEffect(() => {
    fetchData();
  }, [])






  return (
    <>
      <div>
        <div className="import_strip ">
          <div>
         <h2 className="title_tag">Employee List</h2>
         
          </div>
          <div className="d-flex">
    
          
            <UserAdd />
          </div>
        </div>

     

   
        <Userstable data={data} />
 
      </div>
    </>

  )
}
export default Users