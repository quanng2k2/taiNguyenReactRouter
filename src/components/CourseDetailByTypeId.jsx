import React from "react";
import { useParams } from "react-router-dom";

export default function CourseDetailByTypeId() {
  const params = useParams();
  return (
    <div>
      Course Type : {params.courseType} - Course Id : {params.courseId}  
    </div>
  );
}
