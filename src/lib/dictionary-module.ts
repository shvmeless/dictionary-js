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
     * Assigns a value to a specific key in the dictionary.
    */
    set (key: string, value: V): Record<string, V> {
      object[key] = value
      return object
    },

    /**
     * Renames the key of a specific dictionary entry.
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
      const entries = this.entries()
      const index = Math.floor(Math.random() * entries.length)
      return entries[index]
    },

    /**
     * Creates and returns a new `Dictionary` instance containing a copy of all entries from the current dictionary
    */
    copy (): Record<string, V> {
      const copy: Record<string, V> = {}
      for (const [key, value] of this.entries()) {
        copy[key] = value
      }
      return copy
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

  }
}
