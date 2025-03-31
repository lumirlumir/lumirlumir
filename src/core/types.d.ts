/**
 * @fileoverview Define common types.
 */

/* eslint-disable @typescript-eslint/no-empty-object-type -- Required for type definitions. */

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * Type of the Pull Request, Issue, etc.
 */
export type Type =
  | 'feat'
  | 'fix'
  | 'build'
  | 'chore'
  | 'ci'
  | 'docs'
  | 'perf'
  | 'refactor'
  | 'revert'
  | 'style'
  | 'test';

/**
 * Represents a GitHub organization.
 */
export interface Organization {
  /**
   * Name of the organization.
   */
  name: string;

  /**
   * Represents GitHub repositories.
   */
  repositories: Repository[];
}

/**
 * Represents a GitHub repository.
 */
export interface Repository {
  /**
   * Name of the repository.
   */
  name: string;

  /**
   * Role of the user in the repository.
   */
  role?: 'contributor' | 'maintainer';

  /**
   * Represents GitHub Pull Requests.
   */
  pullRequests?: PullRequest[];

  /**
   * Represents GitHub Issues.
   */
  issues?: Issue[];

  /**
   * Represents GitHub Discussions.
   */
  discussions?: Discussion[];

  /**
   * Represents GitHub Pull Request comments.
   */
  pullRequestComments?: PullRequestComment[];

  /**
   * Represents GitHub Issue comments.
   */
  issueComments?: IssueComment[];

  /**
   * Represents GitHub Discussion comments.
   */
  discussionComments?: DiscussionComment[];
}

/**
 * Common interface for Pull Request, Issue, etc.
 */
export interface Contribution {
  /**
   * Number of the Pull Request, Issue, etc.
   */
  number: number;

  /**
   * Type of the Pull Request, Issue, etc.
   */
  type: Type;

  /**
   * Title of the Pull Request, Issue, etc.
   */
  title: string;

  /**
   * Additional description about the Pull Request, Issue, etc.
   */
  description?: string;

  /**
   * Highlight the contribution.
   */
  highlight?: boolean;
}

/**
 * Common interface for comment.
 */
export interface Comment {
  /**
   * Hash fragment of the comment without the leading `#`.
   * For example, `issuecomment-123456789` for issue comments.
   */
  fragment: string;
}

/**
 * Represents a GitHub Pull Request.
 */
export interface PullRequest extends Contribution {
  /**
   * Indicates whether the PR has been merged.
   */
  merged: boolean;

  /**
   * Commit SHA associated with the PR.
   */
  sha?: string;

  /**
   * Release tag version associated with the PR.
   * Often starts with `v` and is followed by a version number.
   */
  releases?: string[];
}

/**
 * Represents a GitHub Issue.
 */
export interface Issue extends Contribution {}

/**
 * Represents a GitHub Discussion.
 */
export interface Discussion extends Contribution {}

/**
 * Represents a GitHub Pull Request comment.
 */
export interface PullRequestComment extends Contribution, Comment {}

/**
 * Represents a GitHub Issue comment.
 */
export interface IssueComment extends Contribution, Comment {}

/**
 * Represents a GitHub Discussion comment.
 */
export interface DiscussionComment extends Contribution, Comment {}
