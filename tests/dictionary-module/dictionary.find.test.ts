// IMPORTS
import { describe, it, expect } from 'vitest'
import { dictionary } from '../../src'

// TESTS
describe('dictionary.find()', () => {
  it('should return `undefined` if no entry meets the condition', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).find((value) => (value < 0))
    expect(result).toBeUndefined()

  })
  it('should return the value of the first entry that meets the condition', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).find((value) => (value >= 2 && value <= 4))
    expect(result).toStrictEqual(['b', 2])

  })
  it('should provide the dictionary in callback function', () => {

    let original: Record<string, number> | null = null
    dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).find((value, key, dictionary) => {
      if (original === null) original = dictionary
      expect(original).toBe(dictionary)
      return false
    })

  })
})
