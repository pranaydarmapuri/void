import { ComponentProps, ReactNode } from "react"
import css from './button.module.css'

type ButtonProps = {
  icon?: ReactNode,
  label: string,
  type?: 'primary' | 'secondary' | 'text'
} & ComponentProps<'button'>


const Button = ({ icon, label, className, type, ...rest }: ButtonProps) => {
  return (
    <button className={`${css.button} ${!!type ? css[type] : css.primary} ${className}`} {...rest}>{label}</button>
  )
}

export default Button