import { useState } from 'react'
import './App.css'
import Modal from "./UI/Modal/Modal.tsx";
import Alert from "./UI/Alert/Alert.tsx";

const App = () => {
  const [showModal, setShowModal] = useState(false);

    const [showAlerts, setShowAlerts] = useState({
        primary: false,
        success: false,
        warning: false,
        danger: false,
    });

  const showAlert = (type: 'primary' | 'success' | 'warning' | 'danger') => {
      setShowAlerts(prev => ({...prev, [type]: true}))
  };

    const closeAlert = (type: 'primary' | 'success' | 'warning' | 'danger') => {
        setShowAlerts(prev => ({...prev, [type]: false}))
    };


  return (
    <>
        <button
            className='btn btn-primary m-3'
            type='button'
            onClick={() => {setShowModal(true)}}
            >
            Show modal lvl1
        </button>

        <button
            className='btn btn-secondary m-3'
            type='button'
            onClick={() => {
                showAlert('warning');
                showAlert('success');
            }}>
            Show Alert lvl2
        </button>

        {showAlerts.warning && (
            <Alert type="warning" onDismiss={() => closeAlert('warning')}>
                This is a warning type alert
            </Alert>
        )}

        {showAlerts.success && (
            <Alert type="success">
                This is a success type alert
            </Alert>
        )}

        <Modal show={showModal} title={"Custom modal title"}>
            <h3>Modal content</h3>
            <button
                className='btn btn-warning'
                onClick={() => {setShowModal(false)}}>
                Close modal
            </button>
        </Modal>
    </>
  )
};

export default App
