/**
 * @fileoverview `contributions.md` generator for LuMir's contribution list!
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { sortContributions, typeToTitle } from '../core/helpers/index.js';
import {
  URL_GITHUB_LUMIR,
  URL_GITHUB_ORGANIZATION,
  URL_GITHUB_REPOSITORY,
  URL_GITHUB_PULL_REQUEST,
  URL_GITHUB_ISSUE,
  COMMENT_DO_NOT_EDIT,
} from '../core/constants.js';
import organizations from '../data/contributions.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../core/types.js').Organization} Organization
 * @typedef {import('../core/types.js').PullRequest} PullRequest
 * @typedef {import('../core/types.js').Issue} Issue
 */

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

/**
 * Count total merged pull requests across all organizations.
 * @param {Organization[]} orgs
 * @returns {number}
 */
function countTotalMergedPRs(orgs) {
  let count = 0;

  for (const org of orgs) {
    for (const repo of org.repositories) {
      for (const pr of repo.pullRequests) {
        if (pr.merged) count++;
      }
    }
  }

  return count;
}

/**
 * Count total contributed repositories across all organizations.
 * @param {Organization[]} orgs
 * @returns
 */
function countTotalContributedRepos(orgs) {
  let count = 0;

  for (const org of orgs) {
    count += org.repositories.length;
  }

  return count;
}

/**
 * Count total contributed organizations.
 * @param {Organization[]} orgs
 * @returns {number}
 */
function countTotalContributedOrgs(orgs) {
  return orgs.length;
}

// --------------------------------------------------------------------------------
// Scripts
// --------------------------------------------------------------------------------

export default function generateContributions() {
  const outputFilePath = resolve(process.cwd(), 'docs', 'contributions.md');
  let markdown = `${COMMENT_DO_NOT_EDIT}

# Open Source Contribution Journey

Every contribution I have made to open source projects is listed here.

Copyright © 2024-${new Date().getFullYear()} [루밀LuMir(lumirlumir)](${URL_GITHUB_LUMIR}). All rights reserved.

## Overview

| Total Merged PRs                      | Total Contributed Repositories               | Total Contributed Organizations             |
| :-----------------------------------: | :------------------------------------------: | :-----------------------------------------: |
| ${countTotalMergedPRs(organizations)} | ${countTotalContributedRepos(organizations)} | ${countTotalContributedOrgs(organizations)} |

## How to Read This Document

| Emoji          | Description                |
| -------------- | -------------------------- |
| :purple_heart: | Successfully merged        |
| :green_heart:  | Still open but meaningful  |

# Details
`;

  organizations.forEach(organization => {
    markdown += `\n## [\`${organization.name}\`](${URL_GITHUB_ORGANIZATION(organization.name)})\n`;

    organization.repositories.forEach(repository => {
      markdown += `\n### [\`${repository.name}\`](${URL_GITHUB_REPOSITORY(organization.name, repository.name)}) ![GitHub Repo Stars](https://img.shields.io/github/stars/${organization.name}/${repository.name})\n`;

      sortContributions(repository.pullRequests).forEach(
        (
          /** @type {PullRequest} */ { number, type, title, merged },
          idx,
          /** @type {PullRequest[]} */ pullRequests,
        ) => {
          if (idx === 0 || pullRequests[idx - 1].type !== type) {
            markdown += `\n#### ${typeToTitle(type)}\n\n`;
          }

          markdown += `1. ${title} [#${number}](${URL_GITHUB_PULL_REQUEST(organization.name, repository.name, number)}) ${merged ? ':purple_heart:' : ':green_heart:'}\n`;
        },
      );

      repository?.issues?.forEach((/** @type {Issue} */ { number, title }, idx) => {
        if (idx === 0) markdown += `\n#### :speech_balloon: Issues\n\n`;

        markdown += `1. ${title} [#${number}](${URL_GITHUB_ISSUE(organization.name, repository.name, number)})\n`;
      });
    });
  });

  writeFileSync(outputFilePath, markdown);
}
