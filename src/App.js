import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Login from "./pages/Login";
import TraceLog from "./pages/TraceLog";
import PageThree from "./pages/PageThree";
import PageTwo from "./pages/NiBangNeBang";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import TraceDetail from "./components/TraceLogs/TraceDetail";
import TraceCreateForm from "./components/TraceLogs/TraceCreateForm";
import TraceUpdateForm from "./components/TraceLogs/TraceUpdateForm";
import AdminDashboard from "./pages/AdminDashboard";


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/tracelog" element={<TraceLog />} />
          <Route exact path="/trace/detail/:no" element={<TraceDetail />} />
          <Route exact path="/trace/create" element={<TraceCreateForm />} />
          <Route exact path="/trace/update/:no" element={<TraceUpdateForm />} />
          <Route exact path="/nibangnebang" element={<PageTwo />} />
          <Route exact path="/page3" element={<PageThree />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
