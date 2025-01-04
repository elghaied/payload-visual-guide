import process from 'node:process';
import type { NextConfig } from 'next';
Object.assign(process.env, { NEXT_TELEMETRY_DISABLED: '1' });

/**
 * @typedef {import('next').NextConfig} NextConfig
 * @typedef {Array<((config: NextConfig) => NextConfig)>} NextConfigPlugins
 */
import nextMDX from '@next/mdx';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import moonlightTheme from './assets/moonlight-ii.json' with { type: 'json' };

 
const plugins: ((config: NextConfig) => NextConfig)[] = [];

 
const nextConfig : NextConfig = {
  output: 'export',
  cleanDistDir: true,
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  env: {
    NEXT_TELEMETRY_DISABLED: '1',
  },
};

/** @type {import('rehype-pretty-code').Options} */
const options = {
  keepBackground: false,
  theme: moonlightTheme,
};

plugins.push(
  nextMDX({
    extension: /\.(md|mdx)$/,
    options: {
      remarkPlugins: [],
      rehypePlugins: [[rehypePrettyCode, options], rehypeSlug],
    },
  }),
);

export default () => plugins.reduce((_, plugin) => plugin(_), nextConfig);