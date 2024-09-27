import type { Meta, StoryObj } from '@storybook/react';

import { Home } from './';

const meta = {
  title: 'Page/Home',
  component: Home,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
