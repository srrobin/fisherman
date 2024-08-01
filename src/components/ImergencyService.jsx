import React from 'react';
import dr1 from "../images/m1.png"
import dr2 from "../images/m2.jpg"
import dr3 from "../images/m3.jpg"
import dr4 from "../images/m4.jpg"
import dr5 from "../images/h1.jpg"
import dr6 from "../images/h2.jpg"

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
                  <span>ডাঃ আদিল ইসলাম </span>
                  <span>০১৭২২৫৯০০২১ </span> 
               </div>
               <div className='single_imergency_man'> 
                  <img src={dr3} alt=''/>
                  <span>ডাঃ সৈকত হক </span> 
                  <span>০১৯২২৫৯০০১৯ </span> 
               </div>
               <div className='single_imergency_man'> 
                  <img src={dr4} alt=''/>
                  <span>ডাঃ রাফি </span> 
                  <span>০১৬২২৫৯১২১৯ </span>   
               </div>
               <div className='single_imergency_man'> 
                  <img src={dr5} alt=''/>
                  <span>ডাঃ নাহিদ মুল্লা </span> 
                  <span>০১৫২২৪৩০০৯০ </span> 
               </div>
               <div className='single_imergency_man'> 
                  <img src={dr6} alt=''/>
                  <span>ডাঃ অর্ণব কুমার সুত্র ধর</span> 
                  <span>০১৬২২৫৯৪৫১৯ </span> 
               </div>   
            </div>
            </div>
        </div>
    );
};

export default ImergencyService;