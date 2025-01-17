// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.map()', () => {
  it('should return a new Dictionary instance', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.map((value) => (value.toString()))
    expect(result).instanceOf(Dictionary)
    expect(result).not.toBe(dictionary)

  })
  it('should iterate over each entry and apply apply the transformation function', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.map((value) => (value.toString()))
    expect(result.record()).toStrictEqual({ a: '1', b: '2', c: '3', d: '4', e: '5' })
    expect(dictionary.record()).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })

  })
  it('should skip entries when the transformation function returns `undefined`', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.map((value) => {
      if (value < 2 || value > 4) return undefined
      return value.toString()
    })

    expect(result.record()).toStrictEqual({ b: '2', c: '3', d: '4' })
    expect(dictionary.record()).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })

  })
})
