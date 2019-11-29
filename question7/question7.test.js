const arrangeBy = require('./arrangeBy')

const userList = [
  { id: 1, name: 'bob' },
  {
    id: 2,
    name: 'sally'
  },
  {
    id: 2,
    name: 'sally',
    age: 90
  },
  {
    id: 3,
    name: 'bob',
    age: 30
  },
  {
    id: 4,
    name: 'bob',
    age: 30
  }
]

test('Q7: arrangeBy name userList', () => {
  const arrangeByName = arrangeBy('name')
  const result = arrangeByName(userList)
  expect(result).toStrictEqual({
    bob: [
      { id: 1, name: 'bob' },
      { id: 3, name: 'bob', age: 30 },
      { id: 4, name: 'bob', age: 30 }
    ],
    sally: [
      { id: 2, name: 'sally' },
      { id: 2, name: 'sally', age: 90 }
    ]
  })
})

test('Q7: arrangeBy non-existent property', () => {
  const arrangeByFoo = arrangeBy('foo')
  const result = arrangeByFoo(userList)
  expect(result).toStrictEqual({})
})
