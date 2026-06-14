/**
 * Tiny classNames helper — joins truthy class strings.
 * Keeps JSX readable without pulling in a dependency.
 *
 * @param  {...(string|false|null|undefined)} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
