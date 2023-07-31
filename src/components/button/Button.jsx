import React from 'react'
import styled from "styled-components";

export default function Button({backgroundColor ,  text , handleClick}) {

  const StyledButton = styled.button`
  background-color: ${backgroundColor};
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius:6px
  `



  return (
    <StyledButton  onClick={handleClick} >  { text} </StyledButton>
  )
}
