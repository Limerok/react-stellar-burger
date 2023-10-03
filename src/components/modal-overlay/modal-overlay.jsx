import React from "react";
import style from "./modal-overlay.module.css";
import PropTypes from "prop-types";

const ModalOverlay = ({ handleCloseModal  }) => {
  return (
  <div className={style.overlay} onClick={handleCloseModal }>

  </div>
  )
};

ModalOverlay.propTypes = {
  handleCloseModal : PropTypes.func.isRequired,
};

export default ModalOverlay;