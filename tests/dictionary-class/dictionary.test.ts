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
  it('should create a dictionary copying the entries of the passed object', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    const result = dictionary.record()
    expect(result).toStrictEqual(object)

  })
})
