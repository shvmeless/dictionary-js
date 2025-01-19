// IMPORTS
import { describe, it, expect } from 'vitest'
import { dictionary } from '../../src'

// TESTS
describe('dictionary.filter()', () => {
  it('should remove all entries that do not meet the condition', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).filter((value) => (value >= 2 && value <= 4))
    expect(result).toStrictEqual({ b: 2, c: 3, d: 4 })

  })
  it('should provide the dictionary in callback function', () => {

    let original: Record<string, number> | null = null
    dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).filter((value, key, dictionary) => {
      if (original === null) original = dictionary
      expect(original).toBe(dictionary)
      return true
    })

  })
})
