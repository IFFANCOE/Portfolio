import React, { useState } from "react";
import './Navbar.css'
import logo from "../logo-portfolio.png";
import { FiHome, FiAlignJustify, FiBellOff } from "react-icons/fi"; //ดึงมาจากไอคอนในไลบารี่



const Navbar = () => {
  const [theme, setTheme] = useState(false);
  const [changecolorhome, setchangecolorhome] = useState(false);
  return (
    <div className={theme ? "bg-dart" : "bg-soft"}>

      <div className="nav-container">
        <img className="logo" src={logo} alt="logo..." />

        <div className="title-center">
          <ul style={{ color: "black" }} >
            <li className="nav-item active" className={changecolorhome ? "dart-color" : "soft-color"} onClick={() => setchangecolorhome(!changecolorhome)}>
              <a className="nav-link"  href="#"> HOME </a>

              {/* style={{ display: "flex", alignItems: "center" }}  // เขียน scss คือ css แบบย่อ*/}
              {/* <p className={theme ? "dart-color" : "soft-color"}>HOME</p>  //Event Text home เช็คว่า เปลี่ยนสีจากดำ เมื่อกด เป็นขาว */}
              {/* <p className="icon"><FiHome onClick={() => setTheme(!theme)} /></p>   // Event them กดแล้วเปลี่ยนสีธีมและเม้าไปโดนจะเป็นมือ */}

            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> ABOUT </a>
              {/* <FiAlignJustify /> สัญญาลักษณ์ขีด 4 ขีด*/}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> Project </a>
              {/* <FiBellOff /> สัญญาลักษณ์ปิดกระดิ่ง*/}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> Skill </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> Blog </a>
            </li>
          </ul>
        </div>
      </div>

      

    </div>


    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
    //   <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /> </a>



    //    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05"
    //     aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>


    //   <div className="collapse navbar-collapse" id="navbarsExample05">
    //     <ul className="navbar-nav ml-auto pl-lg-5 pl-0">
    //       <li className="nav-item">
    //         <a className="nav-link active" href="index.html">Home</a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">Recipes</a>
    //       </li>
    //       <li className="nav-item dropdown">
    //         <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
    //         <div className="dropdown-menu" aria-labelledby="dropdown04">
    //           <a className="dropdown-item" href="#">Food Catering</a>
    //           <a className="dropdown-item" href="#">Drink &amp; Beverages</a>
    //           <a className="dropdown-item" href="#">Wedding &amp; Birthday</a>
    //         </div>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">About</a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">News</a>
    //       </li>
    //     </ul>
    //     <ul className="navbar-nav ml-auto">
    //       <li className="nav-item cta-btn">
    //         <a className="nav-link" href="#">Contact Us</a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  )
}

export default Navbar
