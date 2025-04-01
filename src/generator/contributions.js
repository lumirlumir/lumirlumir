/**
 * @fileoverview `contributions.md` generator.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

import {
  ContributionsHandler,
  sortContributions,
  typeToTitle,
} from '../core/helpers/index.js';
import {
  URL_GITHUB_LUMIR,
  URL_GITHUB_ORGANIZATION,
  URL_GITHUB_REPOSITORY,
  URL_GITHUB_PULL_REQUEST,
  URL_GITHUB_PULL_REQUEST_COMMENT,
  URL_GITHUB_ISSUE,
  URL_GITHUB_ISSUE_COMMENT,
  URL_GITHUB_DISCUSSION_COMMENT,
  COMMENT_DO_NOT_EDIT,
} from '../core/constants.js';
import contributions from '../data/contributions.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../types').Organization} Organization
 * @typedef {import('../types').PullRequest} PullRequest
 * @typedef {import('../types').Issue} Issue
 * @typedef {import('../types').PullRequestComment} PullRequestComment
 * @typedef {import('../types').IssueComment} IssueComment
 * @typedef {import('../types').DiscussionComment} DiscussionComment
 */

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

const ch = new ContributionsHandler(contributions);

// --------------------------------------------------------------------------------
// Scripts
// --------------------------------------------------------------------------------

export default function generateContributions() {
  let markdown = `${COMMENT_DO_NOT_EDIT}

# Open Source Contribution Journey

Every contribution I have made to open source projects is listed here.

Copyright © 2024-${new Date().getFullYear()} [루밀LuMir(lumirlumir)](${URL_GITHUB_LUMIR}). All rights reserved.

## Overview

| Merged Pull Requests               | Contributed Repositories                | Contributed Organizations                |
| :--------------------------------: | :-------------------------------------: | :--------------------------------------: |
| ${ch.countAllMergedPullRequests()} | ${ch.countAllContributedRepositories()} | ${ch.countAllContributedOrganizations()} |

## How to Read This Document

| Emoji          | Description                |
| -------------- | -------------------------- |
| :purple_heart: | Successfully merged        |
| :green_heart:  | Still open but meaningful  |

# Details
`;

  contributions.forEach(organization => {
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

      repository?.pullRequestComments?.forEach(
        (/** @type {PullRequestComment} */ { number, title, fragment }, idx) => {
          if (idx === 0) markdown += `\n#### :newspaper: Pull Request Comments\n\n`;

          markdown += `1. ${title} [#${number}](${URL_GITHUB_PULL_REQUEST_COMMENT(organization.name, repository.name, number, fragment)})\n`;
        },
      );

      repository?.issueComments?.forEach(
        (/** @type {IssueComment} */ { number, title, fragment }, idx) => {
          if (idx === 0) markdown += `\n#### :newspaper: Issue Comments\n\n`;

          markdown += `1. ${title} [#${number}](${URL_GITHUB_ISSUE_COMMENT(organization.name, repository.name, number, fragment)})\n`;
        },
      );

      repository?.discussionComments?.forEach(
        (/** @type {DiscussionComment} */ { number, title, fragment }, idx) => {
          if (idx === 0) markdown += `\n#### :newspaper: Discussion Comments\n\n`;

          markdown += `1. ${title} [#${number}](${URL_GITHUB_DISCUSSION_COMMENT(organization.name, repository.name, number, fragment)})\n`;
        },
      );
    });
  });

  writeFileSync(resolve(process.cwd(), 'docs', 'contributions.md'), markdown);
}
