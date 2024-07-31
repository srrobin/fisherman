import React from 'react';
import man1 from "../images/man1.jpg";
import man2 from "../images/man2.png";
import man3 from "../images/man3.webp";
import man4 from "../images/man4.png";
<<<<<<< HEAD
import f from "../images/a1.jpeg"
=======
import f from "../images/s.webp"
import { CiEdit } from "react-icons/ci";
import { FaDeleteLeft } from "react-icons/fa6";
import { BiSolidShow } from "react-icons/bi";
import { MdVisibilityOff } from "react-icons/md";

>>>>>>> d9988afc0349abf53695530a492a178ae396704d

const Dashboard = () => {
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
                        <div className=''>
                            <CiEdit  className='owner_action'/>
                        </div>
                        <div className=''>
                            <FaDeleteLeft  className='owner_action'/>
                        </div>
                        <div className=''>
                            <BiSolidShow  className='owner_action'/>
                            <MdVisibilityOff  className='owner_action' style={{display:"none"}}/>
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
                        <div className=''>
                            <CiEdit  className='owner_action'/>
                        </div>
                        <div className=''>
                            <FaDeleteLeft  className='owner_action'/>
                        </div>
                        <div className=''>
                            <BiSolidShow  className='owner_action'/>
                            <MdVisibilityOff  className='owner_action' style={{display:"none"}}/>
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