import React from 'react';

import { CgMenuGridO } from "react-icons/cg";
<<<<<<< HEAD
import logo from "../images/logo.png";
=======
>>>>>>> d9988afc0349abf53695530a492a178ae396704d
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
<<<<<<< HEAD
          <i className="ri-moon-fill mode__toggle mode__toggle"></i>
          <Button variant="success" size="sm">Login</Button>
          {/* <Button variant="secondary" size="sm">Logout</Button> */}
=======
           <Button variant="success">Login</Button>
           {/* <Button variant="secondary">Logout</Button> */}
>>>>>>> d9988afc0349abf53695530a492a178ae396704d
        </div>
      </div>
    );
};

export default TopArea;