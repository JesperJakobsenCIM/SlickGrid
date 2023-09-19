import { exec } from './child-process.mjs';

/**
 * Run `npm publish`
 * @param {String} [publishTagName] - optional publish tag (alpha, beta, ...)
 * @param {{ cwd: String, dryRun: Boolean}} options
 * @returns {Promise<any>}
 */
export function publishPackage(publishTagName, { cwd, otp, dryRun }) {
  const execArgs = ['publish'];
  if (publishTagName) {
    execArgs.push('--tag', publishTagName);
  }
  if (otp) {
    execArgs.push('--otp', otp);
  }
  if (dryRun) {
    execArgs.push('--dry-run');
  }
  return exec('npm', execArgs, { cwd });
}

/**
 * Run an npm script by its name
 * @param {String} [scriptName] - npm script name to execute
 * @param {{ cwd: String, options: Array<String>}} options
 * @returns {Promise<any>}
 */
export function runScript(scriptName, { cwd, args }) {
  const execArgs = ['run', scriptName, args];

  return exec('npm', execArgs, { cwd });
}

/**
 * @param {{ cwd: String, dryRun: Boolean}} options
 * @returns {Promise<any>}
 */
export function syncLockFile({ cwd, dryRun }) {
  return exec('npm', ['install', '--package-lock-only'], { cwd }, dryRun);
}