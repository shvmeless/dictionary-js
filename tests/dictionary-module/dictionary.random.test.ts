// IMPORTS
import { describe, it, expect } from 'vitest'
import { dictionary } from '../../src'

// TESTS
describe('.random()', () => {
  it('should return `undefined` if the dictionary is empty', () => {

    for (let i = 0; i < 1000; i++) {
      const result = dictionary({}).random()
      expect(result).toBeUndefined()
    }

  })
  it('should return a random entry', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }
    const options = [['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]]
    const results = []

    for (let i = 0; i < 1000; i++) {
      const result = dictionary(object).random()
      results.push(result)
      expect(options).toContainEqual(result)
    }

    expect(results).toContainEqual(['a', 1])
    expect(results).toContainEqual(['b', 2])
    expect(results).toContainEqual(['c', 3])
    expect(results).toContainEqual(['d', 4])
    expect(results).toContainEqual(['e', 5])

  })
})
