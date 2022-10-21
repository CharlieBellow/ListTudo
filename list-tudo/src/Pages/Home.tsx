
import axios from 'axios'
import { Checkbox } from "../components/Checkbox";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import {
	FiCircle,
	FiMoreVertical,
	FiCheck,
	FiStar,
	FiPlus,
	FiPlusSquare,
	FiTrash2,
} from "react-icons/fi";
import { Button } from "../components/Button";
import { Section } from "../components/Section";
import { FormEvent, useState } from "react";

export function Home() {
  const [isCreateTask, setIsCreateTask] = useState(false);

  async function handleTask(event: FormEvent) {
    event.preventDefault()

		await axios.post('/sessions', {
			tarefa: "fazer bolo"
		})
    setIsCreateTask(true)
  }
	return (
		<>
			<div className="w-screen h-screen flex flex-col items-center justify-center bg-dark-background text-dark-text">
				{/*<Checkbox />*/}
				<header className="flex flex-col items-center">
					<Heading weight="bld" theme="dark" className="mt-4">
						Nome da lista
					</Heading>
					<Text size="md" className="mt-1 text-dark-div">
						exemplo de texto
					</Text>
				</header>

				<form
					onSubmit={handleTask}
					className="flex flex-col items-stretch w-full max-w-sm mt-10"
				>
					{isCreateTask && <Text>Criou tarefa!</Text>}
					<label htmlFor="ListName flex flex-col gap-3 ">
						<Text className="font-mdi">Lista de tarefas</Text>
					</label>
					<TextInput.Root>
						<TextInput.Icon>
							<Checkbox />
						</TextInput.Icon>
						<div className="flex w-full border-b-2 border-dark-actions py-2 bg-dark-background">
							<TextInput.Input value="{task.name}" theme="" />
							<TextInput.Icon>
								<FiStar className="gap-2" />
							</TextInput.Icon>
						</div>
					</TextInput.Root>

					<div className="flex flex-col pl-3">
						<TextInput.Root>
							<TextInput.Icon>
								<Checkbox />
							</TextInput.Icon>
							<div className="flex w-full border-b-2 border-dark-actions py-2 bg-dark-background">
								<TextInput.Input value="{subtask.name}" theme="" />
								<TextInput.Icon>
									<FiMoreVertical className="gap-2" />
								</TextInput.Icon>
							</div>
						</TextInput.Root>

						<Section.Root>
							<Section.Icon>
								<FiPlusSquare className="w-7 h-7 text-pink-light text-dark-div " />
							</Section.Icon>
							<div className="flex w-full border-b-2 border-dark-actions py-2 bg-dark-background">
								<Section.Input
									theme=""
									className="flex items-center gap-2 flex-none px-2"
								/>
								<Section.Icon>
									<FiMoreVertical className="gap-2 text-pink-light" />
								</Section.Icon>
							</div>
						</Section.Root>

						<TextInput.Root>
							<TextInput.Icon>
								<Checkbox />
							</TextInput.Icon>
							<div className="flex w-full border-b-2 border-dark-actions py-2 bg-dark-background">
								<TextInput.Input value="{subtask.name}" theme="" />
								<TextInput.Icon>
									<FiMoreVertical className="gap-2" />
								</TextInput.Icon>
							</div>
						</TextInput.Root>
						<TextInput.Root>
							<FiCircle className="w-7 h-7 text-dark-div " />

							<div className="flex w-full border-b-2  border-dark-actions py-2 bg-dark-background">
								<TextInput.Input placeholder="próxima etapa" theme="" />
								<label htmlFor="addTask" className="flex items-center gap-2">
									<Text size="xs" className="text-dark-text ">
										Ok
									</Text>
									<Checkbox id="addTask" />
								</label>
							</div>
						</TextInput.Root>
					</div>

					<Button
						type="submit" title="submit"
						className="text-sm items-center flex flex-row gap-2 max-w-[30%] mb-2"
					>
						<FiPlus />
						<span className="flex flex-row">Próxima Etapa</span>
					</Button>

					<Button
						type="button"
						className="text-md items-center flex gap-2 max-w-[30%] mb-2"
					>
						<FiPlus />
						Nova Lista
					</Button>

					<footer className="flex flex-row justify-around max-w-full items-center ">
						<Button
							type="button"
							className="text-xs items-center flex flex-col gap-1 w-auto border-none text-dark-actions hover:bg-dark-div"
						>
							<FiPlusSquare />
							<span className="flex flex-row">Sessão</span>
						</Button>

						<Button
							type="button"
							className="text-xs items-center flex flex-col gap-1 w-auto border-none text-pink-light hover:bg-dark-div"
						>
							<FiPlus className="" />
							Subtarefa
						</Button>

						<Button
							type="button"
							className="text-xs items-center flex flex-col gap-1 w-auto border-none text-dark-actions hover:bg-dark-div"
						>
							<FiTrash2 />
							Excluir
						</Button>
					</footer>

					<div>
						{/* usando a tag âncora como texto */}
						<Text asChild size="xs">
							<a
								href=""
								className="text-dark-text underline hover:text-cian-light"
							>
								Ajuda
							</a>
						</Text>
					</div>
				</form>
			</div>
		</>
	);
}
