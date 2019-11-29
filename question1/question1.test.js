const isNullOrEmpty = require('./isNullOrEmpty')

test('Q1: isNullOrEmpty input=>null', () => {
  const result = isNullOrEmpty(null)
  expect(result).toBe(true)
})

test('Q1: isNullOrEmpty input=>empty string', () => {
  const result = isNullOrEmpty('')
  expect(result).toBe(true)
})

test('Q1: isNullOrEmpty input=>object', () => {
  const result = isNullOrEmpty({})
  expect(result).toBe(false)
})
