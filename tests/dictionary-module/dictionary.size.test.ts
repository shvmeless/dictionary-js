// IMPORTS
import { describe, it, expect } from 'vitest'
import { dictionary } from '../../src'

// TESTS
describe('dictionary().size()', () => {
  it('should return `0` if the dictionary is empty', () => {

    const result = dictionary({}).size()
    expect(result).toBe(0)

  })
  it('should return the current number of entries', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).size()
    expect(result).toBe(5)

  })
})
