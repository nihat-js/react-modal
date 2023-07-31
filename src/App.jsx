import "./App.css"

import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";
import { useState } from "react";

function App() {

  const [show, setShow] = useState(false)

  return (
    <div className="app">
      <Button text="Open First Modal" backgroundColor="blue"  handleClick={() => setShow(true)} />
      <Button handleClick={() => setShow(true)} text="Open Second Modal" backgroundColor="red" />
      <Modal show={show} setShow={setShow} />
    </div>
  );
}

export default App;
