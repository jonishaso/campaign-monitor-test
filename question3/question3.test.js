const areaOfTriangle = require('./areaOfTriangle')
const InvalidTriangleException = require('./InvalidTriangleException')

test('Q3: areaOfTriangle input=>triangle 3,4,5', () => {
  const result = areaOfTriangle(3, 4, 5)
  expect(result).toBe(6)
})

test('Q3: areaOfTriangle input=>invalid triangle', () => {
  expect(() => areaOfTriangle(1, 4, 5)).toThrow(InvalidTriangleException)
})
