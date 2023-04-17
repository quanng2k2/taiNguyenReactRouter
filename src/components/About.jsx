import React from "react";
import { useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();
  console.log(location);
  return <div>{location.state ? location.state.course : "About"}</div> ; 
}
