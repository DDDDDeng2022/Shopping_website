import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainProductPage from './product/MainProductPage';
import ProductDetailPage from './product/ProductDetailPage';
import '../App.css'
import Signin from '../components/user/Signin';

function Content() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainProductPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/signin" element={<Signin />} />
            </Routes>
        </Router>
    )
}

export default Content