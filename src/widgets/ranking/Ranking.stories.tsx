import type { Meta, StoryObj } from '@storybook/react';

import { Ranking } from './Ranking';

const meta: Meta<typeof Ranking> = {
  component: Ranking,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Ranking>;

export const Default: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {},
};
