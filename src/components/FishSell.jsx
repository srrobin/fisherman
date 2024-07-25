import React from 'react';

const FishSell = () => {
    return (
        <div className='fish__sell'>
            <div className='fish__sell__area'>

                <div className='fish__sell__title'>মাছ বিক্রির নোটিস তৈরী করুন</div>

                <div className='fish__sell__form'>
                   <form> 
                      <div className='single__form'>
                        <label>মাছ নির্বাচন করুন</label>
                        <select>
                            <option> শিং মাছ</option>
                            <option> কই মাছ</option>
                            <option> পাঙ্গাস মাছ</option>
                            <option> পাবদা মাছ</option> 
                        </select>
                      </div>
                      <div className='single__form'>
                        <label>মাছের ধরণ নির্বাচন করুন</label> 
                        <select>
                            <option> ১- দিনের পোনা </option>
                            <option> ১৫- দিনের পোনা </option>
                            <option> ১- মাসের পোনা </option> 
                            <option> বিক্রয় উপযোগী </option> 
                            <option> প্যারেন্ট মাছ</option> 
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
                      <div className='single__form'> 
                        <label>আপনার ফোন নাম্বার দিন </label>
                        <input type='text' placeholder='ফোন নাম্বার লখুন '/> 
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

                      <button type='submit' className='subBtn'> Submit</button>
                    </form> 
                </div>
            </div>
        </div>
    );
};

export default FishSell;