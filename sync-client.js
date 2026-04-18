/**
 * @fileoverview Script to sync local config files into the repository root.
 */

// @ts-check

import { cpSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const entries = [
  ['configs/.github/dependabot.yml', '.github/dependabot.yml'],
  ['configs/.husky/pre-commit', '.husky/pre-commit'],
  ['configs/.vscode/settings.json', '.vscode/settings.json'],
  ['configs/.editorconfig', '.editorconfig'],
  ['configs/.markdownlint.json', '.markdownlint.json'],
  ['configs/.markdownlintignore', '.markdownlintignore'],
  ['configs/.nvmrc', '.nvmrc'],
  ['configs/.prettierignore', '.prettierignore'],
  ['configs/VScode.code-workspace', 'VScode.code-workspace'],
  ['configs/eslint.config.mjs', 'eslint.config.mjs'],
  ['configs/lint-staged.config.mjs', 'lint-staged.config.mjs'],
  ['configs/prettier.config.mjs', 'prettier.config.mjs'],
];

for (const [source, destination] of entries) {
  const destinationPath = resolve(process.cwd(), destination);

  mkdirSync(dirname(destinationPath), { recursive: true });
  cpSync(resolve(process.cwd(), source), destinationPath, {
    force: true,
    recursive: true,
  });
}
