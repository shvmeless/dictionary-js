// IMPORTS
import { describe, expect, it } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('new Dictionary()', () => {
  it('should create an empty dictionary when no argument is passed', () => {

    const dictionary = new Dictionary()

    const result = dictionary.record()
    expect(result).toStrictEqual({})

  })
  it('should initialize the dictionary by copying the entries of the provided record', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    const result = dictionary.record()
    expect(result).toStrictEqual({ a: 1, b: 2, c: 3 })

  })
  it('should initialize the dictionary by copying the entries of the provided array', () => {

    const array: Array<[string, number]> = [['a', 1], ['b', 2], ['c', 3]]
    const dictionary = new Dictionary(array)

    const result = dictionary.record()
    expect(result).toStrictEqual({ a: 1, b: 2, c: 3 })

  })
})
