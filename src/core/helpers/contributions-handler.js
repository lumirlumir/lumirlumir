/**
 * @fileoverview Contributions data handler.
 */

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../../types').Organization} Organization
 * @typedef {import('../../types').Repository} Repository
 * @typedef {import('../../types').PullRequest} PullRequest
 */

// --------------------------------------------------------------------------------
// Class
// --------------------------------------------------------------------------------

/**
 * Contributions data handler.
 */
export default class ContributionsHandler {
  // ------------------------------------------------------------------------------
  // Private Properties
  // ------------------------------------------------------------------------------

  /** @type {readonly Organization[]} */
  #contributions;

  /** @param {readonly Organization[]} contributions */
  constructor(contributions = []) {
    this.#contributions = contributions;
  }

  // ------------------------------------------------------------------------------
  // Public Methods
  // ------------------------------------------------------------------------------

  /**
   * Get all repositories from all organizations.
   * @returns {Repository[]}
   */
  getAllRepositories() {
    return this.#contributions.flatMap(organization => organization.repositories);
  }

  /**
   * Get all pull requests from all organizations and repositories.
   * @return {PullRequest[]}
   */
  getAllPullRequests() {
    return this.getAllRepositories().flatMap(repository => repository.pullRequests);
  }

  /**
   * Get all pull requests that are merged from all organizations and repositories.
   * @return {PullRequest[]}
   */
  getAllMergedPullRequests() {
    return this.getAllPullRequests().filter(pullRequest => pullRequest.merged);
  }

  /**
   * Get all pull requests that are highlighted from all organizations and repositories.
   * @return {PullRequest[]}
   */
  getAllHighlightedPullRequests() {
    return this.getAllPullRequests().filter(pullRequest => pullRequest.highlight);
  }

  /**
   * Count all merged pull requests from all organizations and repositories.
   * @returns {number}
   */
  countAllMergedPullRequests() {
    return this.getAllMergedPullRequests().length;
  }

  /**
   * Count all highlighted pull requests from all organizations and repositories.
   * @returns {number}
   */
  countAllHighlightedPullRequests() {
    return this.getAllHighlightedPullRequests().length;
  }

  /**
   * Count all contributed repositories from all organizations.
   * @returns {number}
   */
  countAllContributedRepositories() {
    return this.getAllRepositories().filter(repository =>
      repository?.pullRequests?.some(pullRequest => pullRequest.merged),
    ).length;
  }

  /**
   * Count all contributed organizations.
   * @returns {number}
   */
  countAllContributedOrganizations() {
    return this.#contributions.filter(organization =>
      organization.repositories.some(repository =>
        repository?.pullRequests?.some(pullRequest => pullRequest.merged),
      ),
    ).length;
  }

  // ------------------------------------------------------------------------------
  // Getters and Setters
  // ------------------------------------------------------------------------------

  /** @return {readonly Organization[]} */
  get contributions() {
    return this.#contributions;
  }
}
