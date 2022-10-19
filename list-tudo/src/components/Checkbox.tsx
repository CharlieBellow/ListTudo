import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import {FiCheck} from 'react-icons/fi'


export interface CheckboxProps {
  theme?: string;
  //sizeIcon?: Number;
  sizeBox?: string;
}

export function Checkbox(props: CheckboxProps) {
  const ColorTheme =
		props.theme === "light"
			? "text-light-text bg-light-background"
			: "text-dark-text bg-dark-background"; /* aqui coloca as estilizações que mudam de acordo com o tema (dark/light) */
  return (
    <CheckboxPrimitive.Root className={`w-6 h-6 p-[2px] bg-dark-background rounded-full border-dark-actions border-2 flex items-center ${ColorTheme} ${props.sizeBox}`}>
      <CheckboxPrimitive.Indicator asChild>
        <FiCheck className={`h-5 w-5 text-dark-actions rounded-full ${ColorTheme}`}/>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

