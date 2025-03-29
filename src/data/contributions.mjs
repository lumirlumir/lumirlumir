/**
 * @fileoverview LuMir's contribution list!
 */

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../core/types.d.ts').Organization} Organization
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {Organization[]} */
export default [
  {
    name: 'vercel',
    repositories: [
      {
        name: 'next.js',
        pullRequests: [
          {
            number: 69220,
            type: 'fix',
            title:
              'fix: ensure absolute paths are handled correctly with `--file` option in `next lint` command for `lint-staged` compatibility',
            highlight: true,
            merged: true,
          },
        ],
      },
    ],
  },

  {
    name: 'lerna',
    repositories: [
      {
        name: 'lerna',
        pullRequests: [
          {
            number: 4105,
            type: 'docs',
            title: 'docs: fixed some typos',
            merged: true,
          },
        ],
      },
    ],
  },

  {
    name: 'llvm',
    repositories: [
      {
        name: 'llvm-project',
        pullRequests: [
          {
            number: 117730,
            type: 'fix',
            title:
              '[clang-format] fix: add missing `default_extensions` values to `git-clang-format`',
            highlight: true,
            merged: true,
          },
        ],
      },
    ],
  },
];
