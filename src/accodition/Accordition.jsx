import React, { useState } from 'react'
import data from './data'
import Question from './Question';
function Accordition() {
    const [questions,setQuestions]=useState(data);
    return (
        <main>
            <div className="container">
                <h3>questions and answers about login</h3>
                <section className="info">
                    {
                        questions.map(question =>{
                            return <Question key={question.id} {...question}/>
                        })
                    }
                </section>
            </div>
        </main>
    )
}

export default Accordition
