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
          {
            number: 4107,
            type: 'docs',
            title: 'docs: fix broken links and add some links in `distribute-tasks.md`',
            merged: true,
          },
          {
            number: 4115,
            type: 'docs',
            title: 'docs: fix simple typos in `import/README.md`',
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

  {
    name: 'actions',
    repositories: [
      {
        name: 'runner-images',
        pullRequests: [
          {
            number: 10689,
            type: 'docs',
            title: 'docs(typo): fix typo in README.md',
            merged: true,
          },
        ],
      },
    ],
  },

  {
    name: 'nodejs',
    repositories: [
      {
        name: 'nodejs.org',
        pullRequests: [
          {
            number: 7539,
            type: 'docs',
            title: 'docs: add missing backticks to `introduction-to-nodejs.md`',
            merged: true,
          },
        ],
      },
    ],
  },

  {
    name: 'material-extensions',
    repositories: [
      {
        name: 'vscode-material-icon-theme',
        pullRequests: [
          {
            number: 2565,
            type: 'feat',
            title: 'feat: ✨ .markdownlintignore file icon',
            highlight: true,
            merged: true,
          },
          {
            number: 2580,
            type: 'feat',
            title: 'feat: ✨ .clang-format-ignore file icon',
            highlight: true,
            merged: true,
          },
          {
            number: 2665,
            type: 'feat',
            title: 'feat: ✨ `.editorconfig-checker.json` and `.ecrc` file icon',
            highlight: true,
            merged: true,
          },
          {
            number: 2825,
            type: 'feat',
            title: 'feat: add `websites` folder icon',
            merged: true,
          },
          {
            number: 2566,
            type: 'docs',
            title: 'docs: 📝 fix broken links in pull_request_template',
            merged: true,
          },
        ],
      },
    ],
  },

  {
    name: 'editorconfig-checker',
    repositories: [
      {
        name: 'editorconfig-checker.javascript',
        pullRequests: [
          {
            number: 417,
            type: 'fix',
            title: 'fix: add support for `.zip` files in binary download',
            highlight: true,
            merged: true,
          },
        ],
      },
    ],
  },
];
