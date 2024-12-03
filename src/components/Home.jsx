import React from "react";
import '../styles/Home.css';
import {Link} from 'react-router-dom';

function FaceCard(){
    return (
        <div className= "pictureHome">
            <div className="photo"> 
                <img className="photo" src="/images/melinda.jpg" alt="User"/>
            </div>
        
            <div className="name">
            <h3 className="name">Melinda Baca</h3>  
            </div>

            <div className="occupation">
            <h5 className="occupation">Senior Talent Management & <br />Analytics Professional</h5>
            </div>
        </div>
    );
}

function HomePage(){
    return (
        <div className="leftSide"> 
            <p className="first">Isn't it incredible how organizational success reaches new heights when people
            feel genuinely valued and supported?
            </p>

            <p className="second">Join me on this journey to unlock innovative analytics solutions by empowering
                talent and embraving authencity.
            </p>

            <div className="second">
                <Link to= "/contact">
                    <button className="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
                        <b>Contact Me</b>
                    </button>
                </Link>
            </div>
        </div>
    );
}

function Home() {
    return (
        <div className="gridIdea">
            <HomePage />
            <FaceCard />
        </div>
    );
}

export default Home;
