/**
 * @fileoverview Define common types.
 */

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * Type of Pull Request, Issue, etc.
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

// --------------------------------------------------------------------------------

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
   * Hightlight the contribution.
   */
  highlight?: boolean;
}

// --------------------------------------------------------------------------------

export interface Organization {
  /**
   * Name of Organization.
   */
  name: string;
  repositories: Repository[];
}

export interface Repository {
  /**
   * Name of Repository.
   */
  name: string;
  pullRequests: PullRequest[];
  // issues?: Issue[];
  // discussions?: Discussion[];
  // pullRequestComments?: PullRequestComment[];
  // issueComments?: IssueComment[];
  // discussionComments?: DiscussionComment[];
}

export interface PullRequest extends Contribution {
  merged: boolean;
}

// export interface Issue extends Contribution {}

// export interface Discussion extends Contribution {}

// export interface PullRequestComment extends Contribution {}

// export interface IssueComment extends Contribution {}

// export interface DiscussionComment extends Contribution {}
