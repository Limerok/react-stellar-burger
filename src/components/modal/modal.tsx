import styles from './modal.module.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { ModalOverlay } from '../modal-overlay/modal-overlay';
import { useAppDispatch } from '../../hooks/hooks';
import { closeModal } from '../../services/modal/slice';

const modalRoot = document.getElementById('modals');

type TModal = {
  children: JSX.Element;
  onClose(): void;
};

export const Modal = ({ children, onClose }: TModal): JSX.Element => {

  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeModal());
    onClose();
  };

  const handleCloseByEsc = (e: Event & { key: string }) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

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
            <CloseIcon type='primary' />
          </button>
          {children}
        </div>
      </>
    ),
    modalRoot as HTMLElement
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired
};