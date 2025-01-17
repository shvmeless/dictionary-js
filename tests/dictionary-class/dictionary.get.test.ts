// IMPORTS
import { describe, expect, it } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.get()', () => {
  it('should return `undefined` if the key does not exist', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.get('x')
    expect(result).toBeUndefined()

  })
  it('should return the value associated with the key if it exists', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const a = dictionary.get('a')
    expect(a).toBe(1)

    const b = dictionary.get('b')
    expect(b).toBe(2)

    const c = dictionary.get('c')
    expect(c).toBe(3)

    const d = dictionary.get('d')
    expect(d).toBe(4)

    const e = dictionary.get('e')
    expect(e).toBe(5)

  })
})
