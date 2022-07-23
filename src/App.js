import React, { useState } from "react";
import data from "./Data";
import Question from "./Question";


function App() {
  const[questions, setQuestions] = useState(data);

  return<main>

    <div className="container">
      <h3>questions and answerrs about login</h3>
      <section className="info">
        {
          questions.map((question)=>{
            return<Question key={question.id} {...question}/>

          })

        }
      </section>
    </div>
  </main>
  }


export default App;
