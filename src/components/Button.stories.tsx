import { Meta, StoryObj} from '@storybook/react'
import { Button, ButtonProps } from "./Button";

//colocando propriedades padrão
export default {
	title: "Components/Button",
	component: Button,
  args: {
    children: 'Enviar',
  },
  argTypes: {}
} as Meta<ButtonProps>;

//criando variações do texto
export const Default: StoryObj<ButtonProps> = {
  args: {
    
  }
}
