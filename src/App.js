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
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUserBoards from "./pages/admin/AdminUserBoards";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminBoardsSearch from "./pages/admin/AdminBoardsSearch";
import AdminUserComments from "./pages/admin/AdminUserComments";
import AdminUserMemos from "./pages/admin/AdminUserMemos";

import AdminCommentsSearch from "./pages/admin/AdminCommentsSearch";
import AdminReportsPending from "./pages/admin/AdminReportsPending";
import AdminDetailedStats from "./pages/admin/AdminDetailedStats";
import AdminBannedWords from "./pages/admin/AdminBannedWords";
import AdminReviews from "./pages/admin/AdminReviews";
import NiBangNeBangCreateForm from "./components/NiBangNeBang/NiBangNeBangCreateForm";

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
          <Route
            exact
            path="/nibangnebang/create"
            element={<NiBangNeBangCreateForm />}
          />
          <Route
            exact
            path="/nibangnebang/:id"
            // element={<NiBangNeBangUp />}
          />
          <Route exact path="/page3" element={<PageThree />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/admin" element={<AdminDashboard />} />
          <Route exact path="/admin/users" element={<AdminUsers />} />
          <Route exact path="/admin/boards" element={<AdminBoardsSearch />} />
          <Route
            exact
            path="/admin/users/:userId/boards"
            element={<AdminUserBoards />}
          />
          <Route
            exact
            path="/admin/users/:userId/comments"
            element={<AdminUserComments />}
          />
          <Route
            path="/admin/users/:userId/memos"
            element={<AdminUserMemos />}
          />
          <Route path="/admin/comments" element={<AdminCommentsSearch />} />
          <Route path="/admin/reports" element={<AdminReportsPending />} />
          <Route
            path="/admin/dashboard/detailed"
            element={<AdminDetailedStats />}
          />
          <Route path="/admin/banned-words" element={<AdminBannedWords />} />
          <Route path="/admin/reviews" element={<AdminReviews />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
