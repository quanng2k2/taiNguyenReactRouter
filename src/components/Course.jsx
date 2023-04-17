import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Course() {
  // search params
  const [searchParams, setSearchParams] = useSearchParams(); 
  return (
    <div>
      <h3>Tavle Course </h3>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Course</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>ReactJs</td>
            <td>1200</td>
            <td>
              <button
                onClick={() =>
                  setSearchParams({ course: "ReactJs", time: "1200" })
                }
              >
                Detail
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>NoteJS</td>
            <td>1400</td>
            <td>
              <button
                onClick={() =>
                  setSearchParams({ course: "NoteJs", time: "1400" })
                }
              >
                Detail
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Chi tiết khóa học</h3>
      <p>
        Detail course : {searchParams.get("course")} - time :
        {searchParams.get("time")} 
      </p>
    </div>
  );
}
