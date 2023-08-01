import React from 'react'
import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${props => props.bgcolor};
  color: white;
  padding: 15px 20px;
  border-radius: 6px;
  border : none;
  cursor: pointer;
  `;


export default StyledButton