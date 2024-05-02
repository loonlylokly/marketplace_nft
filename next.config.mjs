// eslint-disable-next-line import/extensions
import nextJest from 'next/jest.js';
import createNextIntlPlugin from 'next-intl/plugin';

const createJestConfig = nextJest({ dir: './' });

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    reactRemoveProperties: true,
    setupFilesAfterEnv: ['<rootDir>/jest.config.ts'],
    removeConsole: {
      exclude: ['error'],
    },
  },
};

export default withNextIntl(createJestConfig(nextConfig));
