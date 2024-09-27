import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './';
import {fn} from "@storybook/test";

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: { onClick: fn() },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button',
  }
};
