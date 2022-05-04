import React from 'react';
import tasktrain from '../../images/TaskTrainLoginScreenshot.png';
import pawpal from '../../images/Pawpal-screenshot.png';
import jate from '../../images/text-editor-screenshot.png';
import note from '../../images/notetaker.png';
import weather from '../../images/weather.png';
import employee from '../../images/employeetracker.png';

const styles ={
    h1: {
        fontSize: '50px',
        textAlign: 'center',

    },
    h2: {
        fontSize: '35px',
    },
    p: {
        fontSize: '20px',
    },
    div:{
        border: '1px solid black',
        padding: '5px',
        width: '500px',
        height: '500px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',

        
    },
    flex: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '95%',
        justifyContent: 'center',
        gap: '10px'
    }
}

function Projects() {
    return (
        <div>
            <h1 style={styles.h1}>Projects</h1>
            <div style={styles.flex}>
                <div style={styles.div}>
                    <h2 style={styles.h2}>
                        <ion-icon name="train-outline"></ion-icon>
                        Task Train
                    </h2>
                    <img src={tasktrain} height={300} width={400}></img>
                    <p style={styles.p}>
                        Task Train is a web application that allows users to either request for 
                        help from other users or to help others with everyday tasks within their zip code. 
                    </p>
                    <a href="https://task-train.herokuapp.com/" target="_blank" rel="noreferrer" style={styles.p}>
                        <p>
                            <ion-icon name="train-outline"></ion-icon>
                            Live Heroku link
                        </p>
                    </a>
                    <a href="https://github.com/chore-train-app/ChoreTrain" target="_blank" rel="noreferrer" style={styles.p}>
                        <p>
                            <ion-icon name="logo-github"></ion-icon>
                            Repo
                        </p>
                    </a>
                </div>

                <div style={styles.div}>
                    <h2 style={styles.h2}>
                        <ion-icon name="paw-outline"></ion-icon>
                        Pawpal
                    </h2>
                    <img src={pawpal} height={300} width={400}></img>
                    <p style={styles.p}>
                        Pawpal is a pet adoption website that uses the Petfinder API to pull data for 
                        readily adoptable pets in a given radius of a zipcode.
                    </p>
                    <a href="https://jmaraya1229.github.io/Pawpal/" target="_blank" rel="noreferrer" style={styles.p}>
                        <p>
                            <ion-icon name="paw-outline"></ion-icon>
                            Website
                        </p>
                    </a>
                    <a href="https://github.com/jmaraya1229/Pawpal" target="_blank" rel="noreferrer" style={styles.p}>
                        <p>
                            <ion-icon name="logo-github"></ion-icon>
                            Repo
                        </p>
                    </a>
                </div>

                <div style={styles.div}>
                    <h2 style={styles.h2}>
                        <ion-icon name="document-text-outline"></ion-icon>
                        Just Another Text Editor
                    </h2>
                    <img src={jate} height={300} width={400}></img>
                    <p style={styles.p}>
                        Just Another Text Editor (or J.A.T.E) is a text editor that the user can choose to use online
                        or to use offline by downloading the app.
                    </p>
                    <a href="https://jmaraya-texteditor.herokuapp.com/" target="_blank" rel="noreferrer" style={styles.p}>
                        <p>
                            <ion-icon name="document-text-outline"></ion-icon>
                            Live Heroku link
                        </p>
                    </a>
                    <a href="https://github.com/jmaraya1229/textEditor" target="_blank" rel="noreferrer" style={styles.p}>
                        <p>
                            <ion-icon name="logo-github"></ion-icon>
                            Repo
                        </p>
                    </a>
                </div>

                <div style={styles.div}>
                    <h2 style={styles.h2}>
                        <ion-icon name="pencil-outline"></ion-icon>
                        Note Taker
                    </h2>
                    <img src={note} height={300} width={400}></img>
                    <p style={styles.p}>
                        Note taker is an online application that allows the user to create a to-do list.
                    </p>
                    <a href="https://note-taker-jessemaraya.herokuapp.com/" target="_blank" rel="noreferrer" style={styles.p}>
                        <p>
                            <ion-icon name="pencil-outline"></ion-icon>
                            Live Heroku link
                        </p>
                    </a>
                    <a href="https://github.com/jmaraya1229/NoteTaker" target="_blank" rel="noreferrer" style={styles.p}>
                        <p>
                            <ion-icon name="logo-github"></ion-icon>
                            Repo
                        </p>
                    </a>
                </div>

                <div style={styles.div}>
                    <h2 style={styles.h2}>
                        <ion-icon name="cloudy-night-outline"></ion-icon>
                        Weather Dashboard
                    </h2>
                    <img src={weather} height={300} width={400}></img>
                    <p style={styles.p}>
                        Weather Dashboard is an online application that gives the user a current day and seven day 
                        forecast of a specified city.
                    </p>
                    <a href="https://jmaraya1229.github.io/WeatherDashboard/" target="_blank" rel="noreferrer" style={styles.p}>
                        <p>
                            <ion-icon name="cloudy-night-outline"></ion-icon>
                            Website
                        </p>
                    </a>
                    <a href="https://github.com/jmaraya1229/WeatherDashboard" target="_blank" rel="noreferrer" style={styles.p}>
                        <p>
                            <ion-icon name="logo-github"></ion-icon>
                            Repo
                        </p>
                    </a>
                </div>

                <div style={styles.div}>
                    <h2 style={styles.h2}>
                        <ion-icon name="people-outline"></ion-icon>
                        Employee Tracker
                    </h2>
                    <img src={employee} height={300} width={400}></img>
                    <p style={styles.p}>
                    The following application will allow the user to manage an employee database using Node.js, Inquirer, and MySQL.
                    </p>
                    <a href="https://github.com/jmaraya1229/EmployeeTracker" target="_blank" rel="noreferrer">
                        <p style={styles.p}>
                            <ion-icon name="logo-github"></ion-icon>
                            Repo
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects