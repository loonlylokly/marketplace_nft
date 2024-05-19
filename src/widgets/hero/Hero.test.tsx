import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import * as intlServer from 'next-intl/server';

import * as messages from '@/shared/messages/en.json';

import { Hero } from './Hero';

const mockedReqLocale = jest.spyOn(intlServer, 'unstable_setRequestLocale');

describe('Главная страница', () => {
  test('Корректный рендер', async () => {
    mockedReqLocale.mockReturnValue();
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <Hero />
      </NextIntlClientProvider>
    );

    const signIn = screen.getByText(messages.signIn);
    expect(signIn).toBeInTheDocument();
  });
});
