import React from 'react'
import facj from './facj.json'
import Book from './book'
const booklist = () => {
  return (
    <>
       {facj.map((ele1)=>{
        return(
            <Book userId={ele1.userId} id={ele1.id} title={ele1.title} completed={ele1.completed}/>
        )
       })
       }
    </>
  )
}

export default booklist
