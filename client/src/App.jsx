import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import './App.css';

/**
 * todo:
 * 1、添加一个isLogin的状态，并传给Header，初始化为false
 * 2、创建一个callback function，用来给子组件修改isLogin的值，据情况而定，如果传递层数过多可以考虑使用redux或useContext
 */

import { ThemeProvider, createTheme } from "@mui/material/styles";
function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="container">
        <Header />
        <Content />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
