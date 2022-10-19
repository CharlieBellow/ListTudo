import {Meta, StoryObj} from '@storybook/react'
import { Text, TextProps } from "./Text";

//colocando propriedades padrão
export default {
	title: "Components/Text",
	component: Text,
  args: {
    children: 'Exemplo de texto',
    size: 'sm',
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>;

//criando variações do texto
export const ExtraSmall: StoryObj<TextProps> = {
  args: {
    size: 'xs'
  }
}
export const Small: StoryObj<TextProps> = {
	args: {
		size: "sm",
	},
};
export const Medium: StoryObj<TextProps> = {
	args: {
		size: "md",
	},
};

export const CustomComponent: StoryObj<TextProps> = {
	args: {
    asChild: true,
    children: (
      <p>Text with P tag</p>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};