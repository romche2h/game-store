import React from 'react';
import styles from './InputField.module.scss';

function InputField({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  children,
  autoFocus,
}) {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <div className={styles.inputWrapper}>
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          className={styles.inputpass}
          onChange={onChange}
          value={value}
          autoFocus={autoFocus}
        />
        {children}
      </div>
    </div>
  );
}
export default InputField;
