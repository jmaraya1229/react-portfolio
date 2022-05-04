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
      flex: 'nowrap',
    },
    h1: {
      textAlign: 'center', 
      fontSize: '30px', 
      width: '50%',
      display: 'flex',
      justifyContent: 'center'
    },
    box: {
      height: '30px',
      width: '200px',
      marginBottom: '15px'
    }
  };

  return (
    <div>
      <div style={styles.div}>
      <h1 style={styles.h1}>
        Hello! Feel free to contact me if you have any questions or opportunites available!
      </h1>
      </div>

      <div style={styles.div}>
      <form className="form">
        <div>
          <input 
            style={styles.box}
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
        </div>

        <div>
          <input
            style={styles.box}
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
          style={{ height:'150px', width: '250px'}}
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