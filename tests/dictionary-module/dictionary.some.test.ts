// IMPORTS
import { describe, it, expect } from 'vitest'
import { dictionary } from '../../src'

// TESTS
describe('dictionary.some()', () => {
  it('should return `false` if no entry meets the condition', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).some((value) => (value <= 0))
    expect(result).toStrictEqual(false)

  })
  it('should return `true` if at least one entry meets the condition', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).some((value) => (value % 2 === 0))
    expect(result).toStrictEqual(true)

  })
  it('should provide the dictionary in callback function', () => {

    let original: Record<string, number> | null = null
    dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).some((value, key, dictionary) => {
      if (original === null) original = dictionary
      expect(original).toBe(dictionary)
      return false
    })

  })
})
