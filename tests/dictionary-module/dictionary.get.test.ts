// IMPORTS
import { describe, expect, it } from 'vitest'
import { dictionary } from '../../src'

// TESTS
describe('dictionary().get()', () => {
  it('should return `undefined` if the key does not exist', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).get('x')
    expect(result).toBeUndefined()

  })
  it('should return the value associated with the key if it exists', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const a = dictionary(object).get('a')
    expect(a).toBe(1)

    const b = dictionary(object).get('b')
    expect(b).toBe(2)

    const c = dictionary(object).get('c')
    expect(c).toBe(3)

    const d = dictionary(object).get('d')
    expect(d).toBe(4)

    const e = dictionary(object).get('e')
    expect(e).toBe(5)

  })
})
