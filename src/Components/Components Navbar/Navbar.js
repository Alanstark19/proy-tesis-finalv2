import React, {useState} from 'react'
import { Container2, 
Wrapper,
LogoContainer,
Menu,
MenuItem2, 
MenuItemLink,
MobileIcon
 } from './Navbar.elements'
 import { FaBattleNet, FaGlasses } from "react-icons/fa";
 import { BiMenu } from "react-icons/bi";
 import { IconContext } from 'react-icons';
 import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min'
 import "./Navbar.css";

const Navbar = () => {
  const [showMobileMenu, setshowMobileMenu] = useState(false);
  return (
    <Container2>
      <Wrapper>
        <IconContext.Provider value={{style:{fontSize: "2em"}}}>
        <LogoContainer>
          <FaBattleNet/>
          <p>Vector -</p>
          <p>f(x)</p>
          
        </LogoContainer>
        <MobileIcon onClick={() => setshowMobileMenu(!showMobileMenu)}>
        {showMobileMenu ? <BiMenu/>  : <BiMenu/> }
        </MobileIcon>
        <Menu open={showMobileMenu}>
          <MenuItem2>
          <MenuItemLink onClick={() => setshowMobileMenu(!showMobileMenu)}>
          <div>
            <FaGlasses/>
            Home
          </div></MenuItemLink></MenuItem2>
          <MenuItem2><MenuItemLink onClick={() => setshowMobileMenu(!showMobileMenu)}>
          <div>
            <FaGlasses/>
            About me
          </div>
          </MenuItemLink></MenuItem2>
          <MenuItem2><MenuItemLink onClick={() => setshowMobileMenu(!showMobileMenu)}>
          <div>
            <FaGlasses/>
          Portfolio
          </div>
            </MenuItemLink></MenuItem2>
          <MenuItem2><MenuItemLink onClick={() => setshowMobileMenu(!showMobileMenu)}>
          <div>
            <FaGlasses/>
            <Link to={'/login'} className="textlink"> Cerrar Sesión</Link>
          </div>
          </MenuItemLink></MenuItem2>
        </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container2>
  );
};

export default Navbar
