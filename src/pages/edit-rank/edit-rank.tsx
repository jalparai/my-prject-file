import React, { useEffect, useState } from "react";
import '../../asserts/css/product.css';
import BasicTable from "../../components/table";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { getAllCategories, getAllProducts, updateProductSettingAPI } from "../../pages/product/api/index";
import OptionAdd from "../../components/option-setting/option-add-popup";
import Categoreytable from "../../components/categorey-table";
import CategoryAdd from "../../components/add-category-popup";
import '../../asserts/css/edit-rank.css';
import EditRanktable from "../../components/edit-rank-table";

interface Categories {
  id: string;
  title: string;
  isSubCategory: string;
  rank: string;
}

const convertToCSV = (data: any[]) => {
  const header = Object.keys(data[0]).join(",");
  const csv = data.map((row) => Object.values(row).join(",")).join("\n");

  return `${header}\n${csv}`;
};

const downloadCSV = (data: any[]) => {
  const csvData = convertToCSV(data);
  const blob = new Blob([csvData], { type: "text/csv" });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "products.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};


const EditRank = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState<Categories[]>([]);

  const exportProducts = () => {
    downloadCSV(data);
  };


  const navigate = useNavigate();

  const handleUpdateProduct = async (id: string, status: boolean) => {

    await updateProductSettingAPI(id, status);
    await getAllProducts(setData);

  }




  return (
    <>
      <div>
        <div className="import_strip ">
          <div>
         <h2 className="title_tag">Category List</h2>
       
     </div>
          <div className="Edit_rank_total_listing">
            <span>Total Categorie : <span>11</span></span>
          </div>
        </div>
        <EditRanktable />
      </div>
    </>

  )
}
export default EditRank