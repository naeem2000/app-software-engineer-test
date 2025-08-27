import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Nav from './Nav';
import { MemoryRouter } from 'react-router-dom';

const meta = {
	component: Nav,
	decorators: [
		(Story) => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		),
	],
} satisfies Meta<typeof Nav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
