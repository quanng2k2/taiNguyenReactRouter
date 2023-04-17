import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Product() {
    const navigate = useNavigate();
    return (
        <div>
            <h3> This is product</h3>
            {/* sử dụng navigate với một tham số */}
            <button onClick={() => { navigate("/about") }} >Go to home </button>
            {/* sử dụng usenavigate với history */}
            <button onClick={() => { navigate(-1) }}>Back</button>
            {/* sử dụng usenavigate với replace = true  */}
            <button onClick={() => { navigate("./about", { replace: true }) }}>Go to about với replace </button>
            {/* cách quan trọng nhất navigate để truyền dữ liệu từ compponent này sang component khác */}
            <button onClick={() => { navigate("/about", { state: { id: "1", reactjs: "anio" } }) }}> Data</button>
        </div>
    )
};
