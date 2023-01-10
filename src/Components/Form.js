import { useState } from 'react';
import './Form.css';

function Form() {
  const initialValues = {
    username: '',
    email: '',
    number: '',
    password: '',
    repeatPass: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [repeatPasswordShown, setRepeatPasswordShown] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexPass =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/i;
    const regexNum = /(\d{3})[ -]?(\d{3})[ -]?(\d{4})/i;

    if (!values.username) {
      errors.username = 'Username is required!';
    } else if (values.username.length < 3) {
      errors.username = 'Name must be more than 3 characters';
    } else if (values.username.length > 30) {
      errors.username = 'Name cannot exceed more than 30 characters';
    }

    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regexEmail.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }

    if (!values.number) {
      errors.number = "Number can't be empty!";
    } else if (!regexNum.test(values.number)) {
      errors.number = 'Invalid Number!';
    }

    if (!values.password) {
      errors.password = "Password can't be blank!";
    } else if (!regexPass.test(values.password)) {
      errors.password =
        'Password should be at least 10 digit long, should include at least one uppercase, one lowercase, one numeric and one special character!';
    }

    if (!values.repeatPass) {
      errors.repeatPass = 'Confirm Your Password!';
    } else if (values.repeatPass !== values.password) {
      errors.repeatPass = "Password Doesn't match!";
    }

    return errors;
  };
  return (
    <div id='container'>
      <form onSubmit={handleSubmit}>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          window.location = "/"

        ) : (
          <h1 className="message">Create Account</h1>
        )}


        <div id="form">
          <div className="field">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Your Name"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          {formErrors.username && <p className="error">{formErrors.username}</p>}

          <div className="field">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          {formErrors.email && <p className="error">{formErrors.email}</p>}

          <div className="field">
            <label htmlFor="number">Phone Number:</label>
            <input
              type="text"
              name="number"
              id="number"
              placeholder="Phone Number"
              value={formValues.number}
              onChange={handleChange}
            />
          </div>
          {formErrors.number && <p className="error">{formErrors.number}</p>}

          <div className="field">
            <label htmlFor="password">Password:</label>
            <input
              type={passwordShown ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
            <button type="button" onClick={() => setPasswordShown(!passwordShown)}>
              {passwordShown ? 'Hide' : 'Show'}
            </button>
          </div>
          {formErrors.password && <p className="error">{formErrors.password}</p>}

          <div className="field">
            <label htmlFor="repeatPass">Confirm Password:</label>
            <input
              type={repeatPasswordShown ? 'text' : 'password'}
              name="repeatPass"
              id="repeatPass"
              placeholder="Confirm Password"
              value={formValues.repeatPass}
              onChange={handleChange}
            />
            <button type="button" onClick={() => setRepeatPasswordShown(!repeatPasswordShown)}>
              {repeatPasswordShown ? 'Hide' : 'Show'}
            </button>
          </div>
          {formErrors.repeatPass && <p className="error">{formErrors.repeatPass}</p>}

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;




