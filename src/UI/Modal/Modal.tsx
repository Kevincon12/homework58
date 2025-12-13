import Backdrop from "../Backdrop/Backdrop.tsx";
import * as React from "react";

interface Props {
    show: boolean;
}

const Modal: React.FC<Props> = ({show=false}) => {
    return (
        <>
            <Backdrop show={show}/>
            <div className='modal show' style={{display: show ? 'block' : 'none'}}>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h1 className='modal-title fs-5 text-center'>Some kinda modal title</h1>
                        </div>
                        <div className="modal-body">
                            Modal content
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;