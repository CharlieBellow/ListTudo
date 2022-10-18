import { clsx } from 'clsx'
import {Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';


export interface ButtonProps {
  children: ReactNode,
  asChild?: boolean;
  theme?: string;
}

export function Button({ children, asChild, theme }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  //por padrão o tema vai ser dark, se colocar light ele muda..
  const ColorTheme = theme === "light" ? "text-light-text" : "text-dark-text"; 
  
  return (
		<Comp
			className={clsx(
				`font-sans font-medium py-1 px-1 bg-transparent rounded text-lg hover:bg-dark-actions w-full border-solid border-2 focus:ring-2 ring-light-text border-dark-actions  ${ColorTheme}`,
        {
          
        }
			)}
		>
			{children}
		</Comp>
	);
}