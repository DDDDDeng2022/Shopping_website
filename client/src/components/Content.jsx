import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainProductPage from './product/MainProductPage';
import ProductDetailPage from './product/ProductDetailPage';
import '../App.css'
import Signin from '../components/user/Signin';
import Signup from '../components/user/Signup';

function Content() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainProductPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    )
}

export default Content