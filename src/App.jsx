import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";
import { useState } from "react";

function App() {


  const [showModal1, setShowModal1] = useState(false)
  const [showModal2, setShowModal2] = useState(false)
  
  return (
    <div className="app" style={{position : 'relative'}}>
      <Button    text="Toggle First Modal"  bgcolor="#aa00ee"  onClick={() => setShowModal1(state => !state )} />
      <Button    text="Toggle Second Modal"  bgcolor="#eedd00"  onClick={() => setShowModal2(state => !state )} />


      <Modal header="I am first Modal" show={showModal1} setShow={setShowModal1} />
       <Modal  header="I am second modal" show={showModal2} setShow={setShowModal2} /> 
      
    </div>
  );
}

export default App;
