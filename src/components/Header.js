import React from 'react';
import resume from '../jmresume.pdf';

const styles = {
  navS: {
    width: '100%',
    position: 'fixed',
    backgroundColor: 'pink',
    top: 0,
    paddingBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    textAlign: 'right',
    fontSize: '25px',
    display: 'flex'
  },
  box: {
    border: '1px solid navy',
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    marginRight: '20px',
    paddingRight: '5px',
    paddingLeft: '5px',
    borderRadius: '15px',
  },
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