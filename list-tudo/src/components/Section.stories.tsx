import {Meta, StoryObj} from '@storybook/react'
import { Section, SectionRootProps} from "./Section";
import { FiCircle, FiMoreVertical, FiCheck, FiStar, FiPlusSquare } from "react-icons/fi";
import { Checkbox } from './Checkbox'

//colocando propriedades padrão
export default {
	title: "Components/SectionInput",
	component: Section.Root,
	args: {
		children: [
			<Section.Icon>
				<FiPlusSquare />
			</Section.Icon>,
			<Section.Input placeholder="Próxima etapa" theme="" />,
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
export const AddSection: StoryObj<SectionRootProps> = {};


// fazer variação de input com o s icones do lado esquerdo também

export const SectionInput: StoryObj<SectionRootProps> = {
	args: {
		children: [
			<Section.Root>
				<Section.Icon>
					<FiPlusSquare />
				</Section.Icon>
				<div className="flex w-full border-b-2 border-dark-actions py-2 bg-dark-background">
					<Section.Input
						value="{subtask.name}"
						theme=""
						className="flex items-center justify-center "
					/>
					<Section.Icon>
						<FiMoreVertical className="gap-2" />
					</Section.Icon>
				</div>
			</Section.Root>,
		],
	},
};
