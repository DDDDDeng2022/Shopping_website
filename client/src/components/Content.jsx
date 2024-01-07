import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainProductPage from './product/MainProductPage';
import ProductDetailPage from './product/ProductDetailPage';
import '../App.css'

function Content() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainProductPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
            </Routes>
        </Router>
    )
}

export default Content