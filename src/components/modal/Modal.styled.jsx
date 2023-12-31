import styled from 'styled-components'

const StyledModal = styled.div`
    display:  ${props =>  {  return props.show === 'true' ? 'flex' : 'none'}};
    background-color: rgba(0,0,0,0.7);
    position : absolute;
    top : 0;
    left : 0;
    height: 100vh;

    width: 100vw;
    justify-content: center;
    align-items: center;
    z-index: 10;
    .container  {
      position: relative;
      width : 600px ;
      border-radius : 6px;
      padding : 20px 30px;
      background-color: #f9fafb;
      .title {
        text-align :center ;
        font-size: 26px;
        font-weight: bold;
        margin-bottom: 10px;
      }
    }
    .btn-close {
      position: absolute;
      top : 0;
      right : 0;
      background-color : #e81123;
      padding : 10px;
      border : none;
      font-size : 12px;
      color : #fff;
      font-weight : bold;
      cursor : pointer;
    }
    .actions {
      margin : 20px 0 ;
      display : flex;
      gap : 10px
    }
    `
 export default StyledModal   