// IMPORTS
import { describe, it, expect } from 'vitest'
import { dictionary } from '../../src'

// TESTS
describe('dictionary.retainValues()', () => {
  it('should always return a new dictionary', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const result = dictionary(object).retainValues()
    expect(result).not.toBe(object)

  })
  it('should do nothing if no values are provided', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).retainValues()
    expect(result).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })

  })
  it('should retain only the specified values', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).retainValues(1, 3, 5)
    expect(result).toStrictEqual({ a: 1, c: 3, e: 5 })

  })
  it('should ignore non-existent values', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).retainValues(1, 3, 5, 0)
    expect(result).toStrictEqual({ a: 1, c: 3, e: 5 })

  })
})
