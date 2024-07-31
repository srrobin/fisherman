import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosInstance } from '../utils/Axios';

const CommonForm = () => {
  const [formData, setFormData] = useState({
    name: 'সায়েম রাহমান',
    phone_number: '০১৯২২-৫৯০০১৯',
    place_name: '',
    fish_name: '',
    fish_type: '',
    fish_quantity: '',
    fish_price: '',
    fish_image: null,
    created_at: new Date().toISOString(),
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setFormData((prevData) => ({
            ...prevData,
            fish_image: reader.result,
          }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AxiosInstance.post('/notice', formData)
      .then((res) => {
        navigate('/');
      })
      .catch((error) => {
        console.error('There was an error uploading the fish notice:', error);
      });
  };

  return (
    <div className='fish__sell'>
      <div className='fish__sell__area'>
        <div className='fish__sell__title'>মাছ বিক্রির নোটিস তৈরী করুন</div>

        <div className='fish__sell__form'>
          <form onSubmit={handleSubmit}>
            <div className='single__form'>
              <label>বিক্রেতার নাম</label>
              <input
                type='text'
                value={formData.name}
                name='name'
                disabled
              />
            </div>
            <div className='single__form'>
              <label>বিক্রেতার ফোন নাম্বার</label>
              <input
                type='text'
                value={formData.phone_number}
                name='phone_number'
                disabled
              />
            </div>
            <div className='single__form'>
              <label>স্থান নির্বাচন করুন</label>
              <select
                name='place_name'
                onChange={handleChange}
                value={formData.place_name}
                required
              >
                <option value=''>স্থান নির্বাচন করুন</option>
                <option value='নশিরপুর'>নশিরপুর</option>
                <option value='রামভদ্রপুর'>রামভদ্রপুর</option>
                <option value='হায়দরপুর'>হায়দরপুর</option>
                <option value='কালিবাড়ি'>কালিবাড়ি</option>
                <option value='শানেমান্দা'>শানেমান্দা</option>
                <option value='মুক্তাগাছা'>মুক্তাগাছা</option>
              </select>
            </div>
            <div className='single__form'>
              <label>মাছ নির্বাচন করুন <span style={{ color: 'red', fontSize: '22px' }}>*</span></label>
              <select
                name='fish_name'
                onChange={handleChange}
                value={formData.fish_name}
                required
              >
                <option value=''>মাছ নির্বাচন করুন</option>
                <option value='শিং মাছ'>শিং মাছ</option>
                <option value='কই মাছ'>কই মাছ</option>
                <option value='পাঙ্গাস মাছ'>পাঙ্গাস মাছ</option>
                <option value='চিংড়ি মাছ'>চিংড়ি মাছ</option>
                <option value='পাবদা মাছ'>পাবদা মাছ</option>
                <option value='বাংলা মাছ'>বাংলা মাছ</option>
              </select>
            </div>

            <div className='single__form'>
              <label>মাছের ধরণমাছের ধরণ নির্বাচন করুন <span style={{ color: 'red', fontSize: '22px' }}>*</span></label>
              <select
                name='fish_type'
                onChange={handleChange}
                value={formData.fish_type}
                required
              >
                <option value=''>ধরণ নির্বাচন করুন</option>
                <option value='1'>ছোট পোনা</option>
                <option value='2'>বড় পোনা</option>
                <option value='3'>বিক্রয় উপযোগী</option>
                <option value='4'>প্যারেন্ট মাছ</option>
              </select>
            </div>

            <div className='single__form'>
              <label>কতগুলো মাছ বিক্রি করবেন?</label>
              <input
                type='number'
                placeholder='সংখ্যা নির্ধারণ করুন'
                name='fish_quantity'
                onChange={handleChange}
                value={formData.fish_quantity}
              />
            </div>

            <div className='single__form'>
              <label>মাছের দাম নির্ধারণ করুন (হাজার হিসেবে)</label>
              <input
                type='number'
                placeholder='দাম নির্ধারণ করুন'
                name='fish_price'
                onChange={handleChange}
                value={formData.fish_price}
              />
            </div>
            <div className='single__form'>
              <label>মাছের ছবি আপলোড করুন</label>
              <input
                type='file'
                accept='image/*'
                name='fish_image'
                onChange={handleChange}
              />
              {formData.fish_image && (
                <img
                  src={formData.fish_image}
                  alt='Uploaded'
                  style={{ width: '200px', height: 'auto' }}
                />
              )}
            </div>
            <button type='submit' className='subBtn'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};



export default CommonForm;