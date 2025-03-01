import { useState } from 'react'


import axios from "axios";


function Ai() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    setAnswer("Loading....")
    const response = await axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDcRVVLpdOxSQyfvx97jzVexEafHfEYgTE",
      method:"post",
      data:{
        contents: [{
          parts:[{"text": question}]
          },
        ]
         },
    });
  setAnswer(response["data"]["candidates"][0]["content"]["parts"]["0"]["text"]);

  }

  return (
    <>
     <h1>chat hai</h1>
     <textarea value={question} onChange={(e)=> setQuestion(e.target.value)} cols="30" rows="10"></textarea>
     <button onClick={generateAnswer}>generate Answer</button>
     <p>{answer}</p>
    </>
  )
}

export default Ai;
