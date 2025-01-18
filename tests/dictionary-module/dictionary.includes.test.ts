// IMPORTS
import { describe, it, expect } from 'vitest'
import { dictionary } from '../../src'

// TESTS
describe('dictionary.includes()', () => {
  it('should return `false` if no values are provided', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).includes()
    expect(result).toStrictEqual(false)

  })
  it('should return `false` if at least one of the provided values is not present', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).includes(1, 3, 5, 0)
    expect(result).toStrictEqual(false)

  })
  it('should return `true` if all provided values are present', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).includes(1, 3, 5)
    expect(result).toStrictEqual(true)

  })
})
