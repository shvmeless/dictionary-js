// IMPORTS
import { describe, it, expect } from 'vitest'
import { dictionary } from '../../src'

// TESTS
describe('dictionary.includesOneOf()', () => {
  it('should return `false` if no values are provided', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).includesOneOf()
    expect(result).toStrictEqual(false)

  })
  it('should return `false` if none of the provided values are present', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).includesOneOf(6, 7, 8, 9, 0)
    expect(result).toStrictEqual(false)

  })
  it('should return `true` if at least one of the provided values is present', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).includesOneOf(1, 3, 5, 6)
    expect(result).toStrictEqual(true)

  })
})
