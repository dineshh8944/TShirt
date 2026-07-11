import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import '/css/SignModal.css'

const SignModal = ({showModal,setShowModal,FormInnerDiv}) => {
  const navigate = useNavigate();
  const FormAllDiv = useRef(null);  // Initialize the useNavigate hook

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    address: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    address: '',
    checkbox: '',
  });
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    setCheckboxChecked(e.target.checked);
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Name validation
    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
      isValid = false;
    }

    // Password validation
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    // Confirm Password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    // Phone Number validation
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Enter a valid 10-digit phone number';
      isValid = false;
    }

    // Address validation
    if (!formData.address) {
      newErrors.address = 'Address is required';
      isValid = false;
    }

    // Terms and conditions validation
    if (!checkboxChecked) {
      newErrors.checkbox = 'You must accept the terms and conditions';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert('Form submitted successfully!');
      // You can redirect or reset the form as needed here
      navigate('/');
    setShowModal(false)
    document.body.style.overflow = ''; // Re-enable body scroll when modal is closed
     }
  };

  function DisplayBackFix(){
    setShowModal(false);
    document.body.style.overflow = ''; // Re-enable body scroll when modal is closed
  }

  return (
    <>

      {showModal && (
        <div id="popup" ref={FormAllDiv} style={{ display: 'block' }}>
          <div id="open_modal" ref={FormInnerDiv}>
          {/* <div id="open_modal" ref={FormInnerDiv} style={{ width: '350px', padding: '20px' }}> */}
          <DisabledByDefaultIcon onClick={DisplayBackFix}  style={{ cursor: 'pointer' }} className='DisabledByDefaultIcon' />
            {/* <DisabledByDefaultIcon onClick={() => setShowModal(false)}  style={{ cursor: 'pointer' }} className='DisabledByDefaultIcon' /> */}
            <br />
            <div className="signup">
              <h1>Sign up</h1>
              <a>
                <span style={{ color: '#000' }}>or</span> login to your account
              </a>
            </div>

            <br />
            <form id="submitForm" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  placeholder="Name"
                  onChange={handleChange}
                />
                <br />
                <span className="error">{errors.name}</span>
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  onChange={handleChange}
                />
                <br />
                <span className="error">{errors.email}</span>
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <br />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  placeholder="Password"
                  onChange={handleChange}
                />
                <br />
                <span className="error">{errors.password}</span>
              </div>

              <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <br />
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  placeholder="Confirm Password"
                  onChange={handleChange}
                />
                <br />
                <span className="error">{errors.confirmPassword}</span>
              </div>

              <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <br />
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  maxLength="10"
                  placeholder="Phone Number"
                  onChange={handleChange}
                />
                <br />
                <span className="error">{errors.phoneNumber}</span>
              </div>

              <div>
                <label htmlFor="address">Address</label>
                <br />
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  placeholder="Address"
                  onChange={handleChange}
                ></textarea>
                <br />
                <span className="error">{errors.address}</span>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="checkbox_1"
                  checked={checkboxChecked}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="checkbox_1" style={{ color: '#002abb' }} className='TermLabel'>
                  Terms and conditions
                </label>
                <br />
                <span className="error">{errors.checkbox}</span>
              </div>

              <div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignModal;
