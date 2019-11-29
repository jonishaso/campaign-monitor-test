const validateAllURLs = require('./validateAllURLs')

test('Q8: validateAllURLs input=>arr 1', async () => {
  const result = await validateAllURLs(`
    <div>
      <a href="1"></a>
      <a href="https://google.com"></a>
      <a href="2"></a>
      <a href="3"></a>
      <a href="4"></a>
    </div>
  `)
  expect(result).toStrictEqual({
    invalidURLs: ['1', '2', '3', '4'],
    validURLs: ['https://google.com']
  })
})

test('Q8: validateAllURLs input=>no links', async () => {
  const result = await validateAllURLs('<div></div>')
  expect(result).toStrictEqual({
    invalidURLs: [],
    validURLs: []
  })
})

test('Q8: validateAllURLs input=>invalid HTML', async () => {
  const result = await validateAllURLs('a!@#$!@#$!@#$!@#$!@#!@#')
  expect(result).toStrictEqual({
    invalidURLs: [],
    validURLs: []
  })
})
