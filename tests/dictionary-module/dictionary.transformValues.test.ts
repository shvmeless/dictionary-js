// IMPORTS
import { describe, it, expect } from 'vitest'
import { dictionary } from '../../src'

// TESTS
describe('dictionary.transformValues()', () => {
  it('should iterate over each entry and apply apply the transformation function', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).transformValues((value) => (value.toString()))
    expect(result).toStrictEqual({ a: '1', b: '2', c: '3', d: '4', e: '5' })

  })
  it('should skip entries when the transformation function returns `undefined`', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).transformValues((value) => {
      if (value < 2 || value > 4) return undefined
      return (value.toString())
    })

    expect(result).toStrictEqual({ b: '2', c: '3', d: '4' })

  })
})
