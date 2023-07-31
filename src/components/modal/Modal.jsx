import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Modal({header,}) {

  const [show, setShow] = useState(false)
  

  useEffect(()=>{
    let listener = window.addEventListener('body',(e)=>{
      if (e.target.classList.contains('modal')){
        setShow(false)
      } 
    })
  },[])


  return (
    <div className='modal'>
      <div className="container">

      </div>
    </div>
  )
}
