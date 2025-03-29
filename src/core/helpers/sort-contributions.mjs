/**
 * @fileoverview Sort contributions by `type`.
 */

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../types.d.ts').Contribution} Contribution
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Sort contributions by `type`.
 * @param {Contribution[]} contributions
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
    'revert',
    'style',
    'test',
  ];

  return contributions.sort((a, b) => order.indexOf(a.type) - order.indexOf(b.type));
}
