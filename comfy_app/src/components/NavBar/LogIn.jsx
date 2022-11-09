import React, { useState } from 'react';

function Contact() {
    const [form] = useState('Log In');
    return (
        <div className='container'>
            <form>
                <div className='card card-body col-md-6 mx-auto align-self-center'>
                    <div className='mb-3'>
                        <label className='form-label d-flex flex-row' htmlFor='email'>
                            Email
                        </label>
                        <input
                            className='form-control'
                            type='text'
                            id='firstName'
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label d-flex flex-row' htmlFor='password'>
                            Password
                        </label>
                        <input
                            className='form-control'
                            type='text'
                            id='lastName'
                            required
                        />
                    </div>
                    <div className='d-grid gap-2"'>
                        <button className='btn btn-primary ' type='submit' placeholder='LOG IN'>
                            {form}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Contact;
