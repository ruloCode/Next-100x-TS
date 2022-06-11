import React from 'react'
import styles from './button.module.scss'

export interface IProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  }

export const Button: React.FC<IProps> = (props) => {
    const {  children, ...buttonProps } = props;

  return (
    <button {...buttonProps} className={styles.button} type="button">{children}</button>
  )
}

export default Button