/**
 * @fileoverview Constants.
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {string} */
export const URL_GITHUB = 'https://github.com';
/** @type {string} */
export const URL_GITHUB_LUMIR = `${URL_GITHUB}/lumirlumir`;
/** @param {string} organization */
export const URL_GITHUB_ORGANIZATION = organization => `${URL_GITHUB}/${organization}`;
/** @param {string} organization @param {string} repository */
export const URL_GITHUB_REPOSITORY = (organization, repository) =>
  `${URL_GITHUB_ORGANIZATION(organization)}/${repository}`;
/** @param {string} organization @param {string} repository @param {number} number */
export const URL_GITHUB_PULL_REQUEST = (organization, repository, number) =>
  `${URL_GITHUB_REPOSITORY(organization, repository)}/pull/${number}`;

/** @type {string} */
export const COMMENT_DO_NOT_EDIT =
  '<!-- This file is auto-generated. Please do not edit it directly. -->\n\n<!-- eslint-disable -->\n<!-- markdownlint-disable -->';
