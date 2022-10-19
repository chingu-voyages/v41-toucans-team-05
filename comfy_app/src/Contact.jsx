import React, { useState } from 'react';
import './index.css';

function Contact() {
  const [form, setForm] = useState('Submit');
  return (
    <div className='container text-center'>
      <h2 className='mb-3'>Contact Us</h2>
      <h6 className='mb-3'>We will get back to you as soon as possible</h6>
      <form>
        <div className='card card-body border-light col-md-6 mx-auto'>
          <div className='mb-3'>
            <label className='form-label d-flex flex row' htmlFor='firstName'>
              First Name
              <input
                className='form-control'
                type='text'
                id='firstName'
                required
              />
            </label>
          </div>
          <div className='mb-3'>
            <label className='form-label d-flex flex row' htmlFor='lastName'>
              Last Name
              <input
                className='form-control'
                type='text'
                id='lastName'
                required
              />
            </label>
          </div>
          <div className='mb-3'>
            <label className='form-label d-flex flex row' htmlFor='email'>
              Email
              <input
                className='form-control'
                type='email'
                id='email'
                required
              />
            </label>
          </div>
          <div className='mb-3'>
            <label className='form-label d-flex flex row' htmlFor='message'>
              Message
              <textarea
                className='form-control'
                id='message'
                rows='4'
                required
              />
            </label>
          </div>
          <div className='d-grid gap-2 d-md-flex justify-content-md-left'>
            <button className='btn btn-info ' type='submit'>
              {form}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
