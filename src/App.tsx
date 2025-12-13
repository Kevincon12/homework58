import { useState } from 'react'
import './App.css'
import Modal from "./UI/Modal/Modal.tsx";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
        <button className='btn btn-primary' type='button'>Show modal</button>
        <Modal show={showModal}/>
    </>
  )
};

export default App
