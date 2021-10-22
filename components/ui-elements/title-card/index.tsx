import { ComponentProps, ReactNode } from "react"
import css from './title-card.module.css'


type TitleCardProps = {
  children: ReactNode,
} & ComponentProps<'div'>


const TitleCard = ({ children }: TitleCardProps) => {
  return (
    <div className={`${css.title_card}`}>
      {children}
    </div>
  )
}

export default TitleCard