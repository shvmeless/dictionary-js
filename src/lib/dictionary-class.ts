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

}
