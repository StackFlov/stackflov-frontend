/**
* 지원님 코드
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Login from "./pages/Login";
import PageOne from "./pages/PageOne";
import PageThree from "./pages/PageThree";
import PageTwo from "./pages/PageTwo";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/page1" element={<PageOne />} />
          <Route exact path="/page2" element={<PageTwo />} />
          <Route exact path="/page3" element={<PageThree />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
*/

import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Login from "./pages/Login";
import PageOne from "./pages/PageOne";
import PageThree from "./pages/PageThree";
import PageTwo from "./pages/PageTwo";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/page1" element={<PageOne />} />
        <Route path="/page2" element={<PageTwo />} />
        <Route path="/page3" element={<PageThree />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;