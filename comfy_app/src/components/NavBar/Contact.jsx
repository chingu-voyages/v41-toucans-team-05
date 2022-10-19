import React, { useState } from 'react';

function Contact() {
  const [form] = useState('Submit');
  return (
    <div className='container'>
      <h2 className='mb-3'>Contact Us</h2>
      <h6 className='mb-3'>We will get back to you as soon as possible</h6>
      <form>
        <div className='card card-body col-md-6 mx-auto align-self-center'>
          <div className='mb-3'>
            <label className='form-label d-flex flex-row' htmlFor='firstName'>
              First Name
            </label>
            <input
              className='form-control'
              type='text'
              id='firstName'
              required
            />
          </div>
          <div className='mb-3'>
            <label className='form-label d-flex flex-row' htmlFor='lastName'>
              Last Name
            </label>
            <input
              className='form-control'
              type='text'
              id='lastName'
              required
            />
          </div>
          <div className='mb-3'>
            <label className='form-label d-flex flex-row' htmlFor='email'>
              Email
            </label>
            <input className='form-control' type='email' id='email' required />
          </div>
          <div className='mb-3'>
            <label className='form-label d-flex flex-row' htmlFor='message'>
              Message
            </label>
            <textarea className='form-control' id='message' rows='4' required />
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
