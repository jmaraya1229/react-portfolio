import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }

    setName('');
    setEmail('');
    setMessage('');
  };

  const styles = {
    div: {
      display: 'flex',
      justifyContent: 'center',
      flex: 'nowrap'
    },

  };

  return (
    <div>
    <h1 style={{textAlign: 'center', fontSize: '40px'}}>
      Hello! Feel free to contact me if you have any questions or oppurtunites available!
    </h1>

      <div style={styles.div}>
      <form className="form">
        <div>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
        </div>

        <div>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
        </div>

        <div>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="message"
        />
        </div>

        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>

      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </div>
    </div>
  );
}

export default Contact