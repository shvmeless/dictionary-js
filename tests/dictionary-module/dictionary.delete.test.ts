// IMPORTS
import { describe, it, expect } from 'vitest'
import { dictionary } from '../../src'

// TESTS
describe('dictionary.delete()', () => {
  it('should always return a new dictionary', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const result = dictionary(object).delete()
    expect(result).not.toBe(object)

  })
  it('should do nothing if no keys are provided', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).delete()
    expect(result).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })

  })
  it('should remove the specified keys', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).delete('a', 'c', 'e')
    expect(result).toStrictEqual({ b: 2, d: 4 })

  })
  it('should ignore non-existent keys', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).delete('a', 'c', 'e', 'x')
    expect(result).toStrictEqual({ b: 2, d: 4 })

  })
})
