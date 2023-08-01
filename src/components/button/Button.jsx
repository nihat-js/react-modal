import React from 'react'
import StyledButton from './Button.styled'

export default function Button({bgcolor ,  text , onClick}) {

  return  <StyledButton bgcolor={bgcolor}  onClick={onClick}  >  { text} </StyledButton>
  
}


