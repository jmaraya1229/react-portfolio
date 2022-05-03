import React from 'react';

export default function Projects() {
    return (
        <div>
            <h1>Projects</h1>
                <h2>
                    <ion-icon name="train-outline"></ion-icon>
                    Task Train
                </h2>
                    <img src=''></img>
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
                    <a href="https://github.com/jmaraya1229/Pawpal" target="_blank">
                        <p>
                            <ion-icon name="logo-github"></ion-icon>
                            Repo
                        </p>
                    </a>
            
        </div>
    );
}