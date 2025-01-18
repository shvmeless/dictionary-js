// eslint-disable-next-line @typescript-eslint/explicit-function-return-type -- ignore
export function dictionary<V> (object: Record<string, V>) {
  object = { ...object }

  // MODULE
  return {

    /**
     * Returns an `Array` containing the keys of all dictionary entries.
    */
    keys (): Array<string> {
      return Object.keys(object)
    },

    /**
     * Returns an `Array` containing the values of all dictionary entries.
    */
    values (): Array<V> {
      return Object.values(object)
    },

    /**
     * Returns an `Array` containing the key-value pairs of all dictionary entries.
    */
    entries (): Array<[string, V]> {
      return Object.entries(object)
    },

    /**
     * Returns the total number of entries in the dictionary.
    */
    size (): number {
      return Object.keys(object).length
    },

    /**
     * Returns the value associated with a specific key in the dictionary.
    */
    get (key: string): V | undefined {
      return object[key]
    },

    /**
     * Returns a copy of the dictionary and assigns a value to a specific key.
    */
    set (key: string, value: V): Record<string, V> {
      object[key] = value
      return object
    },

    /**
     * Returns a copy of the dictionary and renames the key of a specific dictionary entry.
    */
    rename (key: string, newKey: string): Record<string, V> {
      const value = object[key]
      if (value === undefined) return object
      delete object[key]
      object[newKey] = value
      return object
    },

    /**
     * Returns a random key-value pair from the dictionary.
    */
    random (): [string, V] | undefined {
      const entries = Object.entries(object)
      const index = Math.floor(Math.random() * entries.length)
      return entries[index]
    },

    /**
     * Returns `true` if the specified keys exist in the dictionary, otherwise returns `false`.
    */
    has (...search: Array<string>): boolean {
      if (search.length === 0) return false
      for (const key of search) {
        const item = object[key]
        if (item !== undefined) continue
        return false
      }
      return true
    },

    /**
     * Returns `true` if at least one of the specified keys exists in the dictionary, otherwise returns `false`.
    */
    hasOneOf (...search: Array<string>): boolean {
      if (search.length === 0) return false
      for (const key of search) {
        const item = object[key]
        if (item === undefined) continue
        return true
      }
      return false
    },

    /**
     * Returns `true` if all specified values exist in the dictionary, otherwise returns `false`.
    */
    includes (...search: Array<V>): boolean {
      if (search.length === 0) return false
      for (const value of this.values()) {
        const index = search.indexOf(value)
        if (index < 0) continue
        search.splice(index, 1)
      }
      return (search.length === 0)
    },

    /**
     * Returns `true` if at least one of the specified values exists in the dictionary, otherwise returns `false`.
    */
    includesOneOf (...search: Array<V>): boolean {
      if (search.length === 0) return false
      for (const value of this.values()) {
        if (!search.includes(value)) continue
        return true
      }
      return false
    },

    /**
     * Returns a copy of the dictionary, keeps entries matching at least one of the provided keys and removes the rest.
    */
    retain (...keys: Array<string>): Record<string, V> {
      if (keys.length === 0) return object
      for (const [key] of Object.entries(object)) {
        if (keys.includes(key)) continue
        delete object[key]
      }
      return object
    },

    /**
     * Returns a copy of the dictionary, removes entries matching at least one of the provided keys.
    */
    delete (...keys: Array<string>): Record<string, V> {
      if (keys.length === 0) return object
      for (const key of keys) {
        delete object[key]
      }
      return object
    },

    /**
     * Returns a copy of the dictionary, keeps entries matching at least one of the provided values and removes the rest.
    */
    retainValues (...values: Array<V>): Record<string, V> {
      if (values.length === 0) return object
      for (const key of this.keys()) {
        if (values.includes(object[key])) continue
        delete object[key]
      }
      return object
    },

    /**
     * Returns a copy of the dictionary, removes entries matching at least one of the provided values.
    */
    deleteValues (...values: Array<V>): Record<string, V> {
      if (values.length === 0) return object
      for (const key of this.keys()) {
        if (!values.includes(object[key])) continue
        delete object[key]
      }
      return object
    },

    /**
     * Returns the combination of the dictionary with another dictionary, overwriting duplicate entries and adding new ones.
    */
    merge (dictionary: Record<string, V>): Record<string, V> {
      for (const [key, value] of Object.entries(dictionary)) {
        object[key] = value
      }
      return object
    },

    /**
     * Returns the combination of the dictionary with another dictionary, adding new entries and ignoring duplicates.
    */
    mergeDifference (dictionary: Record<string, V>): Record<string, V> {
      for (const [key, value] of Object.entries(dictionary)) {
        if (object[key] !== undefined) continue
        object[key] = value
      }
      return object
    },

    /**
     * Returns the combination of the dictionary with another dictionary, overwriting only the duplicate entries.
    */
    mergeIntersection (dictionary: Record<string, V>): Record<string, V> {
      for (const [key, value] of Object.entries(dictionary)) {
        if (object[key] === undefined) continue
        object[key] = value
      }
      return object
    },

    /**
     * Returns the combination of the dictionary with another dictionary, adding new entries and removing duplicates.
    */
    difference (dictionary: Record<string, V>): Record<string, V> {
      for (const [key, value] of Object.entries(dictionary)) {
        if (object[key] !== undefined) {
          delete object[key]
          continue
        }
        object[key] = value
      }
      return object
    },

    /**
     * Returns the combination of the dictionary with another dictionary, retaining only the duplicate entries and removing the rest.
    */
    intersection (dictionary: Record<string, V>): Record<string, V> {
      const queue = new Set(this.keys())
      for (const [key, value] of Object.entries(dictionary)) {
        if (object[key] === undefined) continue
        object[key] = value
        queue.delete(key)
      }
      for (const key of queue) {
        delete object[key]
      }
      return object
    },

    /**
     * Executes a provided function for each entry in the dictionary.
    */
    forEach (callback: (value: V, key: string, dictionary: Record<string, V>) => void): void {
      for (const [key, value] of Object.entries(object)) {
        callback(value, key, object)
      }
    },

    /**
     * Returns `true` if at least one entry satisfies the provided condition, otherwise `false`.
    */
    some (callback: (value: V, key: string, dictionary: Record<string, V>) => boolean): boolean {
      for (const [key, value] of Object.entries(object)) {
        const condition = callback(value, key, object)
        if (!condition) continue
        return true
      }
      return false
    },

    /**
     * Returns `true` if all entries satisfy the provided condition, otherwise `false`.
    */
    every (callback: (value: V, key: string, dictionary: Record<string, V>) => boolean): boolean {
      for (const [key, value] of Object.entries(object)) {
        const condition = callback(value, key, object)
        if (condition) continue
        return false
      }
      return true
    },

    /**
     * Returns one of the entries that satisfies the provided condition, or `undefined` if none is found.
    */
    find (callback: (value: V, key: string, dictionary: Record<string, V>) => boolean): ([string, V] | undefined) {
      for (const [key, value] of Object.entries(object)) {
        const condition = callback(value, key, object)
        if (!condition) continue
        return [key, value]
      }
      return undefined
    },

    /**
     * Returns the number of entries that satisfy the provided condition.
    */
    count (callback: (value: V, key: string, dictionary: Record<string, V>) => boolean): number {
      let count = 0
      for (const [key, value] of Object.entries(object)) {
        const condition = callback(value, key, object)
        if (!condition) continue
        count++
      }
      return count
    },

    /**
     * Applies a cumulative function to all dictionary entries, returning the accumulated result.
    */
    reduce <U> (callback: (previous: U, value: V, key: string, dictionary: Record<string, V>) => U, initial: U): U {
      let result = initial
      for (const [key, value] of Object.entries(object)) {
        result = callback(result, value, key, object)
      }
      return result
    },

    /**
     * Returns a copy of the dictionary, removing entries that do not satisfy the provided condition.
    */
    filter (callback: (value: V, key: string, dictionary: Record<string, V>) => boolean): Record<string, V> {
      for (const [key, value] of Object.entries(object)) {
        const condition = callback(value, key, object)
        if (condition) continue
        delete object[key]
      }
      return object
    },

    /**
     * Returns the result of transforming the keys of the dictionary entries based on the provided function.
    */
    transformKeys (callback: (value: V, key: string, dictionary: Record<string, V>) => (string | undefined)): Record<string, V> {
      for (const [key, value] of Object.entries(object)) {
        const newKey = callback(value, key, object)
        delete object[key]
        if (newKey === undefined) continue
        object[newKey] = value
      }
      return object
    },

    /**
     * Returns the result of transforming the values of the dictionary entries based on the provided function.
    */
    transformValues <V2> (callback: (value: V, key: string, dictionary: Record<string, V>) => (V2 | undefined)): Record<string, V2> {
      const result: Record<string, V2> = {}
      for (const [key, value] of Object.entries(object)) {
        const newValue = callback(value, key, object)
        if (newValue === undefined) continue
        result[key] = newValue
      }
      return result
    },

    /**
     * Returns the result of transforming both the keys and values of the dictionary entries based on the provided function.
    */
    transformEntries <V2> (callback: (value: V, key: string, dictionary: Record<string, V>) => ([string, V2] | undefined)): Record<string, V2> {
      const result: Record<string, V2> = {}
      for (const [key, value] of Object.entries(object)) {
        const newEntry = callback(value, key, object)
        if (newEntry === undefined) continue
        const [newKey, newValue] = newEntry
        result[newKey] = newValue
      }
      return result
    },

  }
}
