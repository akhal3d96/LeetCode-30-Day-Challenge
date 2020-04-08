/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const hashMap = new Map()
  strs
    .forEach(value => {
      const hash = value.split('').sort().join('')
      const angramList = hashMap.get(hash)
      angramList ? angramList.push(value) : hashMap.set(hash, [value])
    })
    return Array.from(hashMap.values())
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])