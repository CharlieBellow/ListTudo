import { Slot } from "@radix-ui/react-slot"
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
  children: ReactNode;
  theme?: string;
}

function TextInputRoot(props: TextInputRootProps) {
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

TextInputRoot.displayName = "TextInput.Root";


export interface TextInputIconPropos{
  children: ReactNode;
}
function TextInputIcon(props: TextInputIconPropos) {
  return <Slot className="h-6 w-6 text-dark-actions">
    {props.children}
  </Slot>;
}

TextInputIcon.displayName = 'TextInput.Icon'


export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {
  
	theme: string;
}

function TextInputInput(props: TextInputInputProps) {
	const ColorTheme =
		props.theme === "light"
			? "text-light-text bg-light-background"
			: "text-dark-text bg-dark-background"; /* aqui coloca as estilizações que mudam de acordo com o tema (dark/light) */

	return (
		<input
			className={`flex-1 placeholder:text-dark-actions outline-none ${ColorTheme}`}
			{...props}
		/>
	);
}

TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
	Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};