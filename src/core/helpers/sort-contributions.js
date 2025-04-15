/**
 * @fileoverview Sort contributions by `type`.
 */

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../../types/index.d.ts').Contribution} Contribution
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Sort contributions by `type`.
 * @param {readonly Contribution[]} contributions
 * @returns
 */
export default function sortContributions(contributions) {
  const order = [
    'feat',
    'fix',
    'build',
    'chore',
    'ci',
    'docs',
    'perf',
    'refactor',
    'style',
    'test',
  ];

  return contributions.toSorted((a, b) => order.indexOf(a.type) - order.indexOf(b.type));
}
