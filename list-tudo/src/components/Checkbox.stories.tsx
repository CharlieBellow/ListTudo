import { Checkbox, CheckboxProps } from './Checkbox';
import { Meta, StoryObj } from '@storybook/react'


//import { FiCircle, FiMoreVertical, FiCheck, FiStar } from "react-icons/fi";


export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  // sem esse decorators é um checkbox normal
  //decorators: [
  //  (Story) => {
  //    return (
  //      <div className="flex items-start gap-3 w-full">
  //        {Story()}
  //        <div className="border-b-2 border-dark-actions w-full flex align-start items-between pb-4">
  //          <div className="w-full" >
  //            <Text size="md">subtarefa.name </Text>
  //          </div>
  //          <FiMoreVertical size={24} className="gap-2 text-dark-actions"/>
  //        </div>
  //      </div>
  //    )
  //  }
  //],
} as Meta<CheckboxProps>


export const Default: StoryObj<CheckboxProps> = {}

//como criar uma variação com decorators?

//export const Task: StoryObj<CheckboxProps> = {
//  decorators: [
//    (Story) => {
//      return (
//        <div className="flex items-start gap-3 w-full">
//          {Story()}
//          <div className="border-b-2 border-dark-actions w-full flex align-start items-between pb-4">
//            <div className="w-full" >
//              <Text size="md">subtarefa.name </Text>
//            </div>
//            <FiStar size={24} className="gap-2"/>
//          </div>
//        </div>
//      )
//    }
//  ],
//}

