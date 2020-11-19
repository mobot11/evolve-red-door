import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import VisuallyHidden from '@reach/visually-hidden';
import Alert from '@reach/alert';

import styles from '../styles/FormAlert.module.scss';

const FormAlert = ({ text, alertState, setShowAlert }) => {
  const buttonRef = React.useRef();

  const close = () => setShowAlert(false);

  React.useEffect(() => {
    buttonRef.current.focus();
  }, []);
  return (
    <div className={clsx(styles.alertContainer, styles[alertState])}>
      <React.Fragment>
        <Alert>
          <p className={styles.alertText}>{text}</p>
        </Alert>
        <button onClick={close} className={styles.alertCloseButton} ref={buttonRef}>
          <VisuallyHidden>Close alert.</VisuallyHidden>
          <span aria-hidden="true">x</span>
        </button>
      </React.Fragment>
    </div>
  );
};

FormAlert.propTypes = {
  text: PropTypes.string,
  alertState: PropTypes.oneOf(['success', 'error']),
  setShowAlert: PropTypes.func,
};

export default FormAlert;
