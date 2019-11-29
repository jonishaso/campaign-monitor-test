const mostCommonValue = require('./mostCommonValue')

test('Q4: mostCommonValue input=>testArr1', () => {
  const result = mostCommonValue([5, 4, 3, 2, 4, 5, 1, 6, 1, 2, 5, 4, 6, 6])
  expect(result).toStrictEqual([4, 5, 6])
})

test('Q4: mostCommonValue input=>testArr2', () => {
  const result = mostCommonValue([5, 4, 3, 2, 4, 5, 1, 6, 1, 2, 5, 4, 6])
  expect(result).toStrictEqual([4, 5])
})

test('Q4: mostCommonValue input=>testArr3', () => {
  const result = mostCommonValue([5, 4, 3, 2, 6])
  expect(result).toStrictEqual([2, 3, 4, 5, 6])
})

test('Q4: mostCommonValue input=>empty array', () => {
  const result = mostCommonValue([])
  expect(result).toStrictEqual([])
})

test('Q4: mostCommonValue input=>non-array', () => {
  expect(() => {
    mostCommonValue()
  }).toThrow()
})
