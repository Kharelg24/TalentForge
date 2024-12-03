import React from "react";
import "../styles/Portfolio.css"


function Projects(){
    return(
        <div className="mid-section">
            <img className="diversity" src="./images/diversity.jpeg" alt="Diversity" />
            <div>
                <h5>Diversity Equity & Inclusion</h5>
                <p>Initiated and supervised comprehensive 360-degree employee performance 
                    evaluations, which significantly enhanced leadership initiatives, and 
                    led to a measurable increase in employee satisfaction, engagement, and 
                    overall work culture. Successfully implemented robust diversity and 
                    inclusion strategies for over 5,000 employees and future executives, 
                    incorporating cultural awareness programs, competency initiatives, and 
                    targeted leadership training to foster an inclusive and dynamic workplace 
                    environment.
                </p>
            </div>
            
        </div>
    );
}


function PredictiveAnalytics(){
    return (
        <div className="Predictive">
            <div>
                <h5>Predictive Analytics</h5>
                <p>​By leveraging predictive analytics, I provided professional career 
                    counseling to an active rotating client list, assisting employees in 
                    navigating targeted career pathways and identifying career goals and 
                    timelines. Predictive analytics enabled the identification of patterns 
                    and trends that informed personalized career advice, leading to higher 
                    internal promotions and fostering an environment of internal equity and 
                    self-development. Additionally, predictive analytics allowed for 
                    collaboration with business leaders to streamline their talent pipeline 
                    by identifying employees with advancement readiness across the global 
                    enterprise. This strategic use of data not only optimized employee 
                    development but also enhanced organizational performance and decision-making.
                </p>
            </div>
            
            <img className="Analytics" src="./images/HRAnalytics.jpeg" alt="Analytics"/>
        </div>

    );
}

function RiskReductionStrategy(){
    return (
        <div className="reduction">
            <div>
                <h5>Compliance & Risk Reduction Strategy</h5>
                <p>Worked with the C-Suite to develop a solution aligning with a 
                    major corporation's mission of sustainable, innovative, and accessible 
                    electric cars while being timely and economical. The 7 pillars of people 
                    analytics ensured a comprehensive, evidence-based approach, maintaining 
                    compliance with laws and regulations. Analyzed staffing and technology trends 
                    to aid informed decision-making and optimize organizational performance.
                </p>
            </div>
            
            <iframe
                width="100%"
                height="auto"
                src="https://www.youtube.com/embed/u6u8N59_w6U"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}

function Portfolio(){

    return(
        <section className="Section">
            <div>
                <h5 className="header">My HR Work in Action</h5>
                <hr />
                <p className="header"> Explore the creative HR solutions I've crafted to meet the unique
                    needs of my clients.
                </p>
                <h5>Projects</h5>
            </div>
            <Projects />
            <hr />
            <PredictiveAnalytics />
            <hr />
            <RiskReductionStrategy />
            <hr />
        </section>

    );
}

export default Portfolio;