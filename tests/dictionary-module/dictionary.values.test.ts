// IMPORTS
import { describe, it, expect } from 'vitest'
import { dictionary } from '../../src'

// TESTS
describe('dictionary().values()', () => {
  it('should return an empty array if the dictionary is empty', () => {

    const result = dictionary({}).values()
    expect(result).toStrictEqual([])

  })
  it('should return an array with all current values', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).values()
    expect(result).toStrictEqual([1, 2, 3, 4, 5])

  })
  it('should return a unique array for each call', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const a = dictionary(object).values()
    const b = dictionary(object).values()
    expect(a).not.toBe(b)

  })
})
