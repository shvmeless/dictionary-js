// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.has()', () => {
  it('should return `false` if no keys are provided', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.has()
    expect(result).toStrictEqual(false)

  })
  it('should return `false` if at least one of the provided keys is not present', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.has('a', 'd', 'x')
    expect(result).toStrictEqual(false)

  })
  it('should return `true` if all provided keys are present', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.has('a', 'c', 'd')
    expect(result).toStrictEqual(true)

  })
})
