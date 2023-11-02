import React from "react";
import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

const ModalOverlay = ({ handleCloseModal  }) => {
  return (
  <div className={styles.overlay} onClick={handleCloseModal }>

  </div>
  )
};

ModalOverlay.propTypes = {
  handleCloseModal : PropTypes.func.isRequired,
};

export default ModalOverlay;