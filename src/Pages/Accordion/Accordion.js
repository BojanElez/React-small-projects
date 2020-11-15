import React, { useState } from 'react';
import SingleQuestion from './Question';
import dataAccordion from '../../data/dataAccordion';
import Title from '../../Components/Title/Title';
import "./accordion.css";

function Accordion() {
  const [questions,setQuestions] = useState(dataAccordion);

  return (
    <main>
      <Title title="Accordion"/>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((question)=> {
            return <SingleQuestion key={question.id} {...question}></SingleQuestion>
          })}  
        </section>
      </div>
    </main>
  );
}

export default Accordion;