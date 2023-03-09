import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "../src/scss/styles.css";
import Header from "./layouts/Header";
import Nav from "./layouts/Nav";
import BtnTop from "./layouts/BtnTop";
import Index from "./pages/main/Index";
import Streaming from "./pages/Streaming";
import { default as MyPage } from "./pages/myPage/Index";
import { default as Join } from "./pages/myPage/Join";
import HomeModal from "./components/Modal/HomeModal";

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
                <Nav />
                <BtnTop />
              </>
            }
          />
          {/* home */}
          <Route
            path="/streaming"
            element={
              <>
                <Header title={"스트리밍"} />
                <Streaming />
                <Nav />
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
                <MyPage />
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
                <Header title={"회원가입"} icon />
                <Join />
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
