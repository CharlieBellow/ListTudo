import { Slot } from "@radix-ui/react-slot"
import { InputHTMLAttributes, ReactNode } from "react";
import { FiMinusSquare, FiMoreVertical } from "react-icons/fi";

export interface SectionRootProps {
  children: ReactNode;
  theme?: string;
}

function SectionRoot(props: SectionRootProps) {
  const ColorTheme =
  props.theme === "light"
  ? "text-light-text bg-light-background"
  : "text-dark-text bg-dark-background"; /* aqui coloca as estilizações que mudam de acordo com o tema (dark/light) */
  
  return (
    <div
    className={`flex items-center gap-2 px-1 h-full py-2 pl-1 w-full font-normal text-md ${ColorTheme}`}
    >
      {props.children}
    </div>

  )
}

SectionRoot.displayName = "Section.Root";


export interface SectionIconPropos{
  children: ReactNode;
}

function SectionIcon(props: SectionIconPropos) {
  return <Slot className="h-6 w-6 text-dark-actions">
    {props.children}
  </Slot>;
}

SectionIcon.displayName = 'Section.Icon'


export interface SectionInputProps extends InputHTMLAttributes<HTMLInputElement> {
  
	theme: string;
}

function SectionInput(props: SectionInputProps) {
	const ColorTheme =
		props.theme === "light"
			? "text-light-text bg-light-background"
			: "text-dark-text bg-dark-background"; /* aqui coloca as estilizações que mudam de acordo com o tema (dark/light) */

  return (
		<div className="flex flex-row items-center w-full text-pink-light ">
			<hr className="items-center text-pink-light bg-pink-light w-full flex-auto" />
			<p
				className={` placeholder:text-dark-actions outline-none ${ColorTheme}  w-full items-center text-pink-light  `}
				{...props}
			>
				SESSÃO 1
			</p>
			<hr className="items-center text-pink-light bg-pink-light w-full flex-auto" />
		</div>
	);
}

SectionInput.displayName = "Section.Input";

export const Section = {
	Root: SectionRoot,
  Input: SectionInput,
  Icon: SectionIcon,
};