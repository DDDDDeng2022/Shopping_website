import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainProductPage from './product/MainProductPage';
import ProductDetailPage from './product/ProductDetailPage';
import ParoductEdit from './product/EditProct';
import '../App.css'
import Signin from '../components/user/Signin';
import Signup from '../components/user/Signup';
import UpdatePassword from '../components/user/UpdatePassword';
import SentEmail from './user/SentEmail'
import ErrorHandle from '../components/error/ErrorHandle'

function Content() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainProductPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/updatePassword" element={<UpdatePassword />} />
                <Route path="/sentEmail" element={<SentEmail />} />
                <Route path="*" element={<ErrorHandle />} />
                <Route path="/edit/:id" element={<ParoductEdit />} />
            </Routes>
        </Router>
    )
}

export default Content