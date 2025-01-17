// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.transformValues()', () => {
  it('should iterate over each entry and apply apply the transformation function', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.transformValues((value) => (value * 100))
    expect(dictionary.record()).toStrictEqual({ a: 100, b: 200, c: 300, d: 400, e: 500 })

  })
  it('should skip entries when the transformation function returns `undefined`', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.transformValues((value) => {
      if (value < 2 || value > 4) return undefined
      return (value * 100)
    })

    expect(dictionary.record()).toStrictEqual({ b: 200, c: 300, d: 400 })

  })
})
