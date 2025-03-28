import React from 'react';
import styles from './Button.module.scss';

function Button({ children, onClick, className, ...props }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
