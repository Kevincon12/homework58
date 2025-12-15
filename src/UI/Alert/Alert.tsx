import React from 'react';

interface Props {
    type: 'primary'| 'success'| 'warning'| 'danger';
    onDismiss?: () => void;
    children?:React.ReactNode;
}

const Alert: React.FC<Props> = ({type, onDismiss, children}) => {
    return (
        <div className={`alert alert-${type}`}>
            {children}
            {onDismiss ? <button type='button' onClick={onDismiss} className='btn-close float-end'></button> : null}
        </div>
    );
};

export default Alert;