const positiveDivisors = require('./positiveDivisors')

test('Q2: positiveDivisors input=>input 60', () => {
  const result = positiveDivisors(60)
  expect(result).toStrictEqual([1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60])
})

test('Q2: positiveDivisors input=>input 42', () => {
  const result = positiveDivisors(42)
  expect(result).toStrictEqual([1, 2, 3, 6, 7, 14, 21, 42])
})

test('Q2: positiveDivisors input=>non-integer', () => {
  expect(() => {
    positiveDivisors(3.3)
  }).toThrow()
})
