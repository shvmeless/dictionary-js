// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.map()', () => {
  it('should overwrite all values', () => {

    const object: Record<string, number> = { a: 1, b: 2, c: 3, d: 4, e: 5 }
    const dictionary = new Dictionary(object)

    const result = dictionary.map((value) => (value * 100))
    expect(result.record()).toStrictEqual({ a: 100, b: 200, c: 300, d: 400, e: 500 })
    expect(dictionary.record()).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })

  })
  it('should remove the entries when the callback returns `undefined`', () => {

    const object: Record<string, number> = { a: 1, b: 2, c: 3, d: 4, e: 5 }
    const dictionary = new Dictionary(object)

    const result = dictionary.map((value) => {
      if (value >= 2 && value <= 4) return (value * 100)
      return undefined
    })

    expect(result.record()).toStrictEqual({ b: 200, c: 300, d: 400 })
    expect(dictionary.record()).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })

  })
})
