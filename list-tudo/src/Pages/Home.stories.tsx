import { Meta, StoryObj} from '@storybook/react'
import { Home } from "./Home";
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest';
import {rest} from 'msw'
//colocando propriedades padrão
export default {
	title: "Pages/Home",
	component: Home,
  args: {
    children: 'Enviar',
  },
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({
            message: "login realizado"
          }))
        } )
      ],
    }
  }
} as Meta;

//criando variações do texto
export const Default: StoryObj = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText("próxima etapa"), 'fazer bolo');

    userEvent.click(canvas.getByTitle('submit'))

    await waitFor(() => {
    return expect(canvas.getByText("Criou tarefa!")).toBeInTheDocument();

    })
  }
}
