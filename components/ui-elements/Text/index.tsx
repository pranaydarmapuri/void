import { ComponentProps, ElementType, ReactNode } from 'react'
import css from './text-stylesheet.module.css'

type textType<E extends ElementType> = {
  children: ReactNode,
  color?: 'primary' | 'secondary' | 'text-primary' | 'text-secondary' | 'muted',
  tag?: 'title' | 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'paragraph' | 'span'
}

type TextProps<E extends ElementType> = textType<E> & Omit<ComponentProps<E>, keyof textType<E>>

type componentType = {
  title: {
    type: 'h1'
    className: string
  },
  heading1: {
    type: 'h2'
    className: string
  },
  heading2: {
    type: 'h3'
    className: string
  },
  heading3: {
    type: 'h4'
    className: string
  },
  heading4: {
    type: 'h5'
    className: string
  },
  heading5: {
    type: 'h6'
    className: string
  },
  paragraph: {
    type: 'p'
    className: string
  }
  span: {
    type: 'span'
    className: string
  }
}

const Component: componentType = {
  title: { type: 'h1', className: css.title },
  heading1: { type: 'h2', className: css.heading1 },
  heading2: { type: 'h3', className: css.heading2 },
  heading3: { type: 'h4', className: css.heading3 },
  heading4: { type: 'h5', className: css.heading4 },
  heading5: { type: 'h6', className: css.heading5 },
  paragraph: { type: 'p', className: css.paragraph },
  span: { type: 'span', className: '' },
}


const Text = <E extends ElementType = 'span'>({
  children, color = 'text-primary', tag = 'span', className, ...rest
}: TextProps<E>) => {

  const Tag = Component[tag]

  return (
    <Tag.type className={`${Component[tag].className} ${css[color]} ${className}`} {...rest}>
      {children}
    </Tag.type >
  )

}
export default Text;