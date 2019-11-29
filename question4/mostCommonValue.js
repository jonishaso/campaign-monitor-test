const mostCommonValue = integers => {
  let mostOccurrences = 0
  const frequencyMap = {}

  for (const integer of integers) {
    if (!Object.prototype.hasOwnProperty.call(frequencyMap, integer))
      frequencyMap[integer] = 0
    frequencyMap[integer]++
    if (mostOccurrences < frequencyMap[integer])
      mostOccurrences = frequencyMap[integer]
  }

  return Object.keys(frequencyMap)
    .filter(integer => frequencyMap[integer] === mostOccurrences)
    .map(value => Number(value))
    .sort((a, b) => a - b)
}

module.exports = mostCommonValue
