import React, { useEffect, useState } from 'react';

import { AxiosInstance } from '../utils/Axios';
import { formatDistanceToNow } from 'date-fns';

const FishBuy = () => {
    const [notices,setNotices]=useState([]);
    console.log("🚀 ~ FishBuy ~ notices:", notices)
    
    useEffect (() => {
        fetchNotice();
    }, []);

    const fetchNotice = () => {
        AxiosInstance.get("/notice")
            .then(res => setNotices(res.data))
            .catch(err => console.log(err));
    };
    const formatTime = (date) => {
        if (!date) return 'Unknown time'; // Handle missing date
        const parsedDate = new Date(date);
        if (isNaN(parsedDate.getTime())) return 'Invalid date'; // Handle invalid date
        return formatDistanceToNow(parsedDate, { addSuffix: true });
      };
    return (
        <div className='fish__buy'>
            <div className='fish__buy__area'>
              <div className='fish__buy__title'>মাছ ক্রয় করুন</div> 
              <div className='fish__buy__menu'>
                  <ul>
<<<<<<< HEAD
                    <li> ছোট পোনা </li>
                    <li> বড় পোনা </li>
                    <li> বিক্রয় উপযোগী </li> 
                    <li> বাংলা মাছ  </li>   
                    <li> প্যারেন্ট মাছ </li>
=======
                    <li>পোনা  মাছ</li>
                    <li>বিক্রয় উপযোগী </li>
                    <li>প্যারেন্ট মাছ </li>
>>>>>>> d9988afc0349abf53695530a492a178ae396704d
                  </ul>
              </div>
              <div className='fish__buy__notice'>
                {notices?.reverse().map((notice) => (
                   <div className='single__notice' key={notice.id}>
                        <div className='farmer__info'>
                            <span>{notice?.name}</span> 
                            <span>মোবাঃ {notice?.phone_number}</span>
                            <span style={{color:"#a52a2a",fontWeight:"600"}}>স্থানঃ{notice?.place_name}</span> 
                            <span style={{ color: "green", fontWeight: "600" }}>{formatTime(notice?.created_at)}</span>
                        </div>

                        <div className='fish_image'>
                            <img src={notice?.fish_image} alt=''/>
                        </div>
                        <div className='fish__info'>
                            <span> মাছের নামঃ{notice?.fish_name}</span>
                            <span> অবস্তাঃ
                            {notice?.fish_type === "1" && "ছোট পোনা"}
                            {notice?.fish_type === "2" && "বড় পোনা"}
                            {notice?.fish_type === "3" && "বিক্রয় উপযোগী"}
                            {notice?.fish_type === "4" && "প্যারেন্ট মাছ"}
                            </span>
                            <span> পরিমানঃ {notice?.fish_quantity}</span>
                            <span> মূল্যঃ  {notice?.fish_price} </span>
                        </div>
                    </div>
                ))}
 
              </div>
            </div>
        </div>
    );
};

export default FishBuy;