import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import * as intlServer from 'next-intl/server';

import Home from '@/app/[locale]/page';
import * as messages from '@/shared/messages/en.json';

const mockedReqLocale = jest.spyOn(intlServer, 'unstable_setRequestLocale');

describe('Главная страница', () => {
  test('Корректный рендер', async () => {
    mockedReqLocale.mockReturnValue();
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <Home params={{ locale: 'en' }} />
      </NextIntlClientProvider>
    );

    const button = screen.getByText(messages.MainPage.title);
    expect(button).toBeInTheDocument();
  });
});
