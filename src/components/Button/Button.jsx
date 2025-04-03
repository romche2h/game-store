import React from 'react';
import styles from './Button.module.scss';

function Button({ children, onClick, className, disabled, ...props }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${className || ''} `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
