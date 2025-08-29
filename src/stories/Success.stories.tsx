import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Success from './Success';

const meta = {
	component: Success,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Success>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
