import { Route, Routes } from "react-router-dom";
import HeaderLeft from "./template/UserTemplate/Header/HeaderLeft/HeaderLeft";
import UserTemplate from "./template/UserTemplate/UserTemplate";

import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route element={<UserTemplate />} path="/">
          <Route element={<HomePage />} index />
        </Route>
        <Route element={<Login />} path="/dangnhap" />
        <Route element={<Register />} path="/dangky" />
      </Routes>
    </>
  );
}

export default App;
