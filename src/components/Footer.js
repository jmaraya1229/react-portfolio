import React from 'react';

const styles = {
    foot: {
        backgroundColor: 'pink',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '60px',
        fontSize: '50px',
        bottom: '0',
    }
}

function Footer() {
    return (
        <div style={styles.foot}>
            <a href="https://github.com/jmaraya1229" target="_blank">
                <ion-icon name="logo-github"></ion-icon>
            </a>
            <a href="https://www.linkedin.com/in/jesse-maraya/" target="_blank">
                <ion-icon name="logo-linkedin"></ion-icon>
            </a>
        </div>
    );
}

export default Footer;