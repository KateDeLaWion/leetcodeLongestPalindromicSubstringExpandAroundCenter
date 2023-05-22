/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

  if (s === null || s.length < 1) return "";

  let start = 0;
  let end = 0;

  //logic is: [start   [left   len   right]   end]
  // i is presumed to be the center of suspected palindrome
  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(s, i, i); // odd-length palindrome
    const len2 = expandAroundCenter(s, i, i+1); // even-length palindrome
    const len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end+1);
  
};

//below function can be written inside above block
function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
};
