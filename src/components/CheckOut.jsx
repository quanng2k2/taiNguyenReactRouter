import React from "react";
import { Navigate } from "react-router-dom";
import Home from "./Home";

export default function CheckOut() {
  const isCheckOut = false;
  return isCheckOut ? <Home /> : <Navigate to="/login" />;  
}
