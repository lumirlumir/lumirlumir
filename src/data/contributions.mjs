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
    name: 'eslint',
    repositories: [
      {
        name: 'eslint',
        pullRequests: [
          {
            number: 19175,
            type: 'docs',
            title: 'docs: delete unnecessary horizontal rule(`---`) in `nodejs-api`',
            merged: true,
          },
          {
            number: 19176,
            type: 'docs',
            title: 'docs: delete unnecessary horizontal rule(`---`) (v8.x) (follow up)',
            merged: true,
          },
          {
            number: 19179,
            type: 'docs',
            title: 'docs: fix a typo in `debug.md`',
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
    name: 'algolia',
    repositories: [
      {
        name: 'docsearch',
        pullRequests: [
          {
            number: 2359,
            type: 'style',
            title: 'refactor: improve readability of `_variables.css`',
            merged: true,
          },
          {
            number: 2372,
            type: 'chore',
            title: 'chore: add `repository.directory` property to `package.json`',
            merged: true,
          },
          {
            number: 2377,
            type: 'chore',
            title:
              'chore: add `--host` option to `playground:start` script in `package.json`',
            merged: true,
          },
        ],
      },
    ],
  },

  {
    name: 'textlint',
    repositories: [
      {
        name: 'textlint',
        pullRequests: [
          {
            number: 1459,
            type: 'feat',
            title:
              'feat(@textlint/ast-node-types): add missing `LinkReference`, `ImageReference` and `Definition` node types',
            highlight: true,
            merged: true,
          },
          {
            number: 1425,
            type: 'docs',
            title: 'docs(image): make the border of get-started-steps images transparent',
            merged: true,
            release: 'v14.2.1',
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
    name: 'pronist',
    repositories: [
      {
        name: 'hello',
        pullRequests: [
          {
            number: 229,
            type: 'fix',
            title: 'fix: `.github/workflows/tidory.yml` CI environment',
            highlight: true,
            merged: true,
          },
        ],
      },
      {
        name: 'tidory',
        pullRequests: [
          {
            number: 15,
            type: 'fix',
            title: 'fix: `.github/workflows/tidory.yml` CI environment',
            highlight: true,
            merged: true,
          },
        ],
      },
    ],
  },

  {
    name: 'mdn',
    repositories: [
      {
        name: 'translated-content',
        pullRequests: [
          {
            number: 26049,
            type: 'docs',
            title: 'docs: fix typos in `websockets_api/index.md`',
            merged: true,
          },
          {
            number: 26048,
            type: 'docs',
            title: 'docs: fix typos in `http/session/index.md`',
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

  {
    name: 'sindresorhus',
    repositories: [
      {
        name: 'yocto-spinner',
        pullRequests: [
          {
            number: 3,
            type: 'fix',
            title:
              'fix: update `clear()` method to return `this` to support method chaining',
            highlight: true,
            merged: true,
          },
          {
            number: 5,
            type: 'fix',
            title: 'fix: ensure default value is correctly applied in setter',
            highlight: true,
            merged: true,
          },
        ],
      },
    ],
  },

  {
    name: 'yuyinws',
    repositories: [
      {
        name: 'vitepress-plugin-group-icons',
        pullRequests: [
          {
            number: 14,
            type: 'feat',
            title: 'feat: add `.mts` and `.cts` extensions to `builtin.ts`',
            highlight: true,
            merged: true,
          },
        ],
      },
    ],
  },

  {
    name: 'xvzc',
    repositories: [
      {
        name: 'boj-cli',
        pullRequests: [
          {
            number: 32,
            type: 'docs',
            title: 'docs: correct typos in `README.md` and `config_example.yaml`',
            merged: true,
          },
        ],
      },
    ],
  },
];
