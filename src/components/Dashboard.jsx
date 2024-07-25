import React from 'react';
import man1 from "../images/man1.jpg";
import man2 from "../images/man2.png";
import man3 from "../images/man3.webp";
import man4 from "../images/man4.png";

const Dashboard = () => {
    return (
    <section class="dashbord">
      <div class="das__content">
        <div class="common">
          <i class="ri-contrast-drop-2-line"></i>
          <span class="title"> মোট গ্রাহক </span>
          <span class="person"> ৩০০০ জন </span>
        </div>
        <div class="common">
          <i class="ri-contrast-drop-2-line"></i>
          <span class="title"> মাছ বিক্রয়কারি </span>
          <span class="person"> ২৩৪৫ জন </span> 
        </div>
        <div class="common">
          <i class="ri-contrast-drop-2-line"></i>
          <span class="title"> মাছ ক্রয়কারি </span>
          <span class="person"> ৭৫৫ জন </span> 
        </div>
        <div class="common">
          <i class="ri-contrast-drop-2-line"></i>
          <span class="title"> অন্যান্য</span>
          <span class="person">৪ জন</span> 
        </div>
      </div>

      <div className='who_we_are'>
        <div className='who_title'>আমাদের লক্ষ এবং উদ্দেশ্যঃ</div>
        <p> 
        ময়মনসিংহে আপনাকে স্বাগতম প্রাকৃতিক সৌন্দর্যের লিলা ভূমি যা আপনাকে মোহিত করবে ময়মনসিংহে আপনাকে স্বাগতম প্রাকৃতিক সৌন্দর্যের লিলা ভূমি যা আপনাকে মোহিত করবে ময়মনসিংহে আপনাকে স্বাগতম প্রাকৃতিক সৌন্দর্যের লিলা ভূমি যা আপনাকে মোহিত করবে ময়মনসিংহে আপনাকে স্বাগতম প্রাকৃতিক সৌন্দর্যের লিলা ভূমি যা আপনাকে মোহিত করবে ময়মনসিংহে আপনাকে স্বাগতম প্রাকৃতিক সৌন্দর্যের লিলা ভূমি যা আপনাকে মোহিত করবে ময়মনসিংহে আপনাকে স্বাগতম প্রাকৃতিক সৌন্দর্যের লিলা ভূমি যা আপনাকে মোহিত করবে ময়মনসিংহে আপনাকে স্বাগতম প্রাকৃতিক সৌন্দর্যের লিলা ভূমি যা আপনাকে মোহিত করবে ময়মনসিংহে আপনাকে স্বাগতম প্রাকৃতিক সৌন্দর্যের লিলা ভূমি যা আপনাকে মোহিত করবে ময়মনসিংহে আপনাকে স্বাগতম প্রাকৃতিক সৌন্দর্যের লিলা ভূমি যা আপনাকে মোহিত করবে ময়মনসিংহে আপনাকে স্বাগতম প্রাকৃতিক সৌন্দর্যের লিলা ভূমি যা আপনাকে মোহিত করবে সৌন্দর্যের লিলা ভূমি যা আপনাকে মোহিত করবে ময়মনসিংহে আপনাকে স্বাগতম প্রাকৃতিক সৌন্দর্যের লিলা ভূমি যা আপনাকে মোহিত করবে ময়মনসিংহে আপনাকে স্বাগতম প্রাকৃতিক সৌন্দর্যের লিলা ভূমি যা আপনাকে মোহিত করবে ময়মনসিংহে আপনাকে স্বাগতম প্রাকৃতিক সৌন্দর্যের লিলা ভূমি যা আপনাকে মোহিত করবে
        </p>
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