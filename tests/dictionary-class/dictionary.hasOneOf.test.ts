// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.hasOneOf()', () => {
  it('should return `false` if no keys are provided', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.hasOneOf()
    expect(result).toStrictEqual(false)

  })
  it('should return `false` if none of the provided keys are present', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.hasOneOf('x', 'y', 'z')
    expect(result).toStrictEqual(false)

  })
  it('should return `true` if at least one of the provided keys is present', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.hasOneOf('a', 'e', 'x')
    expect(result).toStrictEqual(true)

  })
})
