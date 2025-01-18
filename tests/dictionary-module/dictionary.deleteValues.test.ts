// IMPORTS
import { describe, it, expect } from 'vitest'
import { dictionary } from '../../src'

// TESTS
describe('dictionary.deleteValues()', () => {
  it('should always return a new dictionary', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const result = dictionary(object).deleteValues()
    expect(result).not.toBe(object)

  })
  it('should do nothing if no values are provided', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).deleteValues()
    expect(result).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })

  })
  it('should remove only the specified values', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).deleteValues(1, 3, 5)
    expect(result).toStrictEqual({ b: 2, d: 4 })

  })
  it('should ignore non-existent values', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).deleteValues(1, 3, 5, 0)
    expect(result).toStrictEqual({ b: 2, d: 4 })

  })
})
