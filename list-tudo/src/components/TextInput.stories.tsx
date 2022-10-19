import {Meta, StoryObj} from '@storybook/react'
import { TextInput, TextInputRootProps} from "./TextInput";
import { FiCircle, FiMoreVertical, FiCheck, FiStar } from "react-icons/fi";

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
export const AddSubTask: StoryObj<TextInputRootProps> = {};


export const InputWithoutIcon: StoryObj<TextInputRootProps> = {
	args: {
		children: <TextInput.Input placeholder="Insira o título da lista" />,
	},
};

// fazer variação de input com o s icones do lado esquerdo também

export const AddTask: StoryObj<TextInputRootProps> = {
	args: {
		children: [
			<TextInput.Icon>
				<FiCircle />
			</TextInput.Icon>,
			<TextInput.Input placeholder="adicionar uma tarefa" />,
			<TextInput.Icon>
				<FiCheck className="gap-2" />
			</TextInput.Icon>,
		],
	},
};

export const Task: StoryObj<TextInputRootProps> = {
	args: {
		children: [
			<TextInput.Icon>
				<FiCircle />
			</TextInput.Icon>,
			<div className="flex w-full border-b-2 border-dark-actions py-2 bg-dark-background">
				<TextInput.Input value="{task.name}"/>
				<TextInput.Icon>
					<FiStar className="gap-2" />
				</TextInput.Icon>

			</div>
		],
	},
};

export const SubTask: StoryObj<TextInputRootProps> = {
	args: {
		children: [
			<TextInput.Icon className="h-full">
				<FiCircle />
			</TextInput.Icon>,
			<div className="flex w-full border-b-2 border-dark-actions py-2 bg-dark-background">
			<TextInput.Input value="{subtask.name}" />
			<TextInput.Icon>
				<FiMoreVertical className="gap-2" />
				</TextInput.Icon>
			</div>
				
		],
	},
};