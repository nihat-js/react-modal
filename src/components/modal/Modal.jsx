import React from 'react'
import { useEffect,useState } from 'react'
import StyledModal from './Modal.styled' 

export default function Modal({ header, show, setShow, showCloseButton = true }) {


  useEffect(() => {
    let listener = window.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        setShow(false)
      }
    })
    return window.removeEventListener('click',listener)
  }, [])


  return (
    <StyledModal className='modal' show={show.toString()} >
      <div className="container">
        <h3 className='title'> {header}   </h3>
        {showCloseButton && <button className='btn-close' onClick={() => { setShow(false)  }}> &times; </button>}

      </div>
    </StyledModal>
  )
}



