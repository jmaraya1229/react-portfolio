import React from 'react';
import me from '../../images/FancyMe.JPG';

function About() {
    return (
        <div>
            <h1>About Me</h1>
            <img src={me} height={200} width={200}></img>
            <p>Hello! My name is Jesse Maraya. 
                I am an aspiring programmer pursuing full stack web development. 
            </p>
        </div>
    );
}

export default About