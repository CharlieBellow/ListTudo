import "./styles/global.css";

import { Checkbox } from "./components/Checkbox";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import { FiCircle, FiMoreVertical, FiCheck, FiStar } from "react-icons/fi";

export function App() {
	return (
		<>
			<div className="w-screen h-screen items-center justify-center bg-dark-background text-dark-text">
				<Checkbox />
				<header className="flex flex-col items-center">
					<Heading weight="bld" theme="dark" className="mt-4">
						Nome da lista
					</Heading>
					<Text size="md" className="mt-1">
						exemplo de texto
					</Text>
				</header>

				<form className="flex flex-col">
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

					<div className="flex flex-col">
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
							<TextInput.Icon>
								<Checkbox />
							</TextInput.Icon>
							<div className="flex w-full border-b-2  border-dark-actions py-2 bg-dark-background">
								<TextInput.Input placeholder="próxima etapa" theme="" />
								<TextInput.Icon>
									<FiMoreVertical className="gap-2" />
								</TextInput.Icon>
							</div>
						</TextInput.Root>
					</div>
				</form>
			</div>
		</>
	);
}
