import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRef, useState } from 'react';

function Homepage() {
  const [feedbackItems, setFeedbackItems] = useState([]);

  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = { email: enteredEmail, text: enteredFeedback};
    fetch('http://localhost:3000/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json())
    .then((data) => console.log(data));
  }

  function loadFeedbackHandler() {
    fetch('http://localhost:3000/api/feedback')
    .then((response) => response.json())
    .then((data) => {
      setFeedbackItems(data.feedback);
    });
  }

  return (
    <>
      <h1>The homepage</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your email address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your feedback address</label>
          <textarea id="feedback" rows='5' ref={feedbackInputRef}></textarea>
        </div>
        <button >Send feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load Feedback</button>

      <ul>
        {feedbackItems && feedbackItems.map(item => <li key={item.id}>{item.text}</li>)}
      </ul>
    </>
  )
}

export default Homepage;
