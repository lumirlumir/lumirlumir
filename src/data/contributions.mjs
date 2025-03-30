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
        role: 'contributor',
        pullRequests: [
          {
            number: 69220,
            type: 'fix',
            title:
              'fix: ensure absolute paths are handled correctly with `--file` option in `next lint` command for `lint-staged` compatibility',
            description: 'CORE CHANGES',
            highlight: true,
            merged: true,
            sha: 'afcad43ba81249cc78a22b07e3191f2b63c3f0de',
            releases: ['v15.0.0-canary.141', 'v15.0.0'],
          },
          {
            number: 71033,
            type: 'fix',
            title:
              'fix: `getStaticProps` appears instead of `generateStaticParams` during app router build',
            description: 'CORE CHANGES',
            highlight: true,
            merged: true,
            sha: 'efee005ef410b906575701b14b64331e3a09b005',
            releases: ['v15.0.0-canary.187', 'v15.0.0'],
          },
          {
            number: 71134,
            type: 'fix',
            title:
              'fix: `next info` command does not output the versions of `npm` `yarn` and `pnpm` correctly',
            description: 'CORE CHANGES',
            highlight: true,
            merged: true,
            releases: ['v15.0.3-canary.6'],
          },
          {
            number: 71190,
            type: 'chore',
            title: 'fix: Next.js missed a file when renaming `swrDelta` to `expireTime`',
            highlight: true,
            merged: true,
            releases: ['v15.0.0-canary.187'],
          },
          {
            number: 73165,
            type: 'chore',
            title: 'chore: remove non-existent hash fragments from URLs',
            merged: true,
          },
          {
            number: 71074,
            type: 'docs',
            title:
              'docs(javascript): fix wrong javascript code in `11-parallel-routes.mdx`',
            merged: true,
            sha: '5bd42716c69503e7361eba43151e85124a960056',
            releases: ['v15.0.0-canary.183'],
          },
          {
            number: 71143,
            type: 'docs',
            title: 'docs(javascript): fix wrong javascript code and a typo in `link.mdx`',
            merged: true,
            sha: '7852586ee69e400125a68b2009811f3d0c722d21',
            releases: ['v15.0.0-canary.187'],
          },
          {
            number: 71180,
            type: 'docs',
            title:
              'docs(terminal): fix wrong terminal command and add missing hash symbols',
            merged: true,
            sha: 'a89d0662d941da07b2ab038e56c046405eeba1b6',
            releases: ['v15.0.0-canary.187'],
          },
          {
            number: 73163,
            type: 'docs',
            title: 'docs: add missing punctuation in `developing-using-local-app.md`',
            merged: true,
          },
          {
            number: 72182,
            type: 'docs',
            title: 'docs(typo): fix typos in `03-playwright.mdx`',
            merged: true,
          },
          {
            number: 72218,
            type: 'docs',
            title: 'docs(typo): fix typos in `04-cypress.mdx`',
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
        role: 'contributor',
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
        role: 'contributor',
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
        role: 'contributor',
        pullRequests: [
          {
            number: 19165,
            type: 'chore',
            title: 'chore: add `repository.directory` property to `package.json`',
            merged: true,
          },
          {
            number: 19218,
            type: 'chore',
            title: 'chore: fix incorrect `name` property in `integration-tutorial-code`',
            merged: true,
          },
          {
            number: 19226,
            type: 'chore',
            title: 'chore: add missing backticks to `flags.js`',
            merged: true,
          },
          {
            number: 19270,
            type: 'chore',
            title: 'chore: add `border-radius` to `hX:target` selector styles',
            highlight: true,
            merged: true,
          },
          {
            number: 19314,
            type: 'chore',
            title:
              'chore: extract package `name` from `package.json` for public interface',
            highlight: true,
            merged: true,
          },
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
          {
            number: 19180,
            type: 'docs',
            title: 'docs: fix typos in `migration-guide.md`',
            merged: true,
          },
          {
            number: 19186,
            type: 'docs',
            title: 'docs: add backtick in `-0` in `description` of `no-compare-neg-zero`',
            merged: true,
          },
          {
            number: 19188,
            type: 'docs',
            title: 'docs: add missing backtick to `no-async-promise-executor.md`',
            merged: true,
          },
          {
            number: 19189,
            type: 'docs',
            title: 'docs: switch the order of words in `no-unreachable.md`',
            merged: true,
          },
          {
            number: 19190,
            type: 'docs',
            title: 'docs: fix typos in `use-isnan.md`',
            merged: true,
          },
          {
            number: 19199,
            type: 'docs',
            title:
              'docs: replace quote with backtick in `description` of `for-direction`',
            merged: true,
          },
          {
            number: 19161,
            type: 'docs',
            title: 'docs: add missing punctuation in document',
            merged: true,
          },
          {
            number: 19202,
            type: 'docs',
            title: 'docs: add missing backtick to `default-case-last`',
            merged: true,
          },
          {
            number: 19203,
            type: 'docs',
            title: 'docs: update comments and `description` of `no-script-url`',
            merged: true,
          },
          {
            number: 19205,
            type: 'docs',
            title: 'docs: update docs and `description` of `require-unicode-regexp`',
            merged: true,
          },
          {
            number: 19206,
            type: 'docs',
            title: 'docs: add missing backticks to `prefer-object-spread`',
            merged: true,
          },
          {
            number: 19207,
            type: 'docs',
            title: 'docs: add missing backticks to `eqeqeq.md`',
            merged: true,
          },
          {
            number: 19213,
            type: 'docs',
            title: 'docs: add missing `)` to `id-denylist.md`',
            merged: true,
          },
          {
            number: 19214,
            type: 'docs',
            title: 'docs: add missing backticks to `complexity.md`',
            merged: true,
          },
          {
            number: 19217,
            type: 'docs',
            title: 'docs: add missing backticks to `id-length.md`',
            merged: true,
          },
          {
            number: 19219,
            type: 'docs',
            title: 'docs: add missing backticks to `no-new-func.md`',
            merged: true,
          },
          {
            number: 19222,
            type: 'docs',
            title: 'docs: add missing backticks to `no-unneeded-ternary.md`',
            merged: true,
          },
          {
            number: 19223,
            type: 'docs',
            title: 'docs: add missing backticks to `prefer-destructuring`',
            merged: true,
          },
          {
            number: 19220,
            type: 'docs',
            title: 'docs: add missing backticks to `no-param-reassign.md`',
            merged: true,
          },
          {
            number: 19224,
            type: 'docs',
            title: 'docs: add missing `<h2>`(`##`) to `prefer-spread`',
            merged: true,
          },
          {
            number: 19227,
            type: 'docs',
            title: 'docs: add missing backticks to `func-style`',
            merged: true,
          },
          {
            number: 19233,
            type: 'docs',
            title: 'docs: add missing backticks to `no-sequences`',
            merged: true,
          },
          {
            number: 19230,
            type: 'docs',
            title: 'docs: update `yoda` to `Yoda` in `yoda.md` for consistency',
            merged: true,
          },
          {
            number: 19269,
            type: 'docs',
            title: 'docs: add missing backticks in various parts of the documentation',
            merged: true,
          },
          {
            number: 19282,
            type: 'docs',
            title: 'docs: add missing backticks to `sort-imports`',
            merged: true,
          },
          {
            number: 19309,
            type: 'docs',
            title: 'docs: add missing backticks to `no-else-return.md`',
            merged: true,
          },
          {
            number: 19310,
            type: 'docs',
            title: 'docs: add `related_rules` front matter to `no-eq-null.md`',
            merged: true,
          },
          {
            number: 19311,
            type: 'docs',
            title: 'docs: add missing backticks to `default-case-last.js`',
            merged: true,
          },
          {
            number: 19313,
            type: 'docs',
            title: 'docs: add missing backticks to `no-void.md`',
            merged: true,
          },
        ],
      },
      {
        name: 'markdown',
        role: 'contributor',
        pullRequests: [
          {
            number: 329,
            type: 'test',
            title: 'test: create tests for `MarkdownLanguage`',
            highlight: true,
            merged: true,
          },
        ],
      },
    ],
  },

  {
    name: 'reactjs',
    repositories: [
      {
        name: 'react.dev',
        role: 'contributor',
        pullRequests: [
          {
            number: 7185,
            type: 'feat',
            title: '✨KOREAN(ko.react.dev) Translation Completed',
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
        role: 'contributor',
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
        role: 'contributor',
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
        role: 'contributor',
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
        role: 'contributor',
        pullRequests: [
          {
            number: 1459,
            type: 'feat',
            title:
              'feat(@textlint/ast-node-types): add missing `LinkReference`, `ImageReference` and `Definition` node types',
            highlight: true,
            merged: true,
            releases: ['v14.5.0'],
          },
          {
            number: 1425,
            type: 'docs',
            title: 'docs(image): make the border of get-started-steps images transparent',
            merged: true,
            releases: ['v14.2.1'],
          },
        ],
      },
    ],
  },

  {
    name: 'toss',
    repositories: [
      {
        name: 'es-hangul',
        role: 'contributor',
        pullRequests: [
          {
            number: 276,
            type: 'docs',
            title: 'docs: fix a typo in `standardizePronunciation.ko.mdx`',
            merged: true,
          },
          {
            number: 277,
            type: 'docs',
            title: 'docs: fix typos in `introduction.ko.mdx`',
            merged: true,
          },
          {
            number: 293,
            type: 'docs',
            title: 'docs: create `removeLastCharacter` documentation',
            highlight: true,
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
        role: 'contributor',
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
        role: 'contributor',
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
        role: 'contributor',
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
        role: 'contributor',
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
        role: 'contributor',
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
        role: 'contributor',
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
        role: 'contributor',
        pullRequests: [
          {
            number: 14,
            type: 'feat',
            title: 'feat: add `.mts` and `.cts` extensions to `builtin.ts`',
            highlight: true,
            merged: true,
            releases: ['v1.3.7'],
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
        role: 'contributor',
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
