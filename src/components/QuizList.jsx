import React from 'react'
import QuizCard from './QuizCard'

const QuizList = ({users}) => {
  return (
    // création de la lise des quiz card
    <div className='quizlist'>
 {users&&React.Children.toArray(users.map(el=> <QuizCard user={el}/>))}
    </div>
  )
}

export default QuizList