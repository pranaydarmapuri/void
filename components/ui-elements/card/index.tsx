import { ComponentProps, ReactNode } from "react"
import css from './card.module.css'


type TitleCardProps = {
  children: ReactNode,
  stretched?: boolean
} & ComponentProps<'div'>

const Card = ({ children, stretched, className, ...rest }: TitleCardProps) => (
  <div className={`${css.card} ${stretched && css.stretched} ${className}`} {...rest}>
    {children}
  </div>
)

export default Card