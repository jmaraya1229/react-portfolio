import React from 'react';
// import tasktrain from '../../images/TaskTrainScreenshot.png'

function Projects() {
    return (
        <div>
            <h1>Projects</h1>
                <h2>
                    <ion-icon name="train-outline"></ion-icon>
                    Task Train
                </h2>
                    <img></img>
                    <p>
                        Task Train is a web application that allows users to either request for 
                        help from other users or to help others with everyday tasks within their zip code. 
                    </p>
                    <a href="https://task-train.herokuapp.com/" target="_blank">
                        <p>
                            <ion-icon name="train-outline"></ion-icon>
                            Live Heroku link
                        </p>
                    </a>
                    <a href="https://github.com/chore-train-app/ChoreTrain" target="_blank">
                        <p>
                            <ion-icon name="logo-github"></ion-icon>
                            Repo
                        </p>
                    </a>
           
                <h2>
                    <ion-icon name="paw-outline"></ion-icon>
                    Pawpal
                </h2>
                    <img src=''></img>
                    <p>
                        Pawpal is a pet adoption website that uses the Petfinder API to pull data for 
                        readily adoptable pets in a given radius of a zipcode.
                    </p>
                    <a href="https://jmaraya1229.github.io/Pawpal/" target="_blank">
                        <p>
                            <ion-icon name="paw-outline"></ion-icon>
                            Website
                        </p>
                    </a>
                    <a href="https://github.com/jmaraya1229/Pawpal" target="_blank">
                        <p>
                            <ion-icon name="logo-github"></ion-icon>
                            Repo
                        </p>
                    </a>

                <h2>
                    <ion-icon name="document-text-outline"></ion-icon>
                    Just Another Text Editor
                </h2>
                    <img src=''></img>
                    <p>
                        Just Another Text Editor (or J.A.T.E) is a text editor that the user can choose to use online
                        or to use offline by downloading the app.
                    </p>
                    <a href="https://jmaraya-texteditor.herokuapp.com/" target="_blank">
                        <p>
                            <ion-icon name="document-text-outline"></ion-icon>
                            Live Heroku link
                        </p>
                    </a>
                    <a href="https://github.com/jmaraya1229/textEditor" target="_blank">
                        <p>
                            <ion-icon name="logo-github"></ion-icon>
                            Repo
                        </p>
                    </a>
            
        </div>
    );
}

export default Projects