/**
 * @fileoverview Script to sync local config files into the repository root.
 */

// @ts-check

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { cp } from 'node:fs/promises';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const entries = /** @type {const} */ ([
  ['../configs/.github/dependabot.yml', '../.github/dependabot.yml'],
  ['../configs/.husky/pre-commit', '../.husky/pre-commit'],
  ['../configs/.vscode/settings.json', '../.vscode/settings.json'],
  ['../configs/.editorconfig', '../.editorconfig'],
  ['../configs/.editorconfig-checker.json', '../.editorconfig-checker.json'],
  ['../configs/.markdownlint.json', '../.markdownlint.json'],
  ['../configs/.markdownlintignore', '../.markdownlintignore'],
  ['../configs/.nvmrc', '../.nvmrc'],
  ['../configs/.prettierignore', '../.prettierignore'],
  ['../configs/VScode.code-workspace', '../VScode.code-workspace'],
  ['../configs/eslint.config.js', '../eslint.config.js'],
  ['../configs/lint-staged.config.js', '../lint-staged.config.js'],
  ['../configs/prettier.config.js', '../prettier.config.js'],
]);

// --------------------------------------------------------------------------------
// Copy files
// --------------------------------------------------------------------------------

Promise.all(
  entries.map(([source, destination]) =>
    cp(new URL(source, import.meta.url), new URL(destination, import.meta.url), {
      force: true,
      recursive: true,
    }),
  ),
).catch(error => {
  console.error(error); // eslint-disable-line no-console
  process.exit(1);
});
