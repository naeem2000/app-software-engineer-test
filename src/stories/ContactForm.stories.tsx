import type { Meta, StoryObj } from '@storybook/react-webpack5';

import ContactForm from './ContactForm';

const meta = {
	component: ContactForm,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ContactForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
