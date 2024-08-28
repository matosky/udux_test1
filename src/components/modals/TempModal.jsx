import React, { useEffect, useRef } from 'react';
import './TemoModal.css';

const TempModal = ({ open, handleClose }) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const modal = modalRef.current;
    const overlay = overlayRef.current;

    if (open) {
      modal.classList.add('show');
      overlay.classList.add('show');
    } else {
      if (modal) modal.classList.remove('show');
      if (overlay) overlay.classList.remove('show');
    }
  }, [open]);

  const handleSeeMoreClick = () => {
    window.location.href = 'https://groove.ng';
  };

  if (!open) return null;

  return (
    <>
      <div ref={overlayRef} className="overlay" ></div>
      <div ref={modalRef} id="modal">
        <div id="modal-content">
          <h1>uduX Music Player Refresh <br /> Coming Back Soon Q1 2025</h1>
          <button onClick={handleSeeMoreClick}>See More</button>
        </div>
      </div>
    </>
  );
};

export default TempModal;
