import React from 'react';
import type { Preview } from '@storybook/react';
import '@/shared/lib/styles/global.css';
import { NextIntlClientProvider } from 'next-intl';
import { createMock, getMock } from 'storybook-addon-module-mock';
import * as messages from '../src/shared/messages/en.json';
import * as intlServer from 'next-intl/server';

const preview: Preview = {
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="en" messages={messages}>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#16171d',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    moduleMock: {
      mock: () => {
        const mock = createMock(intlServer, 'unstable_setRequestLocale');
        mock.mockReturnValue();
        return [mock];
      },
    },
  },
};

export default preview;
