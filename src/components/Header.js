import React from 'react';
import resume from '../jmresume.pdf';

const styles = {
  navS: {
    width: '100%',
    position: 'fixed',
    top: 0,
    backgroundColor: 'lightgray',
    paddingBottom: '10px',
    textAlign: 'right',
    fontSize: '25px',
  },
  box: {
    border: '2px solid blue',
    backgroundColor: 'white',
    marginRight: '10px',
    paddingRight: '3px',
    paddingLeft: '3px'

  }
}

function Nav({ currentPage, handlePageChange }) {
  return (
    <nav style={styles.navS}>
        <a
          href="#about"
          style={styles.box}
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>

        <a
          href="#projects"
          style={styles.box}
          onClick={() => handlePageChange('Projects')}
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>

        <a
          href="#contact"
          style={styles.box}
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>

        <a href={resume} style={styles.box}>
          Resume 
        </a>
    </nav>
  );
}

export default Nav;