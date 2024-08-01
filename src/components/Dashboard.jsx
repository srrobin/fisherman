import React, { useState } from 'react';
import man1 from "../images/m1.png";
import man2 from "../images/m2.jpg";
import man3 from "../images/m3.jpg";
import man4 from "../images/m4.jpg";
import f from "../images/f1.jpg"
import f1 from "../images/s.webp"
import { RiChatDeleteFill } from "react-icons/ri";
import { BiSolidShow } from "react-icons/bi";
import { MdVisibilityOff } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";




const Dashboard = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
        setToggle(!toggle);
  }
    return (
    <section class="dashbord">
      <div class="das__content">
        <div class="common">
          <i class="ri-contrast-drop-2-line"></i>
          <span class="title"> মোট সদস্য </span> 
          <span class="person"> ৩০০০ জন </span>
        </div>
        <div class="common">
          <i class="ri-contrast-drop-2-line"></i>
          <span class="title"> মোট নোটিশ </span> 
          <span class="person"> ২৩৪৫ জন </span> 
        </div>
        <div class="common">
          <i class="ri-contrast-drop-2-line"></i>
          <span class="title">  সক্রিয় সদস্য</span> 
          <span class="person"> ৭৫৫ জন </span> 
        </div> 
        <div class="common">
          <i class="ri-contrast-drop-2-line"></i>
          <span class="title"> আপনার  নোটিশ</span> 
          <span class="person">১ টি</span> 
        </div> 
      </div>

    <div className='owner_post'>
    <div className='owner_post_title'>আপনার সকল নোটিশঃ</div>   
    <div className='fish__buy__notice'>
                    <div className='owner_post'>
                      <div className='owner_post_actions'>
                        <div className='owner_action'>
                            <BiSolidEditAlt   className=''/>
                        </div>
                        <div className='owner_action'>
                            <RiChatDeleteFill  className=''/>
                        </div>
                        <div className='owner_action' onClick={handleToggle}>
                          {toggle ?  <MdVisibilityOff   style={{ color: "#6c757d"}}/>: 
                            <BiSolidShow  className=''/>
                          }
                        </div>
                      </div>
                      <div className='single__notice'>
                          <div className='farmer__info'>
                              <span>নামঃ  মোঃ হাসেম আলী</span>
                              <span>মোবাঃ ০১৯২২৫৯০০১৯</span>
                              <span style={{color:"#a52a2a",fontWeight:"600"}}>স্থানঃ রামভদ্রপুর</span> 
                              <span style={{color:"green",fontWeight:"600"}}>২ ঘন্টা আগে</span> 
                          </div>

                          <div className='fish_image'>
                              <img src={f} alt=''/>
                          </div>
                          <div className='fish__info'>
                              <span> মাছের নামঃ শিং মাছ</span>
                              <span>  অবস্তাঃ ১-দিনের পোনা</span>
                              <span>  পরিমানঃ ২০০০  ( পিস )</span>
                              <span>  মূল্যঃ  ১০০০ ( হাজার হিসেবে ) </span>
                          </div>
                      </div>
                    </div>
                    <div className='owner_post'>
                      <div className='owner_post_actions'>
                        <div className='owner_action'>
                            <BiSolidEditAlt  className=' '/>
                        </div>
                        <div className='owner_action'>
                            <RiChatDeleteFill  className=''/>
                        </div>
                        <div className='owner_action' onClick={handleToggle}>
                          {toggle ?  <MdVisibilityOff   style={{ color: "#6c757d"}}/>: 
                            <BiSolidShow  className=''/>
                          }
                        </div>
                      </div>
                      <div className='single__notice'>
                          <div className='farmer__info'>
                              <span>নামঃ  মোঃ হাসেম আলী</span>
                              <span>মোবাঃ ০১৯২২৫৯০০১৯</span>
                              <span style={{color:"#a52a2a",fontWeight:"600"}}>স্থানঃ রামভদ্রপুর</span> 
                              <span style={{color:"green",fontWeight:"600"}}>২ ঘন্টা আগে</span> 
                          </div>

                          <div className='fish_image'>
                              <img src={f1} alt=''/>
                          </div>
                          <div className='fish__info'>
                              <span> মাছের নামঃ শিং মাছ</span>
                              <span>  অবস্তাঃ ১-দিনের পোনা</span>
                              <span>  পরিমানঃ ২০০০  ( পিস )</span>
                              <span>  মূল্যঃ  ১০০০ ( হাজার হিসেবে ) </span>
                          </div>
                      </div>
                    </div>
                  </div>
    </div>

      <div className='support_team'>
      <div className='support_title'>সাপোর্ট টিমঃ</div> 
      <div className='support_person'>
        <div className='single_support'>
          <img src={man1} alt=''/>
          <div className='support_name'>মোঃ আবু বক্কর</div>
          <div className='support_phone'>০১৯২২৫৯০০১৯</div> 
        </div>
        <div className='single_support'>
          <img src={man2} alt=''/>
          <div className='support_name'>সুভান ভাই</div> 
          <div className='support_phone'>০১৯২২৫৯০০১৯</div>  
        </div>
        <div className='single_support'>
          <img src={man3} alt=''/>
          <div className='support_name'> লক্কর আলী</div>
          <div className='support_phone'>০১৯২২৫৯০০১৯</div> 
        </div>
        <div className='single_support'>
          <img src={man4} alt=''/>
          <div className='support_name'>আব্দুল কাসেম</div>
          <div className='support_phone'>০১৯২২৫৯০০১৯</div> 
        </div>
      </div> 
        
      </div>
    </section>     

    );
};

export default Dashboard;