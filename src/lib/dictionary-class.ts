// CLASS
export class Dictionary<V> {

  // PROPERTIES
  private readonly object: Record<string, V>

  /**
   * Creates an instance of Dictionary.
  */
  constructor (object?: Record<string, V>) {
    this.object = { ...object ?? {} }
  }

  /**
   * Returns a `Record` containing all current dictionary entries.
  */
  public record (): Record<string, V> {
    return { ...this.object }
  }

  /**
   * Returns an `Array` containing the keys of all dictionary entries.
  */
  public keys (): Array<string> {
    return Object.keys(this.object)
  }

  /**
   * Returns an `Array` containing the values of all dictionary entries.
  */
  public values (): Array<V> {
    return Object.values(this.object)
  }

  /**
   * Returns an `Array` containing the key-value pairs of all dictionary entries.
  */
  public entries (): Array<[string, V]> {
    return Object.entries(this.object)
  }

  /**
   * Returns the total number of entries in the dictionary.
  */
  public size (): number {
    return Object.keys(this.object).length
  }

  /**
   * Returns the value associated with a specific key in the dictionary.
  */
  public get (key: string): V | undefined {
    return this.object[key]
  }

  /**
   * Assigns a value to a specific key in the dictionary.
  */
  public set (key: string, value: V): this {
    this.object[key] = value
    return this
  }

  /**
   * Renames the key of a specific dictionary entry.
  */
  public rename (key: string, newKey: string): this {
    const value = this.object[key]
    if (value === undefined) return this
    delete this.object[key]
    this.object[newKey] = value
    return this
  }

  /**
   * Returns a random key-value pair from the dictionary.
  */
  public random (): [string, V] | undefined {
    const entries = this.entries()
    const index = Math.floor(Math.random() * entries.length)
    return entries[index]
  }

  /**
   * Creates and returns a new `Dictionary` instance containing a copy of all entries from the current dictionary
  */
  public copy (): Dictionary<V> {
    const copy: Record<string, V> = {}
    for (const [key, value] of this.entries()) {
      copy[key] = value
    }
    return new Dictionary(copy)
  }

  /**
   * Returns `true` if the specified keys exist in the dictionary, otherwise returns `false`.
  */
  public has (...search: Array<string>): boolean {
    if (search.length === 0) return false
    for (const key of search) {
      const item = this.object[key]
      if (item !== undefined) continue
      return false
    }
    return true
  }

  /**
   * Returns `true` if at least one of the specified keys exists in the dictionary, otherwise returns `false`.
  */
  public hasOneOf (...search: Array<string>): boolean {
    if (search.length === 0) return false
    for (const key of search) {
      const item = this.object[key]
      if (item === undefined) continue
      return true
    }
    return false
  }

  /**
   * Returns `true` if all specified values exist in the dictionary, otherwise returns `false`.
  */
  public includes (...search: Array<V>): boolean {
    if (search.length === 0) return false
    for (const value of this.values()) {
      const index = search.indexOf(value)
      if (index < 0) continue
      search.splice(index, 1)
    }
    return (search.length === 0)
  }

  /**
   * Returns `true` if at least one of the specified values exists in the dictionary, otherwise returns `false`.
  */
  public includesOneOf (...search: Array<V>): boolean {
    if (search.length === 0) return false
    for (const value of this.values()) {
      if (!search.includes(value)) continue
      return true
    }
    return false
  }

  /**
   * Removes all entries from the dictionary.
  */
  public clear (): this {
    for (const key of this.keys()) {
      delete this.object[key]
    }
    return this
  }

  /**
   * Keeps entries matching at least one of the provided keys and removes the rest.
  */
  public retain (...keys: Array<string>): this {
    if (keys.length === 0) return this
    for (const [key] of this.entries()) {
      if (keys.includes(key)) continue
      delete this.object[key]
    }
    return this
  }

  /**
   * Removes entries matching at least one of the provided keys.
  */
  public delete (...keys: Array<string>): this {
    if (keys.length === 0) return this
    for (const key of keys) {
      delete this.object[key]
    }
    return this
  }

  /**
   * Keeps entries matching at least one of the provided values and removes the rest.
  */
  public retainValues (...values: Array<V>): this {
    if (values.length === 0) return this
    for (const key of this.keys()) {
      if (values.includes(this.object[key])) continue
      delete this.object[key]
    }
    return this
  }

  /**
   * Removes entries matching at least one of the provided values.
  */
  public deleteValues (...values: Array<V>): this {
    if (values.length === 0) return this
    for (const key of this.keys()) {
      if (!values.includes(this.object[key])) continue
      delete this.object[key]
    }
    return this
  }

  /**
   * Combines the dictionary with another object, overwriting duplicate entries and adding new ones.
  */
  public merge (dictionary: Record<string, V> | Dictionary<V>): this {
    const entries = (dictionary instanceof Dictionary) ? dictionary.entries() : Object.entries(dictionary)
    for (const [key, value] of entries) {
      this.object[key] = value
    }
    return this
  }

  /**
   * Combines the dictionary with another object, adding new entries and ignoring duplicates.
  */
  public mergeDifference (dictionary: Record<string, V> | Dictionary<V>): this {
    const entries = (dictionary instanceof Dictionary) ? dictionary.entries() : Object.entries(dictionary)
    for (const [key, value] of entries) {
      if (this.object[key] !== undefined) continue
      this.object[key] = value
    }
    return this
  }

  /**
   * Combines the dictionary with another object, overwriting only the duplicate entries.
  */
  public mergeIntersection (dictionary: Record<string, V> | Dictionary<V>): this {
    const entries = (dictionary instanceof Dictionary) ? dictionary.entries() : Object.entries(dictionary)
    for (const [key, value] of entries) {
      if (this.object[key] === undefined) continue
      this.object[key] = value
    }
    return this
  }

  /**
   * Combines the dictionary with another object, adding new entries and removing duplicates.
  */
  public difference (dictionary: Record<string, V> | Dictionary<V>): this {
    const entries = (dictionary instanceof Dictionary) ? dictionary.entries() : Object.entries(dictionary)
    for (const [key, value] of entries) {
      if (this.object[key] !== undefined) {
        delete this.object[key]
        continue
      }
      this.object[key] = value
    }
    return this
  }

  /**
   * Combines the dictionary with another object, retaining only the duplicate entries and removing the rest.
  */
  public intersection (dictionary: Record<string, V> | Dictionary<V>): this {
    const queue = new Set(this.keys())
    const entries = (dictionary instanceof Dictionary) ? dictionary.entries() : Object.entries(dictionary)
    for (const [key, value] of entries) {
      if (this.object[key] === undefined) continue
      this.object[key] = value
      queue.delete(key)
    }
    for (const key of queue) {
      delete this.object[key]
    }
    return this
  }

  /**
   * Executes a provided function for each entry in the dictionary.
  */
  public forEach (callback: (value: V, key: string, dictionary: this) => void): void {
    for (const [key, value] of this.entries()) {
      callback(value, key, this)
    }
  }

  /**
   * Returns `true` if at least one entry satisfies the provided condition, otherwise `false`.
  */
  public some (callback: (value: V, key: string, dictionary: this) => boolean): boolean {
    for (const [key, value] of this.entries()) {
      const condition = callback(value, key, this)
      if (!condition) continue
      return true
    }
    return false
  }

  /**
   * Returns `true` if all entries satisfy the provided condition, otherwise `false`.
  */
  public every (callback: (value: V, key: string, dictionary: this) => boolean): boolean {
    for (const [key, value] of this.entries()) {
      const condition = callback(value, key, this)
      if (condition) continue
      return false
    }
    return true
  }

  /**
   * Returns one of the entries that satisfies the provided condition, or `undefined` if none is found.
  */
  public find (callback: (value: V, key: string, dictionary: this) => boolean): ([string, V] | undefined) {
    for (const [key, value] of this.entries()) {
      const condition = callback(value, key, this)
      if (!condition) continue
      return [key, value]
    }
    return undefined
  }

  /**
   * Returns the number of entries that satisfy the provided condition.
  */
  public count (callback: (value: V, key: string, dictionary: this) => boolean): number {
    let count = 0
    for (const [key, value] of this.entries()) {
      const condition = callback(value, key, this)
      if (!condition) continue
      count++
    }
    return count
  }

  /**
   * Applies a cumulative function to all dictionary entries, returning the accumulated result.
  */
  public reduce <U> (callback: (previous: U, value: V, key: string, dictionary: this) => U, initial: U): U {
    let result = initial
    for (const [key, value] of this.entries()) {
      result = callback(result, value, key, this)
    }
    return result
  }

  /**
   * Filters the dictionary, removing entries that do not satisfy the provided condition.
  */
  public filter (callback: (value: V, key: string, dictionary: this) => boolean): this {
    for (const [key, value] of this.entries()) {
      const condition = callback(value, key, this)
      if (condition) continue
      delete this.object[key]
    }
    return this
  }

  /**
   * Returns a new `Dictionary`, mapping each entry to a new value based on the provided function.
  */
  public map <V2> (callback: (value: V, key: string, dictionary: this) => (V2 | undefined)): Dictionary<V2> {
    const result: Record<string, V2> = {}
    for (const [key, value] of this.entries()) {
      const newValue = callback(value, key, this)
      if (newValue === undefined) continue
      result[key] = newValue
    }
    return new Dictionary(result)
  }

  /**
   * Transforms the keys of all dictionary entries based on the provided function.
  */
  public transformKeys (callback: (value: V, key: string, dictionary: this) => (string | undefined)): this {
    for (const [key, value] of this.entries()) {
      const newKey = callback(value, key, this)
      delete this.object[key]
      if (newKey === undefined) continue
      this.object[newKey] = value
    }
    return this
  }

  /**
   * Transforms the values of all dictionary entries based on the provided function.
  */
  public transformValues (callback: (value: V, key: string, dictionary: this) => (V | undefined)): this {
    for (const [key, value] of this.entries()) {
      const newValue = callback(value, key, this)
      if (newValue === undefined) {
        delete this.object[key]
        continue
      }
      this.object[key] = newValue
    }
    return this
  }

  /**
   * Transforms both keys and values of all dictionary entries based on the provided function.
  */
  public transformEntries (callback: (value: V, key: string, dictionary: this) => ([string, V] | undefined)): this {
    for (const [key, value] of this.entries()) {
      const newEntry = callback(value, key, this)
      delete this.object[key]
      if (newEntry === undefined) continue
      const [newKey, newValue] = newEntry
      this.object[newKey] = newValue
    }
    return this
  }

}
