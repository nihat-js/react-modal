import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";
import { useState } from "react";
function App() {

  const btnStyle = {backgroundColor : "#ff0000"  , color : "#fff" , borderRadius : "6px" , border : "none", padding : "12px 18px" , cursor : "pointer" ,  }

  const recomendationModal = {
    header: "Movie Recommendation",
    text: "Looking for a great movie to watch? We've got a recommendation for you!",
    buttons: [<button  style={{...btnStyle , backgroundColor : "#aaddbb"}}>    Watch Now </button> ,  <button  style={{...btnStyle , backgroundColor : "#fdc11c"}}>    Bookmark Page </button> ]
  }

  const subscribeModal = {
    header: "Subscribe to Our news",
    text: "Time to subscribe to our special news ",
    buttons: [<button style={{...btnStyle , backgroundColor : "#ff0000"}}> Subscribe </button> , <button  style={{...btnStyle , backgroundColor : "#fdc11c"}}>    Bookmark Page </button>]
  }


  const [showModal,setShowModal] = useState(false)

  const [modalData, setModalData] = useState(recomendationModal)


  return (
    <div className="app">
      <div className="container">
      <h2 style={{marginBottom  : "30px"}} >  Watch Free Movie. No  account required </h2>
      

      <Button text="Show Recommendation Modal" bgcolor="#aa00ee" onClick={() => { setShowModal(true); setModalData(recomendationModal) }} />
      <Button text="Show Subscribe Modal" bgcolor="#eedd00" onClick={() => { setShowModal(true); setModalData(subscribeModal) }} />


      <Modal data={modalData} show={showModal} setShow={setShowModal} />
      </div>

    </div>
  );
}

export default App;
