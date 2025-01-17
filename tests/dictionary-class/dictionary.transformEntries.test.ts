// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.transformEntries()', () => {
  it('should iterate over each entry and apply apply the transformation function', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.transformEntries((value, key) => {
      const newKey = key.toUpperCase()
      const newValue = value * 100
      return [newKey, newValue]
    })

    expect(dictionary.record()).toStrictEqual({ A: 100, B: 200, C: 300, D: 400, E: 500 })

  })
  it('should skip entries when the transformation function returns `undefined`', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.transformEntries((value, key) => {
      const newKey = key.toUpperCase()
      const newValue = value * 100
      if (value < 2 || value > 4) return undefined
      return [newKey, newValue]
    })

    expect(dictionary.record()).toStrictEqual({ B: 200, C: 300, D: 400 })

  })
  it('should overwrite the entries with the same key', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.transformEntries((value) => {
      const newValue = value * 100
      if (value >= 2 && value <= 4) return ['X', newValue]
      return ['Y', newValue]
    })

    expect(dictionary.record()).toStrictEqual({ X: 400, Y: 500 })

  })
})
