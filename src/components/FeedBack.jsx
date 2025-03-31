import React, { useEffect, useState } from "react";
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

    // Executing this when clicking the button
    const handleSubmit = async () => {

        if (feedback.trim() === ""){
            alert("Please enter feedback before submitting!");
            return;
        }

        try{
            const response = await fetch('http://localhost:4000/feedback', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({feedback: feedback})
            });
            
            console.log('Response Status:', response.status);

            if (response.ok){
                alert("Feedback successfully submitted!");
                setFeedback("");
                window.location.reload(); // Refresh the page
            }else{
                alert("Failed to submit feedback. Please try again.");
            }
        } catch (error){
                console.error("Error:", error);
                alert("An error occured while submitting feedback");
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
                    id = "feedbackbtn"
                    onClick={handleSubmit}
                >
                    Send Feedback
                </button>
            </div>
        </div>
    );
}


function FeedBack(){

    const feedBacks = FilterFeedback();

    if (!feedBacks) return <div>Loading...</div>

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
/*
for now I want to show the top 3 added by the client, later I want to implement ways
 for the user to be able to see all the feedbacks and select the ones they want to display.
*/

function FilterFeedback() {
    
    const [feedBacks, setFeedBacks] = useState([]);
    const [filteredFeedbacks, setFilteredFeedbacks] = useState([]);

    useEffect(() => {
        async function fetchFeedbacks() {
            const res = await fetch("http://localhost:4000/feedbacks");
            const data = await res.json();
            setFeedBacks(data);
        }

        fetchFeedbacks();
    }, []);
    
    useEffect(() => {
        if (feedBacks.length > 0){
            const filtered = feedBacks.slice(0, 3);
            setFilteredFeedbacks(filtered);
        }
    }, [feedBacks]); // This effect will only run when the feedBacks changes
    
    
    return filteredFeedbacks;
}


export default FeedBack;


