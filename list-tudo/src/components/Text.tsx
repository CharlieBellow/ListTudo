import { clsx } from 'clsx'
import {Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';


export interface TextProps {
  size?: 'xs' | 'sm' | 'md',
  children: ReactNode,
  asChild?: boolean;
  theme?: string;
}

export function Text({ size = 'sm', children, asChild, theme }: TextProps) {
  const Comp = asChild ? Slot : 'span'
  //por padrão o tema vai ser dark, se colocar light ele muda..
  const ColorTheme = theme === "light" ? "text-light-text" : "text-dark-text"; 
  
  return (
    <Comp className={clsx(
    `font-sans ${ColorTheme}`,
    {
      'text-xs': size === 'xs',
      'text-sm': size === 'sm',
      'text-md': size === 'md',
      
    }
  )}
  >
    {children}
  </Comp>)
}