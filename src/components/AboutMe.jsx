import React from "react";
import '../styles/AboutMe.css';

function AboutMe(){
    return(
        <section className="photo-quote-grid">
            <div className="left-side">
                <div className="photo-aboutMe">
                    <img className="photo-aboutMe" src="./images/melinda.jpg" alt="The author"/>
                </div>

                <div className="core-competencies">
                    <h5><b>Join Me on a Journey:</b></h5>
                    <p>Discover My Passion for Driving HR Excellence through Analytics and Communication</p>
                </div>

                <div className="video-container">
                <iframe
                    width="100%"
                    height="auto"
                    src="https://www.youtube.com/embed/otIBKhe9TYg" // Replace with the actual video ID
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                </div>
            </div>

            <div className="right-side">
                <div className="title-main"> 
                    <p className="enlarge">My Experience at a Glance </p>
                </div>

                <div className="summary">
                    <p className="firstSummary">
                        With over fifteen years of dedication in Talent Management and Analytics,
                        I have honed my ability to enhance employee morale, job satisfaction, and 
                        retention, all pivotal for driving organizational success. Currently, I am 
                        proud to contribute to the leading provider of Artificial Intelligence for the 
                        Department of Defense. Here, I utilize strategic career coaching, project placement, 
                        and qualitative assessments to craft innovative solutions that propel mission-critical 
                        advancements, ensuring our defense capabilities stay at the cutting edge.
                    </p>

                    <p className="secondSummary">
                        Reflecting on my twenty-year tenure with the U.S. Marine Corps, 
                        I employed predictive analytics to forecast performance trends and 
                        guide career development strategies. My initiatives in workforce planning 
                        and diversity promotion significantly improved client outcomes, notably 
                        increasing the promotion and retention of women, a historical challenge for the 
                        Marine Corps. These successes were deeply personal victories, driven by my commitment 
                        to fostering an inclusive and supportive environment.
                    </p>

                    <p className="thirdSummary">
                        As a Talent Acquisition Manager, I redefined strategies, sourced exceptional talent, 
                        and strengthened our employer brand. My holistic approach to streamlining recruitment processes, 
                        enhanced by cutting-edge technology, ensured efficient and cohesive workflows. These endeavors 
                        not only improved organizational outcomes but also created a vibrant and supportive work environment. 
                        My passion for driving effective change and nurturing a culture where employees can thrive remains 
                        at the heart of my professional journey.
                    </p>
                </div> 

                <div className="highlights">
                    <p className="title-main"> Educational & Technical Highlights </p>
                    <p className="center"> M.S. Human Resource Analytics & Management, American University (Exp 12/2024) <br />
                        B.S. Human Resources Management, Park University</p>
                    <p className="center"> </p>
                    <ul className="list-items">
                        <li>Prosci Change Management</li>
                        <li>Lean Six Sigma Green Belt</li>
                        <li>Microsoft Power BI</li>
                        <li>Excel Data Analysis</li>
                    </ul>
                </div>
            </div>
    </section>
    );
}

export default AboutMe;