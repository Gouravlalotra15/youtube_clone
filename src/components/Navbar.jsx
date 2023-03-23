import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import React,{useState} from "react";
import { logo } from "../utils/constants";
import { SearchBar } from "./";
import { Padding } from "@mui/icons-material";

const Navbar = () => (
  <Stack direction="row" alignItems="center" pl={2} sx={{ position:  "sticky", background: '#121212', top: 0, justifyContent: "space-between"}}>
    
  <div style= {{display:"flex",alignItems: "center", gap:'20px'}}>
    <div className="hamburger_icon">
    <p className="first_bar"> </p>
    <p> </p>
    <p className="last_bar"></p>
       </div>
    
    
    
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" width={45}/>
      <p style={{color:"white",fontSize:'30px', wordSpacing:'20px'}}>YouToob</p>
    </Link>
  </div>
    <SearchBar />
  </Stack>
);
export default Navbar;





// const Navbar = () => {

//   // to change burger classes
//   const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
//   const [menu_class, setMenuClass] = useState("menu hidden")
//   const [isMenuClicked, setIsMenuClicked] = useState(false)

//   // toggle burger menu change
//   const updateMenu = () => {
//       if(!isMenuClicked) {
//           setBurgerClass("burger-bar clicked")
//           setMenuClass("menu visible")
//       }
//       else {
//           setBurgerClass("burger-bar unclicked")
//           setMenuClass("menu hidden")
//       }
//       setIsMenuClicked(!isMenuClicked)
//   }
//   <Stack direction="row" alignItems="center" p={-10} pl={2} sx={{ position:  "sticky", background: '#121212', top: 0, justifyContent: "space-between" }}>
//       <Link to="/" style={{ display: "flex", alignItems: "center" }}>
//         <img src={logo} alt="logo" height={45}/>
//         <p style={{color:"white",fontSize:'30px', wordSpacing:'20px'}}>YouToob</p>
//       </Link>
      
//       <SearchBar />
//     </Stack>
//   return(
//       <div style={{width: '100%', height: '100vh'}}>
//           <nav>
//               <div className="burger-menu" onClick={updateMenu}>
//                   <div className={burger_class} ></div>
//                   <div className={burger_class} ></div>
//                   <div className={burger_class} ></div>
//               </div>
//           </nav>

//           <div className={menu_class}></div>
//       </div>
      
//   )
    
// }
