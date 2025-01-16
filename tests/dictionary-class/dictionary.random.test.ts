// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('.random()', () => {
  it('should return `undefined` when the dictionary is empty', () => {

    const dictionary = new Dictionary()

    for (let i = 0; i < 1000; i++) {
      const result = dictionary.random()
      expect(result).toBeUndefined()
    }

  })
  it('should return a random entry from the dictionary', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const results = []
    const options = [['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]]

    for (let i = 0; i < 1000; i++) {
      const result = dictionary.random()
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
