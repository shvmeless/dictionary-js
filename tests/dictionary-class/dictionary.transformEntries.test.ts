// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.transformEntries()', () => {
  it('should rename all entries and overwrite all values', () => {

    const object: Record<string, number> = { a: 1, b: 2, c: 3, d: 4, e: 5 }
    const dictionary = new Dictionary(object)

    const result = dictionary.transformEntries((value, key) => {
      const newKey = key.toUpperCase()
      const newValue = value * 100
      return [newKey, newValue]
    })

    expect(result.record()).toStrictEqual({ A: 100, B: 200, C: 300, D: 400, E: 500 })

  })
  it('should remove the entries when the callback returns `undefined`', () => {

    const object: Record<string, number> = { a: 1, b: 2, c: 3, d: 4, e: 5 }
    const dictionary = new Dictionary(object)

    const result = dictionary.transformEntries((value, key) => {
      const newKey = key.toUpperCase()
      const newValue = value * 100
      if (value >= 2 && value <= 4) return [newKey, newValue]
      return undefined
    })

    expect(result.record()).toStrictEqual({ B: 200, C: 300, D: 400 })

  })
  it('should overwrite the entries with the same name', () => {

    const object: Record<string, number> = { a: 1, b: 2, c: 3, d: 4, e: 5 }
    const dictionary = new Dictionary(object)

    const result = dictionary.transformEntries((value, key) => {
      const newValue = value * 100
      if (value >= 2 && value <= 4) return ['X', newValue]
      return ['Y', newValue]
    })

    expect(result.record()).toStrictEqual({ X: 400, Y: 500 })

  })
})
