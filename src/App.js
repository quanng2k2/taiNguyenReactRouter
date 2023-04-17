import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Link, NavLink, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import ContactUse from "./components/ContactUse";
import ContactItem from "./components/ContactItem";
import ContactIndex from "./components/ContactIndex";
import NotFound from "./components/NotFound";
import Product from "./components/Product";
import CheckOut from "./components/CheckOut";
import Login from "./components/Login";
import Course from "./components/Course";
import CourseDetail from "./components/CourseDetail";
import CourseDetailByTypeId from "./components/CourseDetailByTypeId";
import Pesonnal from "./components/Pesonnal";
import Account from "./components/Account";

function App() {
  const navLinkStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "Black" : "pink",
    color: isActive ? "White" : "Black",
    boderRadius: isActive ? "10px" : "10px",
    TextDecoder: isActive ? "none" : "none",
  });

  const navLinkStyleChill = ({ isActive }) => ({
    backgroundColor: isActive ? "Black" : "pink",
    color: isActive ? "White" : "Black",
    boderRadius: isActive ? "10px" : "10px",
  });

  return (
    <div>
      {/* <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
            <ul>
              <li>
                <Link to="/contact/ContactUse">ContactUse</Link>
              </li>
              <li>
                <Link to="/contact/contactItem">ContactItem</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div> */}

      {/* Sử dụng navlink */}
      <div>
        <ul>
          <li>
            <NavLink to="/" style={navLinkStyle} >Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" style={navLinkStyle}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={navLinkStyle}>Contact</NavLink>
            <ul>
              <li>
                <NavLink to="/contact/ContactUse" style={navLinkStyleChill} >ContactUse</NavLink>
              </li>
              <li>
                <NavLink to="/contact/contactItem" style={navLinkStyleChill} >ContactItem</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/product"> Product</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} ></Route>
        <Route path="/contact" element={<Contact />}>
          {/* nested router : rowter lồng nhau */}
          <Route index element={<ContactIndex />}></Route>
          <Route path="contactUse" element={<ContactUse />}></Route>
          <Route path="contactItem" element={<ContactItem />}></Route>
        </Route>

        <Route path="/product" element={<Product />} ></Route>
        {/* route chck login */}
        <Route path="/checkout" element={<CheckOut />} > </Route>
        <Route path="/login" element={<Login />} > </Route>
        {/* dynamic router */}
        <Route path="/course" element={<Course />} ></Route>
        <Route path="/course/:courseId" element={<CourseDetail />} ></Route>
        <Route path="/course/:courseType/:courseId" element={<CourseDetailByTypeId />} ></Route>

        {/* Private Router */}
        <Route>
          <Route path="/pesonnal" element={<Pesonnal />} ></Route>
          <Route path="/account" element={<Account />} ></Route>
        </Route>

        <Route path="*" element={<NotFound />} ></Route>
      </Routes>
    </div>
  )
} ; 
 
export default App ;