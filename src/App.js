import React from "react";
import config from './config.js';
import './style.css'; // Import the CSS file

const currentDate = new Date();

// Extracting day, month, and year
const day = String(currentDate.getDate()).padStart(2, '0'); 
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
const year = currentDate.getFullYear();

// Formatting the date in dd-mm-yyyy
const formattedDate = `${day}-${month}-${year}`;



function FormToSheet() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = config.SHEET_URL;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: 
          `     &Name=${e.target.name.value} 
                &Email=${e.target.email.value}
                &MobileNumber=${e.target.mobile.value}
                &Subject=${e.target.subject.value}
                &Message=${e.target.message.value}
                &Time=  ${formattedDate}`,// The time when form is submitted is stored
    })
      .then((res) => res.text())
      .then((data) => {
        alert(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Form to Google Sheets </h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name " /> <br />
        <input name="email" placeholder="Email " /> <br />
        <input name="mobile" placeholder="Mobile Number" /> <br />
        <input name="subject" placeholder="Subject" /> <br />
        <input name="message" placeholder="Message" /> <br />
        <button>Send</button>
      </form>
    </div>
  );
}

export default FormToSheet;
