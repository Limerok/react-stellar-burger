import styles from './modal.module.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../services/modal/action';
import { ModalOverlay } from '../modal-overlay/modal-overlay';

const modalRoot = document.getElementById('modals');

export const Modal = ({ children, onClose }) => {

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
    onClose();
  };

  function handleCloseByEsc(e) {
    if (e.key === 'Escape') {
      handleClose();
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleCloseByEsc);

    return () => {
      document.removeEventListener('keydown', handleCloseByEsc);
    };
  }, []);

  return ReactDOM.createPortal(
    (
      <>
        <ModalOverlay handleCloseModal={handleClose} />
        <div className={`${styles.container} pt-10`}>
          <button
            onClick={handleClose}
            className={styles.close}
            aria-label="Закрытие модального окна"
          >
            <CloseIcon />
          </button>
          {children}
        </div>
      </>
    ),
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired
};