import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Panel from './pages/panel/panel';
import Product from './pages/product/product';
import ProductAdd from './pages/add-product/add-product';
import Login from './pages/login/login';
import Options from './pages/options/option';
import Category from './pages/categorey/category';
import EditRank from './pages/edit-rank/edit-rank';
import Section from './pages/section/section';
import Table from './pages/tables/tables';
import Cases from './pages/Cases/cases';
import CaseSelect from './components/case-select';
import Users from './pages/users/users';
import EditProduct from './pages/add-product/edit-product';
import ReportProduct from './pages/reprot-product/reprot-product';
import ReportCategory from './pages/report-category/report-category';
import ReportCases from './pages/report-cases/report-cases';
import ReportWorker from './pages/report-workers/report-workers';
import ReportOrdertype from './pages/report-orderType/reportOderType';
import ReportPaymentType from './pages/report-paymentType/reportPaymentType';
import Match_Product from './pages/integration/Match_Product';
import Match_Option from './pages/integration/Match_Option';
import Hugin_Integration from './pages/integration/Hugin_Integration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Layout><Panel /></Layout>} />
        <Route path="/products" element={<Layout><Product /></Layout>} />
        <Route path="/productadd" element={<Layout><ProductAdd /></Layout>} />
        <Route path="/option" element={<Layout><Options /></Layout>} />
        <Route path="/category" element={<Layout><Category /></Layout>} />
        <Route path="/edit-rank" element={<Layout><EditRank /></Layout>} />
        <Route path="/section" element={<Layout><Section /></Layout>} />
        <Route path="/table" element={<Layout><Table /></Layout>} />
        <Route path="/cases" element={<Layout><Cases /></Layout>} />
        <Route path="/selectcase" element={<Layout><CaseSelect /></Layout>} />
        <Route path="/users" element={<Layout><Users /></Layout>} />
        <Route path="/products/edit/:id" element={<Layout><EditProduct /></Layout>} />
        <Route path="/report-product" element={<Layout><ReportProduct /></Layout>} />
        <Route path="/report-cases" element={<Layout><ReportCases /></Layout>} />
        <Route path="/report-category" element={<Layout><ReportCategory /></Layout>} />
        <Route path="/report-worker" element={<Layout><ReportWorker /></Layout>} />
        <Route path="/report-order-type" element={<Layout><ReportOrdertype/></Layout>} />
        <Route path="/report-payment" element={<Layout><ReportPaymentType /></Layout>} />
        <Route path="/match-product" element={<Layout><Match_Product /></Layout>} />
        <Route path="/match-option" element={<Layout><Match_Option /></Layout>} />
        <Route path="/hugin-integration" element={<Layout><Hugin_Integration /></Layout>} />

      </Routes>
    </Router>
  );
}

export default App;


