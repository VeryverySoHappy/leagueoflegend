import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/common/logo.png';
import smallLogo from '../assets/common/smallLogo.png';

function Header(props) {
  const {style, title, icon} = props;
  return (
    <header>
      <h1> 
        {
          style?(
          <Link to="/">
            <img src={logo} alt="리그오브레전드로고" />
          </Link>
          ):(
            icon?(
            <Link to="">
              {icon.icon}{title}
            </Link>
            ):(
            <Link to="">
              <img src={smallLogo} alt="리그오브레전드작은로고" />{title}
            </Link>
            )
          )
        }
      </h1>
    </header>
  )
}

export default Header