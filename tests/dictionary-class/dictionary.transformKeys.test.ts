// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.transformKeys()', () => {
  it('should rename all entries', () => {

    const object: Record<string, number> = { a: 1, b: 2, c: 3, d: 4, e: 5 }
    const dictionary = new Dictionary(object)

    const result = dictionary.transformKeys((value, key) => (key.toUpperCase()))
    expect(result.record()).toStrictEqual({ A: 1, B: 2, C: 3, D: 4, E: 5 })

  })
  it('should remove the entries when the callback returns `undefined`', () => {

    const object: Record<string, number> = { a: 1, b: 2, c: 3, d: 4, e: 5 }
    const dictionary = new Dictionary(object)

    const result = dictionary.transformKeys((value, key) => {
      if (value >= 2 && value <= 4) return key.toUpperCase()
      return undefined
    })

    expect(result.record()).toStrictEqual({ B: 2, C: 3, D: 4 })

  })
  it('should overwrite the entries with the same name', () => {

    const object: Record<string, number> = { a: 1, b: 2, c: 3, d: 4, e: 5 }
    const dictionary = new Dictionary(object)

    const result = dictionary.transformKeys((value, key) => {
      if (value >= 2 && value <= 4) return 'X'
      return 'Y'
    })

    expect(result.record()).toStrictEqual({ X: 4, Y: 5 })

  })
})
