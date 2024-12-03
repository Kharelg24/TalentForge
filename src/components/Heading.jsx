import React from "react";
import { Link, useLocation } from 'react-router-dom';

const className = {
  home: "nav-link active",
  contact: "",
  portfolio: "",
  aboutMe: "",
  feedback: "",
  heading: "",
  blog: ""
}

function PathName(){
  const location = useLocation();
  switch(location.pathname){
    case "/":
        className.contact = "nav-link";
        className.portfolio = "nav-link";
        className.aboutMe = "nav-link";
        className.feedback = "nav-link";
        className.home = "nav-link active";
        className.heading = "Home Page";
        className.blog = "nav-link";
        console.log(location);
      break;
    case "/contact":
        className.contact = "nav-link active";
        className.portfolio = "nav-link";
        className.aboutMe = "nav-link";
        className.feedback = "nav-link";
        className.home = "nav-link";
        className.heading = "Contact Me";
        className.blog = "nav-link";
        console.log(location);
        break;
    case "/portfolio":
        className.contact = "nav-link";
        className.home = "nav-link";
        className.aboutMe = "nav-link";
        className.feedback = "nav-link";
        className.portfolio = "nav-link active";
        className.heading = "My Portfolio";
        className.blog = "nav-link";
        console.log(location);
        break;
    case "/aboutMe":
        className.contact = "nav-link";
        className.portfolio = "nav-link";
        className.home = "nav-link";
        className.feedback = "nav-link";
        className.aboutMe = "nav-link active";
        className.heading = "About Me";
        className.blog = "nav-link";
        console.log(location);
        break;
    case "/feedback":
        className.contact = "nav-link";
        className.portfolio = "nav-link";
        className.aboutMe = "nav-link";
        className.home = "nav-link";
        className.feedback = "nav-link active";
        className.heading = "Feedback";
        className.blog = "nav-link";
        console.log(location);
        break;
    case "/blog":
        className.contact = "nav-link";
        className.portfolio = "nav-link";
        className.aboutMe = "nav-link";
        className.home = "nav-link";
        className.feedback = "nav-link";
        className.heading = "Feedback";
        className.blog = "nav-link active";
      console.log(location);
        break;

    default:
      return (
        <h1> 404, server cannot find the requested resource!</h1>
      )
  };
}

function Heading() {
  PathName();
  return (
    <section className="header" style={{ backgroundColor: '#f6e9e5' }}>
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 border-bottom">
            <a href="/" className="d-flex align-items-center me-md-auto link-body-emphasis text-decoration-none">
            <svg className="bi me-2" width="40" height="32"><use href="#bootstrap"></use></svg>
            <span className="fs-4"><em>{className.heading}</em></span>
            </a>
    
            <ul className="nav nav-pills">
                <li className="nav-item"><Link to="/" className={className.home}>Home</Link></li>
                <li className="nav-item"><Link to="/aboutMe" className={className.aboutMe}>About Me</Link></li>
                <li className="nav-item"><Link to="/portfolio" className={className.portfolio}>Portfolio</Link></li>
                <li className="nav-item"><Link to="/blog" className={className.blog}>Blog</Link></li>
                <li className="nav-item"><Link to="/feedback" className={className.feedback}>Feedback</Link></li>
                <li className="nav-item"><Link to="/contact" className={className.contact}>Contact Me</Link></li>
            </ul>
            </header>
        </div>
    </section>
  );
}

export default Heading;
