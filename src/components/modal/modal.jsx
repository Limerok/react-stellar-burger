import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import style from "./modal.module.css"
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useEffect } from "react";

const modalRoot = document.getElementById("modals");

const Modal = ({ children, closeModal, title }) => {
  useEffect(() => {
    const closeEsc = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    }

    document.addEventListener('keydown', closeEsc)

    return () => {
      document.removeEventListener("keydown", closeEsc);
    };
  }, [closeModal]);

  return ReactDOM.createPortal(
    (
      <>
        <div className={`${style.container} pt-10`}>
          <div className={title ? `${style.item__title} pt-5`: `${`${style.item} pt-5`}`}>
            {title && (
              <h2 className={`${style.title} text text_type_main-large`}>
                {title}
              </h2>
            )}
            <button
              onClick={closeModal}
              className={style.close}
              aria-label="Закрытие модального окна"
            >
            <CloseIcon/>
          </button>
          </div>
          {children}
          
        </div>
        <ModalOverlay onClose={closeModal}/>
      </>
    ), modalRoot
  );

  
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string
};

export default Modal;