// IMPORTS
import { describe, it, expect } from 'vitest'
import { dictionary } from '../../src'

// TESTS
describe('dictionary().set()', () => {
  it('should always return a new dictionary', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }
    const result = dictionary(object).set('x', 0)
    expect(result).not.toBe(object)

  })
  it('should create a new entry if it does not already exists', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const a = dictionary(object).set('x', 0)
    const b = dictionary(a).set('y', 0)
    const c = dictionary(b).set('z', 0)

    expect(a).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5, x: 0 })
    expect(b).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5, x: 0, y: 0 })
    expect(c).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5, x: 0, y: 0, z: 0 })

  })
  it('should overwrite the entry if it already exists', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const a = dictionary(object).set('a', 0)
    const b = dictionary(a).set('c', 0)
    const c = dictionary(b).set('e', 0)

    expect(a).toStrictEqual({ a: 0, b: 2, c: 3, d: 4, e: 5 })
    expect(b).toStrictEqual({ a: 0, b: 2, c: 0, d: 4, e: 5 })
    expect(c).toStrictEqual({ a: 0, b: 2, c: 0, d: 4, e: 0 })

  })
  it('should create/overwrite the entries as needed', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const a = dictionary(object).set('a', 0)
    const b = dictionary(a).set('c', 0)
    const c = dictionary(b).set('e', 0)
    const d = dictionary(c).set('x', 0)
    const e = dictionary(d).set('y', 0)

    expect(a).toStrictEqual({ a: 0, b: 2, c: 3, d: 4, e: 5 })
    expect(b).toStrictEqual({ a: 0, b: 2, c: 0, d: 4, e: 5 })
    expect(c).toStrictEqual({ a: 0, b: 2, c: 0, d: 4, e: 0 })
    expect(d).toStrictEqual({ a: 0, b: 2, c: 0, d: 4, e: 0, x: 0 })
    expect(e).toStrictEqual({ a: 0, b: 2, c: 0, d: 4, e: 0, x: 0, y: 0 })

  })
})
