import React, {useState} from "react";
import "../styles/InterestForm.css"


function Forum(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    function handleChange(event){
        const {name, value} = event.target;

        if (name === "firstName") {
            setFirstName(value);
        } else if (name === "lastName") {
            setLastName(value);
        } else if (name === "phoneNumber") {
            setPhoneNumber(value);
        } else if (name === "email") {
            setEmail(value);
        }
    }

    function handleClick(){
        console.log("clicked")
        if ((firstName === "") && 
            (lastName === "") && 
            (phoneNumber === "") && 
            (email === "")){
            alert("Please fill in all of the required field!");
        }else{
            alert("Thank you! I will get back to you as soon as possible!");
            setFirstName(""); setLastName(""); setPhoneNumber(""); setEmail("");
        }
    }

    return (
        <div className = "form-container">

        <h3 className="form-header">Stay in Touch</h3>
        <form onSubmit={handleClick}>
            <input 
                onChange={handleChange}
                type= "text"
                placeholder="First Name"
                value={firstName}
                name="firstName"
                required
            />

            <input 
                onChange={handleChange}
                type= "text"
                placeholder="Last Name"
                value={lastName}
                name="lastName"
                required
            />

            <input 
                onChange={handleChange}
                type= "text"
                placeholder="phone number"
                value={phoneNumber}
                name = "phoneNumber"
                required
            />

            <input 
                onChange={handleChange}
                type= "text"
                placeholder="email"
                value={email}
                name = "email"
                required
            />
            <button className= "button-form" type="submit">
                Submit
            </button>
        </form>
        </div>
    );
}


export default Forum;



