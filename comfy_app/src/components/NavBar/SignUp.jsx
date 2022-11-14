
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function SignUp() {

  // States for registration
  const [firstname, setfirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the first name change
  const handleFirstName = (e) => {
    setfirstname(e.target.value);
    setSubmitted(false);
  };
  // Handling the last name change
  const handleLastName = (e) => {
    setLastname(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstname === '' || lastname === '' || email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {firstname} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1 class="text-danger">Please Fill all the fields</h1>
      </div>
    );
  };

  return (
    <div className='container'>
      <div>
        <h1 className='mb-3'>New User Sign Up</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      <form>
        <div className='card card-body col-md-6 mx-auto align-self-center'>
          {/* Labels and inputs for form data */}
          <div className="mb-3">
            <label className='form-label d-flex flex-row'>First Name</label>
            <input onChange={handleFirstName} className="form-control"
              value={firstname} type="text" />
          </div>

          <div className="mb-3">
            <label className='form-label d-flex flex-row'>Last Name</label>
            <input onChange={handleLastName} className="form-control"
              value={lastname} type="text" />
          </div>
          <div className="mb-3">
            <label className='form-label d-flex flex-row'>Email</label>
            <input onChange={handleEmail} className="form-control"
              value={email} type="email" />
          </div>

          <div className="mb-3">
            <label className='form-label d-flex flex-row'>Password</label>
            <input onChange={handlePassword} className="form-control"
              value={password} type="password" />
          </div>
          <Button onClick={handleSubmit} className="btn" type="submit" variant="primary">
            Sign Up
          </Button>
        </div>
      </form>


    </div>
  );
}