// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.record()', () => {
  it('should return an empty Record if the Dictionary is empty', () => {

    const dictionary = new Dictionary()

    const result = dictionary.record()
    expect(result).toStrictEqual({})

  })
  it('should return an Record with all current entries', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.record()
    expect(result).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })

  })
  it('should return a unique Record for each call', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const a = dictionary.record()
    const b = dictionary.record()
    expect(a).not.toBe(b)

  })
})
