import React, { useState } from "react";
import "../styles/FeedBack.css"


function Card(props){
    return(
        <div className="feedback">
            <p>"{props.feedback}"</p>
        </div>
    );
}


function createCard(feedback){
    return <Card feedback={feedback.feedback}/>
}


function GetFeedback(){
    const [feedback, setFeedback] = useState("");


    const handleInputChange = (event) => {
        setFeedback(event.target.value); // Getting the value of target (textarea)
    };


    const handleSubmit = () => {
        const savedFeedback = feedback;
        if (savedFeedback !== ""){
            alert("Feedback successfully submitted!");
            setFeedback("");

        }else{
            alert("Please submit a feedback before submitting!");
        }
    };

    return (
        <div className = "textArea">
            <div>
                <textarea
                    className="custom-textarea" 
                    placeholder="Please enter your feedback!"
                    value={feedback}
                    onChange={handleInputChange}
                />
            </div>
      
            <div class="mb-5 second">
                <button 
                    className="btn btn-outline-secondary btn-lg px-4 rounded-pil listen" 
                    type="button"
                    onClick={handleSubmit}
                >
                    Send Feedback
                </button>
            </div>
        </div>
        
    );
}


function FeedBack(){
    return (
        <div className="flex-feedback">
            <h5 className="title">
                Take a momenet too indulge on some of Melinda's feedback: 
            </h5>
            {feedBacks.map(createCard)}
            <div className="award">
                <h4> Awards & Recognition</h4>
                <p>Platinum Award <br />
                    Silver Award x2 
                </p>
            </div>
            <p>If you had a pleasure of working with me, drop a line or two. I value all feedback.</p>
            <GetFeedback />
         </div>
         
    );
}

const feedBacks = [
    {
        id: 1,
        feedback: "Melinda was instrumental in restructuring my resume during our workshop meetings. She taught me the ‘what, how, and benefit’ formula for bullet points, which led to interview opportunities in cyber security and DevOps. Her warmth, understanding, and accountability made a lasting impression. I hope she continues to help others showcase their best talents at BAH."
    },
    {
        id: 2,
        feedback: "Melinda is a resume word ninja! She transforms resumes from creaky-wooden stairs to sparkling-marble staircases. Always prompt, courteous, and patient, she has a microscopic eye for detail. It’s a privilege to work with such a diligent co-worker. Bravo, Melinda!"
    },
    {
        id: 3,
        feedback: "Melinda is a model Marine and a high-level player on a team of extraordinary professionals. She exudes professionalism and personal presence that has inspired my confidence and justified my trust in her ability to provide high-level counseling's that are crucial to the promotion and selection process for thousands of service members and executives."
    }
]

export default FeedBack;


