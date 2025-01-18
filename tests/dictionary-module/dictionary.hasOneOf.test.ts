// IMPORTS
import { describe, it, expect } from 'vitest'
import { dictionary } from '../../src'

// TESTS
describe('dictionary.hasOneOf()', () => {
  it('should return `false` if no keys are provided', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).hasOneOf()
    expect(result).toStrictEqual(false)

  })
  it('should return `false` if none of the provided keys are present', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).hasOneOf('x', 'y', 'z')
    expect(result).toStrictEqual(false)

  })
  it('should return `true` if at least one of the provided keys is present', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).hasOneOf('a', 'e', 'x')
    expect(result).toStrictEqual(true)

  })
})
