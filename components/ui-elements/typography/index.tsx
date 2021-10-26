import { ComponentProps, ElementType, ReactNode } from 'react'
import css from './text-stylesheet.module.css'

type textType<E extends ElementType> = {
  children: ReactNode,
  color?: 'primary' | 'secondary' | 'text-primary' | 'text-secondary' | 'muted',
  type?: 'title' | 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'paragraph' | 'span' | 'subtitle' | 'caption',
  weight?: 'w1' | 'w2' | 'w3' | 'w4' | 'w5' | 'w6' | 'w7' | 'w8' | 'w9',
  _as?: E
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
  },
  subtitle: {
    type: 'p'
    className: string
  },
  caption: {
    type: 'span'
    className: string
  },
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
  subtitle: { type: 'p', className: css.subtitle },
  caption: { type: 'span', className: css.caption },
}


const Text = <E extends ElementType = 'span'>({
  children, color = 'text-primary', type = 'span', _as, weight, className, ...rest
}: TextProps<E>) => {

  const Tag = !!_as ? { type: _as, className: Component[type].className } : Component[type]

  const fontWeight = !!weight ? css[weight] : ''

  return (
    <Tag.type className={`${Component[type].className} ${css[color]} ${fontWeight} ${className}`} {...rest}>
      {children}
    </Tag.type >
  )

}
export default Text;