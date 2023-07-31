import React from 'react'
import style from "./Modal.css"
import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Modal({ header, show, setShow }) {

  const CloseButton = styled.button`
    position: absolute;
    top : 0;
    right : 0;
    background-color : #e81123;
    padding : 10px;
  `


  useEffect(() => {
    let listener = window.addEventListener('body', (e) => {
      if (e.target.classList.contains('modal')) {
        setShow(false)
      }
    })
  }, [])


  return (
    <div className="modal  ${style['modal']}  " style={{ display: show ? "flex" : "none" }}>
      <div className="container">
        I am modal
        <CloseButton onClick={() => setShow(false)}> &times; gds </CloseButton>
      </div>
    </div>
  )
}
