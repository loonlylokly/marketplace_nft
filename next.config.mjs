// eslint-disable-next-line import/extensions
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    reactRemoveProperties: true,
    // removeConsole: {
    //   exclude: ['error'],
    // },
  },
};

export default withNextIntl(nextConfig);
