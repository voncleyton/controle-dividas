import React, { useState, useEffect } from 'react';

import ReactModal from 'react-modal';

interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  toglleModal: () => void;
}

const Modal: React.FC<IModalProps> = ({ children, isOpen, toglleModal }) => {
  const [modalStatus, setModalStatus] = useState(true);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={false}
      onRequestClose={toglleModal}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '100%',
          maxWidth: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
