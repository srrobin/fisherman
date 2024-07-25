import React  from 'react';
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';
import { VscClose } from "react-icons/vsc";


const Navbar = ({isToggled, setIsToggled}) => {
console.log("🚀 ~ Navbar ~ isToggled:", isToggled)
const handleNavItemClick = () => {
    setIsToggled(false); 
  };
    return (

        <nav className={isToggled ? "show":"hide"}>

        <Link to="/" className="logo__area">
            <div className='nav__logo'>
                <div className="logo"><img src={logo} alt=""/></div>
                <div className="logo__title">সেবা</div> 
            </div>
            <VscClose  className='close__icon' onClick={handleNavItemClick}/>
        </Link>

        <div className="menu__area">
            <ul className="nav__items">
                <li>
                    <Link to='/dashboard' onClick={handleNavItemClick}>
                      <span className="nav__item">ড্যাসবোর্ড </span>
                    </Link>
                </li>
                <li>
                <Link to='/fishselluser'  onClick={handleNavItemClick}>
                      <span className="nav__item">মাছ বিক্রয় নোটিশ</span> 
                      </Link>
                </li>
                <li>
                <Link to='/'  onClick={handleNavItemClick}>
                      <span className="nav__item">মাছ ক্রয় </span>
                      </Link>
                </li>
                <li>
                <Link to='/fishcare'  onClick={handleNavItemClick}>
                      <span className="nav__item">মাছ পালন</span>
                      </Link>
                </li>
                <li>
                <Link to='/imergency'  onClick={handleNavItemClick}>
                      <span className="nav__item">জরুরি সেবা</span>   
                    </Link>
                </li>
            </ul>
        </div>
    </nav>

    );
};

export default Navbar;