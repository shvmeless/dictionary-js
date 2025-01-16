// IMPORTS
import { describe, expect, it } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.get()', () => {
  it('should return `undefined` the key does not exist', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    const result = dictionary.get('x')
    expect(result).toBeUndefined()

  })
  it('should return the value associated with the key when it exists', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result1 = dictionary.get('a')
    expect(result1).toBe(1)

    const result2 = dictionary.get('b')
    expect(result2).toBe(2)

    const result3 = dictionary.get('c')
    expect(result3).toBe(3)

    const result4 = dictionary.get('d')
    expect(result4).toBe(4)

    const result5 = dictionary.get('e')
    expect(result5).toBe(5)

  })
})
