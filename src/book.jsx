import React from 'react'

const book = (props) => {
    const{userId,id,title,completed}=props;
  return (
    <>
        <div className='inline-block border-2 border-solid border-green-600 max-w-[100px] overflow-hidden max-h-[100px]'>
            <div>
                <p>{userId}</p>
                <p>{id}</p>
                <p>{title}</p>
                <p>{completed}</p>
            </div>
        </div>
    </>
  )
}

export default book
