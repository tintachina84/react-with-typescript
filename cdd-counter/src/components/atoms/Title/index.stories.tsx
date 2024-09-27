import type { Meta, StoryObj } from '@storybook/react';

import { Title } from './';

const meta = {
  title: 'Atoms/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title'
  }
};