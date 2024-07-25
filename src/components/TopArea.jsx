import React from 'react';

import logo from "../images/logo.png";
import user from "../images/user.png";
import { CgMenuGridO } from "react-icons/cg";

const TopArea = ({isToggled, setIsToggled}) => {

    const handleToggle = () => {
      setIsToggled(!isToggled)
    }
    return (
        <div className="das__toparea">
        <div className='left__side'>
          <CgMenuGridO className='sidebar__toggle' onClick={handleToggle}/>
          <div className="mobail__logo__area">
              <div className="logo"><img src={logo} alt=""/></div>
              <div className="logo__title">সেবা</div> 
          </div>   
        </div>
        <div className="right__side">
          <i className="ri-moon-fill mode__toggle mode__toggle"></i>
          <img src={user} alt=""/>
        </div>
      </div>
    );
};

export default TopArea;