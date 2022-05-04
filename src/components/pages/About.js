import React from 'react';
import me from '../../images/FancyMe.JPG';

const styles = {
    headerS: {
        fontSize: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgS: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pS: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '30px',
        backgroundColor: 'white',
        opacity: '.7'
    },
}

function About() {
    return (
        <div style={styles.divS}>
            <h1 style={styles.headerS}>About Me</h1>
            <div style={styles.imgS}>
                <img src={me} height={300} width={300}></img>
            </div>
            <p style={styles.pS}>Hello! My name is Jesse Maraya. 
                I am an aspiring programmer pursuing full stack web development. 
            </p>
        </div>
    );
}

export default About