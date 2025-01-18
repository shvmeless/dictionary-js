// IMPORTS
import { describe, it, expect } from 'vitest'
import { dictionary } from '../../src'

// TESTS
describe('dictionary.copy()', () => {
  it('should return a new dictionary', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const copy = dictionary(object).copy()
    expect(copy).not.toBe(object)

  })
  it('should preserve all entries in the new dictionary', () => {

    const copy = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).copy()
    expect(copy).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })

  })
})
