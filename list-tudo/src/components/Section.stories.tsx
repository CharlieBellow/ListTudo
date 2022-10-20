import {Meta, StoryObj} from '@storybook/react'
import { Section, SectionRootProps} from "./Section";
import { FiCircle, FiMoreVertical, FiCheck, FiStar } from "react-icons/fi";
import { Checkbox } from './Checkbox'

//colocando propriedades padrão
export default {
	title: "Components/SectionInput",
	component: Section.Root,
	args: {
		children: [
			<Section.Icon>
				<Checkbox />
			</Section.Icon>,
			<Section.Input placeholder="Próxima etapa" theme=""/>
		],
	},
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
	},
} as Meta<SectionRootProps>;

//criando variações do Sectiono
export const AddSubTask: StoryObj<SectionRootProps> = {};


export const InputWithoutIcon: StoryObj<SectionRootProps> = {
	args: {
		children: <Section.Input placeholder="Insira o título da lista" theme=""/>,
	},
};

// fazer variação de input com o s icones do lado esquerdo também

export const AddTask: StoryObj<SectionRootProps> = {
	args: {
		children: [
			<Section.Root>
				<Section.Icon>
					<Checkbox />
				</Section.Icon>
				<div className="flex w-full border-b-2 border-dark-actions py-2 bg-dark-background">
					<Section.Input value="{subtask.name}" theme="" />
					<Section.Icon>
						<FiMoreVertical className="gap-2" />
					</Section.Icon>
				</div>
			</Section.Root>,
		],
	},
};

export const Task: StoryObj<SectionRootProps> = {
	args: {
		children: [
			<Section.Root>
				<Section.Icon>
					<Checkbox />
				</Section.Icon>,
				<div className="flex w-full border-b-2 border-dark-actions py-2 bg-dark-background">
					<Section.Input value="{task.name}" theme=""/>
					<Section.Icon>
						<FiStar className="gap-2" />
					</Section.Icon>
			</div>
			</Section.Root>

		],
	},
};

export const SubTask: StoryObj<SectionRootProps> = {
	args: {
		children: [
			<Section.Root>
			<Section.Icon>
				<Checkbox />
			</Section.Icon>,
			<div className="flex w-full border-b-2 border-dark-actions py-2 bg-dark-background">
			<Section.Input value="{subtask.name}" theme=""/>
			<Section.Icon>
				<FiMoreVertical className="gap-2" />
				</Section.Icon>
			</div>

			</Section.Root>
				
		],
	},
};