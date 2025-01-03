import process from 'node:process';
import type { NextConfig } from 'next';
import nextMDX from '@next/mdx';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import type { Options as PrettyCodeOptions } from 'rehype-pretty-code';
import moonlightTheme from './assets/moonlight-ii.json' with { type: 'json' };

// Set telemetry env var
Object.assign(process.env, { NEXT_TELEMETRY_DISABLED: '1' });

// Define plugin type
type Plugin = (config: NextConfig) => NextConfig;

// Initialize plugins array
const plugins: Plugin[] = [];

// Base Next.js configuration
const nextConfig: NextConfig = {
  output: 'export',
  cleanDistDir: true,
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  env: {
    NEXT_TELEMETRY_DISABLED: '1',
  },
};

// Rehype Pretty Code options
const prettyCodeOptions: PrettyCodeOptions = {
  keepBackground: false,
  theme: moonlightTheme,
};

// Add MDX plugin
plugins.push(
  nextMDX({
    extension: /\.(md|mdx)$/,
    options: {
      remarkPlugins: [],
      rehypePlugins: [[rehypePrettyCode, prettyCodeOptions], rehypeSlug],
    },
  }) as Plugin // Type assertion needed because nextMDX types are not perfectly aligned
);

// Export the config with all plugins applied
export default () => plugins.reduce((config, plugin) => plugin(config), nextConfig);