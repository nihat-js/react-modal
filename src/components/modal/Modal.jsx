import React from 'react'
import { useEffect,useState } from 'react'
import StyledModal from './Modal.styled' 

export default function Modal({  data,  show, setShow,  showCloseButton = true }) {

  const {header,text,buttons} = data

  useEffect(() => {
    let clickListener = window.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        setShow(false)
      }
    })
    let keyListener = window.addEventListener('keyup',(e) =>{
      if (e.key == "Escape") {
        setShow(false)
      }
    })

    return  () => {
     window.removeEventListener('click',clickListener)
     window.removeEventListener('keyup',keyListener)
    }  
  }, [])


  return (
    <StyledModal className='modal' show={show.toString()} >
      <div className="container">
        <h2 className='title'> {header}   </h2>
        {showCloseButton && <button className='btn-close' onClick={() => { setShow(false)  }}> &times; </button>}
        <p className="text"> { text} </p>
        <div className="actions">
          {buttons.map( (el,i) => <div key={i}>  {el} </div>)}
        </div>
      </div>
    </StyledModal>
  )
}



