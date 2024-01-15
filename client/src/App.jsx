import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainProductPage from "./components/product/MainProductPage";
import ProductDetailPage from "./components/product/ProductDetailPage";
import ProductEdit from "./components/product/EditProct";
import SigninPage from "./components/user/Signin";
import SignupPage from "./components/user/Signup";
import UpdatePasswordPage from "./components/user/UpdatePassword";
import SentEmailPage from "./components/user/SentEmail";
import ErrorHandlePage from "./components/error/ErrorHandle";
import { Provider } from 'react-redux';
import store from '../src/redux/store'
import { ThemeProvider, createTheme } from "@mui/material/styles";
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
              <Route path="/signin" element={<SigninPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/updatePassword" element={<UpdatePasswordPage />} />
              <Route path="/sentEmail" element={<SentEmailPage />} />
              <Route path="/productedit" element={<ProductEdit />} />
              <Route path="/productcreate/" element={<ProductEdit />} />
              <Route path="*" element={<ErrorHandlePage />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </Provider>
    </ThemeProvider>
  )
}

export default App;
