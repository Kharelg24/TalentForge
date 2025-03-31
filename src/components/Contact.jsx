import React from "react";
import "../styles/Contact.css"
import Form from "./InterestForm";

function Contact(){

    function Socials(){
        return(
            <div class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div class="col-md-4 d-flex align-items-center">
                    <p class="mb-3 text-body-secondary">
                        <b>Contact Me: </b><br />
                        Email: bacamelindam@gmail.com |
                        571-247-5316</p>
                </div>
              
                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li class="ms-3"><a class="text-body-secondary" href="https://twitter.com"><img class="bi" src="./images/twitter-x.svg" alt="twitter" width="24" height="24"/></a></li>
                    <li class="ms-3"><a class="text-body-secondary" href="https://instagram.com"><img class="bi" src="./images/instagram.svg" alt="instagram" width="24" height="24"/></a></li>
                    <li class="ms-3"><a class="text-body-secondary" href="https://facebook.com"><img class="bi" src="./images/facebook.svg" alt="facebook" width="24" height="24"/></a></li>
                </ul>
                </footer>
            </div>
            
        );
    }

    function IntetestCard(props){
        return (
            <div class="interest-card"> 
                <h5>{props.title}</h5>
                <ul class="interest-ul">
                    {props.points.map(point => (
                        <li key={point.id}>{point}</li>
                    ))}
                </ul>
            </div>
            
        );
    }
    
    function createInterestCard(interest){
        return <IntetestCard title={interest.title} points={interest.points} />
    }
    
    function AreaOfInterest(){
        return (
            <div className="interest-container">
                <h3 className="mini-title">Areas of Interest</h3>
                <div className="areaOfInterest">
                    {aof.map(createInterestCard)}
                </div>
            </div>
            
        );
    }

    return(
        <div className="layout"> 
            <h3 className="quote"> 
                "People will forget what you said, people will forget what you did, 
                but people will never forget how you made them feel." - Maya Angelou
            </h3>
            
            <div className="areaFormContainer">
                <AreaOfInterest />
                <Form />
            </div>
            
            <h3 className="quote">
                Together, we will tackle your challenges with creativity and integrity.
            </h3>

            <Socials />
        </div>
    );
}

const aof = [
    {
        id: 1,
        title: "Resume Assistance",
        points: [
            "Chronological", 
            "Functional", 
            "Combincation", 
            "Targeted"]
    },
    {
        id: 2,
        title: "Personal Branding",
        points: [
            "Self-identity",
            "Values", 
            "Passion", 
            "Pitch"]
    },
    {
        id: 3,
        title: "Change Management",
        points: [
            "Vision and Objectives", 
            "Effective", 
            "Communication", 
            "Stakeholder", 
            "Engagement", 
            "Sustainability"]
    }
]

export default Contact;