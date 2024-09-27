import type { Meta, StoryObj } from '@storybook/react';

import { CounterApp } from './';

const meta = {
  title: 'Template/CounterApp',
  component: CounterApp,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof CounterApp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
