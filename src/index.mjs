/**
 * @fileoverview `contributions.md` generator for LuMir's contribution list!
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { sortContributions, typeToTitle } from './core/helpers/index.mjs';
import {
  URL_GITHUB_LUMIR,
  URL_GITHUB_ORGANIZATION,
  URL_GITHUB_REPOSITORY,
  URL_GITHUB_PULL_REQUEST,
  COMMENT_DO_NOT_EDIT,
} from './core/constants.mjs';
import organizations from './data/contributions.mjs';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('./core/types.d.ts').PullRequest} PullRequest
 */

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

const outputFilePath = resolve(process.cwd(), 'docs', 'contributions.md');

// --------------------------------------------------------------------------------
// Scripts
// --------------------------------------------------------------------------------

let markdown = `${COMMENT_DO_NOT_EDIT}

# Open Source Contribution Journey

Every contribution I have made to open source projects is listed here.

Copyright © 2024-${new Date().getFullYear()} [루밀LuMir(lumirlumir)](${URL_GITHUB_LUMIR}). All rights reserved.

`;

organizations.forEach(organization => {
  markdown += `## [\`${organization.name}\`](${URL_GITHUB_ORGANIZATION(organization.name)})\n\n`;

  organization.repositories.forEach(repository => {
    markdown += `### [\`${repository.name}\`](${URL_GITHUB_REPOSITORY(organization.name, repository.name)})\n\n`;

    sortContributions(repository.pullRequests).forEach(
      (
        /** @type {PullRequest} */ { number, type, title, merged },
        idx,
        /** @type {PullRequest[]} */ pullRequests,
      ) => {
        if (idx === 0 || pullRequests[idx - 1].type !== type) {
          markdown += `#### ${typeToTitle(type)}\n\n`;
        }

        markdown += `1. ${merged ? ':purple_heart:' : ''} ${title} [#${number}](${URL_GITHUB_PULL_REQUEST(organization.name, repository.name, number)})\n\n`;
      },
    );
  });
});

writeFileSync(outputFilePath, markdown);
