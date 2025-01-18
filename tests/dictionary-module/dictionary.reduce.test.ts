// IMPORTS
import { describe, it, expect } from 'vitest'
import { dictionary } from '../../src'

// TESTS
describe('dictionary.reduce()', () => {
  it('should return the initial value if the dictionary is empty', () => {

    const result = dictionary<number>({}).reduce((previous, value) => (previous + value), 0)
    expect(result).toBe(0)

  })
  it('should return the result of the cumulative function applied to all entries', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).reduce((previous, value) => (previous + value), 0)
    expect(result).toBe(15)

  })
})
