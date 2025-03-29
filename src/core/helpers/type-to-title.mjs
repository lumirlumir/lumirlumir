/**
 * @fileoverview Transform `type` string to `title` string
 */

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../types.js').Type} Type
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Transform `type` string to `title` string.
 * @param {Type} type
 */
export default function typeToTitle(type) {
  switch (type) {
    case 'feat':
      return ':sparkles: Features';
    case 'fix':
      return ':bug: Bug Fixes';
    case 'build':
      return ':hammer_and_wrench: Builds';
    case 'chore':
      return ':toolbox: Chores';
    case 'ci':
      return ':arrows_counterclockwise: Continuous Integrations';
    case 'docs':
      return ':memo: Documentation';
    case 'perf':
      return ':zap: Performance Improvements';
    case 'refactor':
      return ':recycle: Code Refactoring';
    case 'revert':
      return ':rewind: Reverts';
    case 'style':
      return ':art: Styles';
    case 'test':
      return ':test_tube: Tests';
    default:
      throw new TypeError(`Unknown type: ${type}`);
  }
}
