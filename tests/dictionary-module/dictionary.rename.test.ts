// IMPORTS
import { describe, it, expect } from 'vitest'
import { dictionary } from '../../src'

// TESTS
describe('dictionary().rename()', () => {
  it('should always return a new dictionary', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const result = dictionary(object).rename('a', 'x')
    expect(result).not.toBe(object)

  })
  it('should do nothing if the specified key does not exist', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const a = dictionary(object).rename('j', 'x')
    const b = dictionary(a).rename('k', 'y')
    const c = dictionary(b).rename('l', 'z')

    expect(a).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    expect(b).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    expect(c).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })

  })
  it('should rename the entry if the new key does not exist', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const a = dictionary(object).rename('a', 'x')
    const b = dictionary(a).rename('c', 'y')
    const c = dictionary(b).rename('e', 'z')

    expect(a).toStrictEqual({ x: 1, b: 2, c: 3, d: 4, e: 5 })
    expect(b).toStrictEqual({ x: 1, b: 2, y: 3, d: 4, e: 5 })
    expect(c).toStrictEqual({ x: 1, b: 2, y: 3, d: 4, z: 5 })

  })
  it('should overwrite the entry if the new key already exists', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const a = dictionary(object).rename('a', 'e')
    const b = dictionary(a).rename('c', 'a')
    const c = dictionary(b).rename('e', 'c')

    expect(a).toStrictEqual({ e: 1, b: 2, c: 3, d: 4 })
    expect(b).toStrictEqual({ e: 1, b: 2, a: 3, d: 4 })
    expect(c).toStrictEqual({ c: 1, b: 2, a: 3, d: 4 })

  })
})
