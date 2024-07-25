import React from 'react';
import dr1 from "../images/a1.jpeg"
import dr2 from "../images/a2.jpeg"
import dr3 from "../images/a3.jpeg"
import dr4 from "../images/a4.jpeg"
import dr5 from "../images/a5.jpeg"
import dr6 from "../images/a6.jpeg"

const ImergencyService = () => {
    return (
        <div className='imergency'>
            <div className='imergency_area'>
            <div className='imergency__title'>পরামর্শ পেতে ফোন দিন</div>  

            <div className='imergency_man'>
               <div className='single_imergency_man'> 
                  <img src={dr1} alt=''/>
                  <span>ডাঃ কুদ্দুস পণ্ডিত </span>
                  <span>০১৯২২৫৯০০১৯ </span> 
               </div>
               <div className='single_imergency_man'> 
                  <img src={dr2} alt=''/>
                  <span>ডাঃ কুদ্দুস পণ্ডিত </span>
                  <span>০১৯২২৫৯০০১৯ </span> 
               </div>
               <div className='single_imergency_man'> 
                  <img src={dr3} alt=''/>
                  <span>ডাঃ কুদ্দুস পণ্ডিত </span>
                  <span>০১৯২২৫৯০০১৯ </span> 
               </div>
               <div className='single_imergency_man'> 
                  <img src={dr4} alt=''/>
                  <span>ডাঃ কুদ্দুস পণ্ডিত </span>
                  <span>০১৯২২৫৯০০১৯ </span> 
               </div>
               <div className='single_imergency_man'> 
                  <img src={dr5} alt=''/>
                  <span>ডাঃ কুদ্দুস পণ্ডিত </span>
                  <span>০১৯২২৫৯০০১৯ </span> 
               </div>
               <div className='single_imergency_man'> 
                  <img src={dr6} alt=''/>
                  <span>ডাঃ কুদ্দুস পণ্ডিত </span>
                  <span>০১৯২২৫৯০০১৯ </span> 
               </div>   
            </div>
            </div>
        </div>
    );
};

export default ImergencyService;