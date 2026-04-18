/**
 * @fileoverview Script to tell Vercel whether to skip a build.
 */

/* eslint-disable no-console -- CLI */
// @ts-check

const author = process.env.VERCEL_GIT_COMMIT_AUTHOR_LOGIN;
const branch = process.env.VERCEL_GIT_COMMIT_REF;

if (author === 'dependabot[bot]' && branch !== 'main') {
  console.log(
    `🛑 Ignoring build for dependabot[bot] PR (author: ${author}, branch: ${branch})`,
  );
  process.exit(0);
}

console.log(`✅ Proceeding with the build (author: ${author}, branch: ${branch})`);
process.exit(1);
