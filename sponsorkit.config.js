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
  outputDir: './images',
  cacheFile: '../node_modules/.sponsorkit/.cache.json',
  force: true,
  formats: ['svg'],
  includePrivate: true,
  includePastSponsors: true,
  tiers: [
    {
      title: 'PAST SPONSORS',
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
    {
      title: 'ACTIVE SPONSORS',
      preset: tierPresets.base,
    },
  ],
  svgInlineCSS: `
text {
  font-weight: 700;
  font-size: 14px;
  fill: #ffffff;
  font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace;
}
.sponsorkit-tier-title {
  font-weight: 700;
  font-size: 20px;
  fill: #d6bbf2;
}
@media (prefers-color-scheme: light) {
  text {
    fill: #3d3347;
  }
  .sponsorkit-tier-title {
    fill: #7f4eac;
  }
}
`,
});
