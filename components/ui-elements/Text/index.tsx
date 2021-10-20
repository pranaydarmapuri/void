import { ComponentProps, ReactNode } from 'react'
import css from './text-stylesheet.module.css'

type textType = { children: ReactNode }

const Title = ({ children, className, ...rest }: textType & ComponentProps<'h1'>) => (
  <h1 className={`${css.title} ${className}`} {...rest} >{children}</h1>
)

const Heading = ({ children, className, ...rest }: textType & ComponentProps<'h2'>) => (
  <h2 className={`${css.heading} ${className}`} {...rest} >{children}</h2>
)

const Heading2 = ({ children, className, ...rest }: textType & ComponentProps<'h3'>) => (
  <h3 className={`${css.heading2} ${className}`} {...rest} >{children}</h3>
)

const Heading3 = ({ children, className, ...rest }: textType & ComponentProps<'h4'>) => (
  <h4 className={`${css.heading3} ${className}`} {...rest} >{children}</h4>
)

const Heading4 = ({ children, className, ...rest }: textType & ComponentProps<'h5'>) => (
  <h5 className={`${css.heading4} ${className}`} {...rest} >{children}</h5>
)

const Heading5 = ({ children, className, ...rest }: textType & ComponentProps<'h6'>) => (
  <h6 className={`${css.heading5} ${className}`} {...rest} >{children}</h6>
)

const Paragraph = ({ children, className, ...rest }: textType & ComponentProps<'p'>) => (
  <p className={`${css.title} ${className}`} {...rest} >{children}</p>
)

const TextPrimary = ({ children, className, ...rest }: textType & ComponentProps<'span'>) => (
  <span className={`${css.text_primary} ${className}`} {...rest} >{children}</span>
)

const TextSecondary = ({ children, className, ...rest }: textType & ComponentProps<'span'>) => (
  <span className={`${css.text_secondary} ${className}`} {...rest} >{children}</span>
)



const Text = {
  title: Title,
  heading: Heading,
  heading2: Heading2,
  heading3: Heading3,
  heading4: Heading4,
  heading5: Heading5,
  paragraph: Paragraph,
  primary: TextPrimary,
  secondary: TextSecondary,
}

export default Text;