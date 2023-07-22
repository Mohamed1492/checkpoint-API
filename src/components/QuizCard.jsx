import React from 'react'

const QuizCard = ({user}) => {
  return (
    // affichage de la question et sa réponse
    <>
    <div className='cardquiz'>   
        <h3>Question: {user.question}</h3>
        <button className='true' onclick={(e)=>e.get.value }> True</button>
        <button className='false'> False</button>
    </div>
        <h5> Answer:{user.correct_answer}</h5>
    </>
  )
}

export default QuizCard