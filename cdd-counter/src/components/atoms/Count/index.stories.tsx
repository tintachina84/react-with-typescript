import type { Meta, StoryObj } from '@storybook/react';

import { Count } from './';

const meta = {
  title: 'Atoms/Count',
  component: Count,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Count>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 0,
  }
};
