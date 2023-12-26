import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/login/index";
import { Register } from "../pages/register/index";
import { Dashboard } from "../pages/dashboard/index";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
