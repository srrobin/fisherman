import React from 'react';

const FishSell = () => {
    return (
        <div className='fish__sell'>
            <div className='fish__sell__area'>

                <div className='fish__sell__title'>মাছ বিক্রির নোটিস তৈরী করুন</div>

                <div className='fish__sell__form'>
                   <form> 
                      <div className='single__form'>
                        <label> বিক্রেতার নাম </label>
                        <input type='text' value="সায়েম রাহমান" disabled/> 
                      </div>
                      <div className='single__form'> 
                        <label>বিক্রেতার ফোন নাম্বার  </label> 
                        <input type='text' value="০১৯২২-৫৯০০১৯" disabled/>  
                      </div>
                      <div className='single__form'>
                        <label>স্থান নির্বাচন করুন</label> 
                        <select>
                            <option>নশিরপুর </option>
                            <option>রামভদ্রপুর </option>
                            <option>হায়দরপুর </option>
                            <option>কালিবাড়ি </option>
                            <option>শানেমান্দা</option>
                            <option>মুক্তাগাছা</option> 
                        </select>
                      </div>
                      <div className='single__form'>
                        <label>মাছ নির্বাচন করুন <span style={{color:"red", fontSize:"22px"}}>*</span></label>
                        <select required>
                            <option value=""> মাছ নির্বাচন করুন</option>   
                            <option value="1"> শিং মাছ</option>
                            <option value="2"> কই মাছ</option>
                            <option value="3"> পাঙ্গাস মাছ</option>
                            <option value="4"> চিংড়ি মাছ</option>  
                            <option value="5"> পাবদা মাছ</option>  
                            <option value="6"> বাংলা মাছ</option>   
                        </select>
                      </div>

                      <div className='single__form'>
                        <label>মাছের ধরণমাছের ধরণ নির্বাচন করুন <span style={{color:"red", fontSize:"22px"}}>*</span></label> 
                        <select required>
                            <option value=""> ধরন নির্বাচন করুন</option>   
                            <option value="pona"> ছোট পোনা  </option>  
                            <option value="boropona"> বড় পোনা  </option>  
                            <option value="adult"> বিক্রয় উপযোগী </option> 
                            <option value="parent"> প্যারেন্ট মাছ</option> 
                        </select>
                      </div>

                      <div className='single__form'>
                        <label> কতগুলো মাছ বিক্রি করবেন ? </label>
                        <input type='number' placeholder='সংখ্যা নির্ধারণ করুন '/>
                      </div>

                      <div className='single__form'>
                        <label> মাছের দাম নির্ধারণ করুন ( হাজার হিসেবে ) </label>
                        <input type='number' placeholder='দাম নির্ধারণ করুন '/>
                      </div>

                      <button type='submit' className='subBtn'> Submit</button>
                    </form> 
                </div>
            </div>
        </div>
    );
};

export default FishSell;