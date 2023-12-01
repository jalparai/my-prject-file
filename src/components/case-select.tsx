import React, { useEffect, useState } from "react";
// import '../../asserts/css/product.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import ReceiptList from "./receipt-list";


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


const CaseSelect = () => {


  const navigate = useNavigate();

  const handleButtonClick = () => {

    navigate('/edit-rank');
  };






  return (
    <>
      <div>
        <div className="import_strip case_select">
          <div>
         <h2 className="title_tag">Case Detail (10 Ağustos 2023 12:56 - 15 Eylül 2023 17:40)</h2>
         
          </div>
          <div className="d-flex">
         
          <ReceiptList />
          </div>
        </div>

   
<div className="cards_selected">
<div className="row">
<div className="col-md-6">
<div className="card_text_area">
<div className="hding">
<h3>Total price</h3>
</div>
<ul>
    <li>Total</li>
    <li>Total</li>
</ul>
<ul>
    <li>Total</li>
    <li>Total</li>
</ul>
</div>
</div>
<div className="col-md-6">
<div className="card_text_area">
<div className="hding">
<h3>Other Operations</h3>
</div>
<ul>
    <li>Total</li>
    <li>Total</li>
</ul>
</div>
</div>
</div>
<div className="row">
<div className="col-md-6">
<div className="card_text_area">
<div className="hding">
<h3>Payments</h3>
</div>
<ul>
    <li>Total</li>
    <li>Total</li>
</ul>
<ul>
    <li>Total</li>
    <li>Total</li>
</ul>
</div>
</div>
<div className="col-md-6">
<div className="card_text_area">
<div className="hding">
<h3>Tick Payments</h3>
</div>
<ul>
    <li>Total</li>
    <li>Total</li>
</ul>
</div>
</div>
</div>
</div>
   
      
      </div>
    </>

  )
}
export default CaseSelect