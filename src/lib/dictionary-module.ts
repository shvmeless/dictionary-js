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

  }
}
