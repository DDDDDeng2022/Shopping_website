/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainProductPage from "./components/product/MainProductPage";
import ProductDetailPage from "./components/product/ProductDetailPage";
import ProductEdit from "./components/product/EditProct";
import SigninPage from "./components/user/Signin";
import SignupPage from "./components/user/Signup";
import UpdatePasswordEmailPage from "./components/user/UpdatePasswordEmail";
import UpdatePasswordPwdPage from "./components/user/UpdatePasswordPwd";
import SentEmailPage from "./components/user/SentEmail";
import ErrorHandlePage from "./components/error/ErrorHandle";
import { Provider } from 'react-redux';
import store from '../src/redux/store'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./App.css";

function App() {
  const primaryTheme = createTheme({
    palette: {
      primary: {
        main: "#5048E5",
      },
    }, components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
        },
      },
    },
  });


  return (
    <ThemeProvider theme={primaryTheme}>
      <Provider store={store}>
        <Router>
          <div className="container">
            <Header />
            <Routes>
              <Route path="/" element={<MainProductPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              {/* 登录状态时，不让跳转到/signin，/signup， /updatePassword，/updatePasswordPwd，/sentEmail */}
              <Route path="/signin" element={<ProtectedRoute restricted><SigninPage /></ProtectedRoute>} />
              <Route path="/signup" element={<ProtectedRoute restricted><SignupPage /></ProtectedRoute>} />
              <Route path="/updatePassword" element={<ProtectedRoute restricted><UpdatePasswordEmailPage /></ProtectedRoute>} />
              <Route path="/updatePasswordPwd" element={<ProtectedRoute restricted><UpdatePasswordPwdPage /></ProtectedRoute>} />
              <Route path="/sentEmail" element={<ProtectedRoute restricted><SentEmailPage /></ProtectedRoute>} />
              {/* 普通User不能打开/productedit和/productcreate */}
              <Route path="/productedit" element={<RoleProtectedRoute ><ProductEdit /> </RoleProtectedRoute>} />
              <Route path="/productcreate" element={<RoleProtectedRoute ><ProductEdit /> </RoleProtectedRoute>} />
              <Route path="*" element={<ErrorHandlePage />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </Provider>
    </ThemeProvider>
  )
}

const ProtectedRoute = ({ children, restricted }) => {
  const isLogin = useSelector((state) => state.isLogin);
  if (isLogin && restricted) {
    return <Navigate to="/" replace />;
  }

  return children;
};
const RoleProtectedRoute = ({ children }) => {
  const isLogin = useSelector((state) => state.isLogin);
  const role = useSelector((state) => state.user.role);
  if (!isLogin || role != "Admin") {
    return <Navigate to="/" replace />;
  }
  return children;
};


export default App;
