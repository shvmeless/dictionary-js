// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.has()', () => {
  it('should return `false` when no keys are provided', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.has()
    expect(result).toStrictEqual(false)

  })
  it('should return `false` when at least one of the provided keys is not present in the dictionary', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.has('a', 'd', 'x')
    expect(result).toStrictEqual(false)

  })
  it('should return `true` when all of the provided keys are present in the dictionary', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.has('a', 'c', 'd')
    expect(result).toStrictEqual(true)

  })
})
