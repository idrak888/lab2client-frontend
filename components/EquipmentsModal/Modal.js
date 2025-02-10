import React from "react";
import Modal from "react-modal";

Modal.setAppElement('#__next'); // Prevent accessibility issues

export default function MyModal({ isOpen, onRequestClose, children }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)"
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: "20px",
          borderRadius: "8px",
          width: "50%",
          height: "60%"
        }
      }}
    >
      <button
        onClick={onRequestClose}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "none",
          border: "none",
          fontSize: "1.5rem",
          cursor: "pointer"
        }}
      >
        &times;
      </button>
      {children}
    </Modal>
  );
}