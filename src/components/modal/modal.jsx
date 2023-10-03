import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import style from "./modal.module.css"
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../services/actions/modal";

const modalRoot = document.getElementById("modals");

const Modal = ({ children, title }) => {
  const dispatch = useDispatch();

  function handleCloseByEsc(e) {
    if (e.key === "Escape") {
        dispatch(closeModal())
    }
  }

  React.useEffect(() => {
    document.addEventListener("keydown", handleCloseByEsc);

    return () => {
      document.removeEventListener("keydown", handleCloseByEsc);
    }
  }, [])

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
              onClick={() => dispatch(closeModal())}
              className={style.close}
              aria-label="Закрытие модального окна"
            >
            <CloseIcon/>
          </button>
          </div>
          {children}
          
        </div>
        <ModalOverlay handleCloseModal={() => dispatch(closeModal())}/>
      </>
    ), modalRoot
  );

  
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string
};

export default React.memo(Modal);