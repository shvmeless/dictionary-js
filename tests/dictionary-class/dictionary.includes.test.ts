// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.includes()', () => {
  it('should return `false` if no values are provided', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.includes()
    expect(result).toStrictEqual(false)

  })
  it('should return `false` if at least one of the provided values is not present', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.includes(1, 3, 5, 0)
    expect(result).toStrictEqual(false)

  })
  it('should return `true` if all provided values are present', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.includes(1, 3, 5)
    expect(result).toStrictEqual(true)

  })
})
