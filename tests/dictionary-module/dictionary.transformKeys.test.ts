// IMPORTS
import { describe, it, expect } from 'vitest'
import { dictionary } from '../../src'

// TESTS
describe('dictionary.transformKeys()', () => {
  it('should iterate over each entry and apply apply the transformation function', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).transformKeys((value, key) => (key.toUpperCase()))
    expect(result).toStrictEqual({ A: 1, B: 2, C: 3, D: 4, E: 5 })

  })
  it('should skip entries when the transformation function returns `undefined`', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).transformKeys((value, key) => {
      if (value < 2 || value > 4) return undefined
      return key.toUpperCase()
    })

    expect(result).toStrictEqual({ B: 2, C: 3, D: 4 })

  })
  it('should overwrite the entries with the same key', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).transformKeys((value) => {
      if (value >= 2 && value <= 4) return 'X'
      return 'Y'
    })

    expect(result).toStrictEqual({ X: 4, Y: 5 })

  })
  it('should provide the dictionary in callback function', () => {

    let original: Record<string, number> | null = null
    dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).transformKeys((value, key, dictionary) => {
      if (original === null) original = dictionary
      expect(original).toBe(dictionary)
      return key
    })

  })
})
