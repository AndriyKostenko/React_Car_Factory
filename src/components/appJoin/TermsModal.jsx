import React from 'react';
import { useEffect } from 'react';
import Modal from 'react-modal';

import './termsModal.scss';

Modal.setAppElement('#root');  // This line is required for accessibility reasons

function TermsModal({ isOpen, onRequestClose, onAgree, onDisagree }) {

	// tracking the state of modal and freezing the modal window 
	useEffect(()=> {

		if (isOpen) {
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
		}

		//cleanup
		return () => {
			document.body.classList.remove('no-scroll');
		};
	}, [isOpen]);


	const showHideClassName = isOpen ? "modal display-block" : "modal display-none";

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Terms and Conditions"
        className={showHideClassName}
      >
        <div className="modal-content">
          <h4 className='modal-title'>Terms and Conditions</h4>
          <div className='modal-descr'>
            Your terms and conditions content goes here.
          </div>
          <div className="buttons">
            <button className='modal-button-green btn' onClick={onAgree}>Agree</button>
            <button className='modal-button-grey btn' onClick={onDisagree}>Disagree</button>
          </div>
          <button className='close-button' onClick={onRequestClose}>x</button>

        </div>

      </Modal>
    );
  }

export default TermsModal;
