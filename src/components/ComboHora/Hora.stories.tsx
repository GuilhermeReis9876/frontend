import { Story, Meta } from '@storybook/react/types-6-0';
import Hora from './Hora';

export default {
  title: 'ComboHora',
  component: Hora,
} as Meta;

const Template: Story = () => <Hora />;

export const Padrao = Template.bind({});
