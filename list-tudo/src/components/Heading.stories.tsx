import {Meta, StoryObj} from '@storybook/react'
import { Heading, HeadingProps } from "./Heading";

//colocando propriedades padrão
export default {
	title: "Components/Heading",
	component: Heading,
	args: {
		children: "Exemplo de texto",
		weight: "mdi",
	},
	argTypes: {
		weight: {
			options: ["reg", "mdi", "bld"],
			control: {
				type: "inline-radio",
			},
		},
	},
} as Meta<HeadingProps>;

//criando variações do texto
export const Regular: StoryObj<HeadingProps> = {
	args: {
		weight: "reg",
	},
};
export const Medium: StoryObj<HeadingProps> = {
	args: {
		weight: "mdi",
	},
};
export const Bold: StoryObj<HeadingProps> = {
	args: {
		weight: "bld",
	},
};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Testando</h1>
    ),
  },

  //declarando as propriedades que não é pra ninguém mexer
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },

  asChild: {
      table: {
        disable: true,
      },
    },
  },
};