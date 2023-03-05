import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "../src/scss/styles.css";
import Header from "./layouts/Header";
import Nav from "./layouts/Nav";
import BtnTop from "./layouts/BtnTop";
import Index from "./pages/main/Index";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* home */}
          <Route
            index
            element={
              <>
                <Header style={"home"} />
                <Index />
                <Nav on={"on"}/>
                <BtnTop />
              </>
            }
          />
          {/* myPage */}
          <Route
            path="/myPage"
            element={
              <>
                <Header title={"마이페이지"} />
                <Index />
                <Nav />
                <BtnTop />
              </>
            }
          />
          {/* 회원가입 */}
          <Route
            path="/join"
            element={
              <>
                <Header title={"회원가입"} icon={ArrowBackIosRoundedIcon} />
                <Index />
                <Nav />
                <BtnTop />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
