import { closeIcon,  } from '../../images/svg-icons';
import React, { useState, useEffect, Children } from 'react';
// import { Modal, Button, Spinner } from 'reactstrap';
import './styles.scss';

const Popup: React.FC<any> = React.memo(
  ({ onModalClose, className, onBackClick, ShowPopup , modalBodyPadding}) => {
    useEffect(() => {
      document.body.classList.add('overflow-hidden');
      return () => {
        document.body.classList.remove('overflow-hidden');
        localStorage.removeItem('packageInfo');
      };
    }, []);



    const [height, setHeight] = useState(document.body.clientHeight);
    return (
      <div
        className='customModal light'
        onScroll={() => setHeight(document.body.clientHeight)}
      >
        <div className={`modal-body ${modalBodyPadding?modalBodyPadding:''}`}>
     
          
            <div className="close-icon">
              <span onClick={onModalClose}>{closeIcon}</span>
            </div>
          
          <div className="popup-alert">CRASH GAME</div>
        </div>
      </div>
    );
  },
);

export default Popup;
