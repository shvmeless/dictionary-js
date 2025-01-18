// IMPORTS
import { describe, it, expect } from 'vitest'
import { dictionary } from '../../src'

// TESTS
describe('dictionary.retain()', () => {
  it('should always return a new dictionary', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const result = dictionary(object).retain()
    expect(result).not.toBe(object)

  })
  it('should do nothing if no keys are provided', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).retain()
    expect(result).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })

  })
  it('should remove all entries except the specified keys', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).retain('a', 'c', 'e')
    expect(result).toStrictEqual({ a: 1, c: 3, e: 5 })

  })
  it('should ignore non-existent keys', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).retain('a', 'c', 'e', 'x')
    expect(result).toStrictEqual({ a: 1, c: 3, e: 5 })

  })
})
