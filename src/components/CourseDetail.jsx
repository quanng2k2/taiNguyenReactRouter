import React from "react";
import { useParams } from "react-router-dom";

export default function CourseDetail() {
  //   const courseId = useLocation() ;
  const params = useParams(); 
  return <div>course Id : {params.courseId}</div>;  
}
