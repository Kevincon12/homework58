import { useState } from 'react'
import './App.css'
import Modal from "./UI/Modal/Modal.tsx";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
        <button
            className='btn btn-primary m-3'
            type='button'
            onClick={() => {setShowModal(true)}}
            >
            Show modal lvl1
        </button>
        <Modal show={showModal} title={"Custom modal title"}>
            <h3>Modal content</h3>
            <button className='btn btn-warning' onClick={() => {setShowModal(false)}}>Close modal</button>
        </Modal>
    </>
  )
};

export default App
