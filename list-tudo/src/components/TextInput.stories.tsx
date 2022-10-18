import {Meta, StoryObj} from '@storybook/react'
import { TextInput, TextInputRootProps} from "./TextInput";
import { FiCircle, FiMoreVertical } from "react-icons/fi";

//colocando propriedades padrão
export default {
	title: "Components/TextInput",
	component: TextInput.Root,
	args: {
		children: [
			<TextInput.Icon>
				<FiCircle />
			</TextInput.Icon>,
			<TextInput.Input placeholder="Próxima etapa" />
		],
	},
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
	},
} as Meta<TextInputRootProps>;

//criando variações do texto
export const Default: StoryObj<TextInputRootProps> = {};


export const WithoutIcon: StoryObj<TextInputRootProps> = {
	args: {
		children: <TextInput.Input placeholder="Próxima etapa" />,
	},
};

// fazer variação de input com o s icones do lado esquerdo também

export const WithTwoIcons: StoryObj<TextInputRootProps> = {
	args: {
		children: [
			<TextInput.Icon>
				<FiCircle />
			</TextInput.Icon>,
			<TextInput.Input placeholder="Próxima etapa" />,
			<TextInput.Icon>
				<FiMoreVertical className="gap-2" />
			</TextInput.Icon>,
		],
	},
};