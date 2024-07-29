import React from 'react';

import logo from "../images/logo.png";
import user from "../images/user.png";
import { CgMenuGridO } from "react-icons/cg";
import { Button } from 'react-bootstrap';

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
           <Button variant="success">Login</Button>
           {/* <Button variant="secondary">Logout</Button> */}
        </div>
      </div>
    );
};

export default TopArea;