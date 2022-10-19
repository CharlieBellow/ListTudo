import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';


export interface HeadingProps {
	weight?: "reg" | "mdi" | "bld";
	children: ReactNode;
	asChild?: boolean;
	theme?: string;
}

export function Heading({ weight = "mdi", children, asChild, theme }: HeadingProps) {
	const Comp = asChild ? Slot : "span";
	//por padrão o tema vai ser dark, se colocar light ele muda..
	const ColorTheme = theme === "light" ? "text-light-text" : "text-dark-text";

	return (
		<Comp
			className={clsx(` text-lg font-sans ${ColorTheme}`, {
				"font-light": weight === "reg",
				"font-medium": weight === "mdi",
				"font-bold": weight === "bld",
			})}
		>
			{children}
		</Comp>
	);
}