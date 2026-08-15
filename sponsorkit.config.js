/**
 * @fileoverview Sponsorkit configuration file.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { existsSync } from 'node:fs';
import { env, loadEnvFile } from 'node:process';
import { defineConfig, tierPresets } from 'sponsorkit';

// --------------------------------------------------------------------------------
// Env
// --------------------------------------------------------------------------------

if (existsSync('.env')) loadEnvFile();

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default defineConfig({
  github: {
    login: 'lumirlumir',
    ...(env.GH_PAT && { token: env.GH_PAT }),
  },
  outputDir: '.',
  cacheFile: './node_modules/.sponsorkit/.cache.json',
  force: true,
  formats: ['svg'],
  includePrivate: true,
  includePastSponsors: true,
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
    {
      title: 'Active Sponsors',
      preset: tierPresets.base,
    },
  ],
  svgInlineCSS: `
text {
  font-weight: 300;
  font-size: 14px;
  fill: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.sponsorkit-tier-title {
  font-weight: 500;
  font-size: 20px;
  fill: #d6bbf2;
}
`,
});
