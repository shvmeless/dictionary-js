// IMPORTS
import { describe, it, expect } from 'vitest'
import { dictionary } from '../../src'

// TESTS
describe('dictionary.every()', () => {
  it('should return `false` if at least one entry does not meet the condition', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).every((value) => (value >= 2 && value <= 4))
    expect(result).toStrictEqual(false)

  })
  it('should return `true` if all entries meet the condition', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).every((value) => (value >= 1 && value <= 5))
    expect(result).toStrictEqual(true)

  })
  it('should provide the dictionary in callback function', () => {

    let original: Record<string, number> | null = null
    dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).every((value, key, dictionary) => {
      if (original === null) original = dictionary
      expect(original).toBe(dictionary)
      return true
    })

  })
})
