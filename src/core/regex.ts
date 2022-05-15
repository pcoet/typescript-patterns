// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Examples of regex patterns. To learn more about regular expressions in JavaScript, see:
 *
 *   * https://eloquentjavascript.net/09_regexp.html
 *   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
 *
 * Also, note that certain operators are greedy. From Elequent Javascript:
 *
 *     ... the repetition operators (+, *, ?, and {}) are greedy, meaning they match
 *     as much as they can and backtrack from there. If you put a question mark after
 *     them (+?, *?, ??, {}?), they become nongreedy and start by matching as little
 *     as possible, matching more only when the remaining pattern does not fit the
 *     smaller match.
 */
 export const Pattern = {
  // a simple pattern to directly match an exact character sequence
  crow: /crow/,
  // uses square brackets to match either 'c' or 'r' or 'o' or 'w'
  c_r_o_w: /[crow]/,
  // matches the range 'c' to 'w'
  c_to_w: /[c-w]/,
  // matches any characters but 'c', 'r', 'o', or 'w'
  no_c_r_o_w: /[^crow]/,
  // matches 'crow', crrow', 'crrrow', etc.
  crrow: /cr+ow/,
  // matches 'cow' or 'crow'
  cow_or_crow: /cr?ow/,
  // matches 'cow', crow', 'crrow', etc.
  cow_or_crrow: /cr*ow/,
  // matches 'crowcroakcrow' or 'crowcroakcroakcrow'
  crow_frog_crow: /crow(croak){1,2}crow/,
  // matches 'crow' and 'crowcrow' but not 'duckcrow' or 'crowduck' or 'crow crow'
  all_crow: /^(crow)+$/,
  // matches 'crow' and 'duck crow duck' but not 'duckcrowduck'
  bounded_crow: /\bcrow\b/,
  // matches 'crow' or 'raven' or 'rook'
  corvid: /^(crow|raven|rook)$/,
  // matches every 'crow' in the string
  global_crow: /crow/g,
};

/**
 * Demonstrates usage of RegExp.test().
 * @param re the pattern to test for
 * @param str the string to test against
 * @returns true if there is a match; false otherwise.
 * To learn more, see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
 */
export function exampleTest(re: RegExp, str: string): boolean {
  return re.test(str);
}

interface Match {
  match: string,
  start: number,
  end: number,
}

/**
 * Returns all matches for `pattern` in `str`. Demonstrates usage of RegExp.exec().
 * @param pattern the pattern to test for; will be used globally
 * @param str the string to test against
 * @returns an array of Match objects, or an empty array
 * To learn more, see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
 */
export function exampleExec(pattern: string, str: string): Match[] {
  const re = new RegExp(pattern, 'g');
  const result: Match[] = [];
  let match = re.exec(str);
  while (match !== null) {
    result.push({
      match: match[0],
      start: match.index,
      end: re.lastIndex,
    });
    match = re.exec(str);
  }
  return result;
}

/**
 * Demonstrates usage of String.prototype.search().
 * @param re the pattern to test for
 * @param str the string to test
 * @returns the index of the first match between `re` and `str`, or -1 if there is no match
 * To learn more, see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
 */
export function exampleSearch(re: RegExp, str: string): number {
  return str.search(re);
}

/**
 * Demonstrates usage of String.prototype.replace().
 * @param re the pattern to test for
 * @param newSubStr the replacement for the pattern
 * @param str the string to test
 * @returns a new string with replacements, if there were any
 * To learn more, see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 */
export function exampleReplace(re: RegExp, newSubStr: string, str: string): string {
  return str.replace(re, newSubStr);
}
