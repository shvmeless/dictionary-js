// IMPORTS
import { describe, expect, it } from 'vitest'
import { dictionary } from '../../src'

// TESTS
describe('dictionary().keys()', () => {
  it('should return an empty array if the dictionary is empty', () => {

    const result = dictionary({}).keys()
    expect(result).toStrictEqual([])

  })
  it('should return an array with all current keys', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).keys()
    expect(result).toStrictEqual(['a', 'b', 'c', 'd', 'e'])

  })
  it('should return a unique array for each call', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const a = dictionary(object).keys()
    const b = dictionary(object).keys()
    expect(a).not.toBe(b)

  })
})
