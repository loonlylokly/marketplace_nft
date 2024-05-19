import type { Meta, StoryObj } from '@storybook/react';

import RocketLaunch from '@/../public/icons/RocketLaunch.svg';
import { ROUTES } from '@/shared/lib/constants/routes';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const All = () => (
  <>
    <div style={{ display: 'flex', gap: 16, padding: 32, flexWrap: 'wrap' }}>
      <Button>Primary</Button>
      <Button leftElement={<RocketLaunch />}>Primary</Button>
      <Button rightElement={<RocketLaunch />}>Primary</Button>
      <Button leftElement={<RocketLaunch />} rightElement={<RocketLaunch />}>
        Primary
      </Button>
      <Button rightElement={<RocketLaunch />} />
      <Button appearance="secondary">Secondary</Button>
      <Button appearance="secondary" leftElement={<RocketLaunch />}>
        Secondary
      </Button>
      <Button appearance="secondary" rightElement={<RocketLaunch />}>
        Secondary
      </Button>
      <Button
        appearance="secondary"
        leftElement={<RocketLaunch />}
        rightElement={<RocketLaunch />}
      >
        Secondary
      </Button>
      <Button appearance="secondary" leftElement={<RocketLaunch />} />
      <Button appearance="tertiary">Tertiary</Button>
      <Button appearance="tertiary" leftElement={<RocketLaunch />}>
        Tertiary
      </Button>
      <Button appearance="tertiary" rightElement={<RocketLaunch />}>
        Tertiary
      </Button>
      <Button
        appearance="tertiary"
        leftElement={<RocketLaunch />}
        rightElement={<RocketLaunch />}
      >
        Tertiary
      </Button>
      <Button appearance="tertiary" rightElement={<RocketLaunch />} />
    </div>
  </>
);

export const Primary: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/9HP8i8QMK34JEAIBqgabhQ/NFT-Marketplace-Template---Create-an-NFT-website-in-minutes-(Community)-(Copy)?type=design&node-id=1173-11063&mode=design&t=7vmY0OnoIclp09kd-4',
    },
  },
  args: {
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    appearance: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Button',
    appearance: 'tertiary',
  },
};

export const PrimaryIcon: Story = {
  args: {
    children: 'Button',
    leftElement: <RocketLaunch />,
  },
};

export const Link: Story = {
  args: {
    asChild: true,
    children: <a href={ROUTES.main}>Link</a>,
  },
};
