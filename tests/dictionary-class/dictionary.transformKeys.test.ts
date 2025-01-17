// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.transformKeys()', () => {
  it('should iterate over each entry and apply apply the transformation function', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.transformKeys((value, key) => (key.toUpperCase()))
    expect(dictionary.record()).toStrictEqual({ A: 1, B: 2, C: 3, D: 4, E: 5 })

  })
  it('should skip entries when the transformation function returns `undefined`', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.transformKeys((value, key) => {
      if (value < 2 || value > 4) return undefined
      return key.toUpperCase()
    })

    expect(dictionary.record()).toStrictEqual({ B: 2, C: 3, D: 4 })

  })
  it('should overwrite the entries with the same key', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.transformKeys((value) => {
      if (value >= 2 && value <= 4) return 'X'
      return 'Y'
    })

    expect(dictionary.record()).toStrictEqual({ X: 4, Y: 5 })

  })
})
