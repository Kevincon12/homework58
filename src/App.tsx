import { useState } from 'react'
import './App.css'
import Modal from "./UI/Modal/Modal.tsx";

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
        <Modal />
    </>
  )
};

export default App
