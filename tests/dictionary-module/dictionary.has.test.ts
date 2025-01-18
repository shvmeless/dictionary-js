// IMPORTS
import { describe, it, expect } from 'vitest'
import { dictionary } from '../../src'

// TESTS
describe('dictionary.has()', () => {
  it('should return `false` if no keys are provided', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).has()
    expect(result).toStrictEqual(false)

  })
  it('should return `false` if at least one of the provided keys is not present', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).has('a', 'd', 'x')
    expect(result).toStrictEqual(false)

  })
  it('should return `true` if all provided keys are present', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).has('a', 'c', 'd')
    expect(result).toStrictEqual(true)

  })
})
