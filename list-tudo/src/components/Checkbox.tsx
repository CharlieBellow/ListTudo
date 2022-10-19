import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import {FiCheck} from 'react-icons/fi'


export interface CheckboxProps {}

export function Checkbox({ }: CheckboxProps) {
  
  return (
    <CheckboxPrimitive.Root className="w-6 h-6 p-[2px] bg-dark-background rounded-full border-dark-actions border-2 flex items-center">
      <CheckboxPrimitive.Indicator asChild>
        <FiCheck weight='bold' className="h-5 w-5 text-dark-actions" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}