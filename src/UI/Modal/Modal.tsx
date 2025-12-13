import React from 'react';

const Modal = () => {
    return (
        <>
            <div className='modal-backdrop show' style={{display:'block'}}></div>
            <div className='modal show' style={{display:'block'}}>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h1 className='modal-title fs-5 text-center'>Some kinda modal title</h1>
                        </div>
                        Modal content
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;