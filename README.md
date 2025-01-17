# Dictionary JS

A dictionary is defined as an object containing an indefinite number of properties (entries), all of which share values of the same data type. The `Dictionary` class allows you to manipulate these dictionaries in a manner similar to arrays.

## Dictionary Class

The `Dictionary` class is designed to work with dictionaries as a unique element, where all changes made to the dictionary will be reflected in real time.

## Constructor

You can create a new `Dictionary` instance in three different ways:

**1.** Creating an empty dictionary by passing no parameters.

```typescript
const dictionary = new Dictionary<number>();
// dictionary: {}
```

**2.** Copying entries from a `Record<string, any>` object.<br/>
_Note: The original object will remain unmodified._

```typescript
const dictionary = new Dictionary<number>({ a: 1, b: 2, c: 3 });
// dictionary: { a: 1, b: 2, c: 3 }
```

**3.** Copying entries from a `Array<[string, any]>` object.<br/>
_Note: The original array will remain unmodified._

```typescript
const array = [['a', 1], ['b', 2], ['c', 3]];
const dictionary = new Dictionary<number>(array);
// dictionary: { a: 1, b: 2, c: 3 }
```

## Instance Methods

The following methods are available on a `Dictionary` instance:

| method                                    | description                                                                                                   |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| [`record`](#record)                       | Returns a `Record` containing all current dictionary entries.                                                 |
| [`keys`](#keys)                           | Returns an `Array` containing the keys of all dictionary entries.                                             |
| [`values`](#values)                       | Returns an `Array` containing the values of all dictionary entries.                                           |
| [`entries`](#entries)                     | Returns an `Array` containing the key-value pairs of all dictionary entries.                                  |
| [`size`](#size)                           | Returns the total number of entries in the dictionary.                                                        |
| [`get`](#get)                             | Returns the value associated with a specific key in the dictionary.                                           |
| [`set`](#set)                             | Assigns a value to a specific key in the dictionary.                                                          |
| [`rename`](#rename)                       | Renames the key of a specific dictionary entry.                                                               |
| [`random`](#random)                       | Returns a random key-value pair from the dictionary.                                                          |
| [`copy`](#copy)                           | Creates and returns a new `Dictionary` instance containing a copy of all entries from the current dictionary. |
| [`has`](#has)                             | Returns `true` if the specified keys exist in the dictionary, otherwise returns `false`.                      |
| [`hasOneOf`](#hasoneof)                   | Returns `true` if at least one of the specified keys exists in the dictionary, otherwise returns `false`.     |
| [`includes`](#includes)                   | Returns `true` if all specified values exist in the dictionary, otherwise returns `false`.                    |
| [`includesOneOf`](#includesoneof)         | Returns `true` if at least one of the specified values exists in the dictionary, otherwise returns `false`.   |
| [`clear`](#clear)                         | Removes all entries from the dictionary.                                                                      |
| [`retain`](#retain)                       | Keeps entries matching at least one of the provided keys and removes the rest.                                |
| [`delete`](#delete)                       | Removes entries matching at least one of the provided keys.                                                   |
| [`retainValues`](#retainvalues)           | Keeps entries matching at least one of the provided values and removes the rest.                              |
| [`deleteValues`](#deletevalues)           | Removes entries matching at least one of the provided values.                                                 |
| [`merge`](#merge)                         | Combines the dictionary with another object, overwriting duplicate entries and adding new ones.               |
| [`mergeDifference`](#mergedifference)     | Combines the dictionary with another object, adding new entries and ignoring duplicates.                      |
| [`mergeIntersection`](#mergeintersection) | Combines the dictionary with another object, overwriting only the duplicate entries.                          |
| [`difference`](#difference)               | Combines the dictionary with another object, adding new entries and removing duplicates.                      |
| [`intersection`](#intersection)           | Combines the dictionary with another object, retaining only the duplicate entries and removing the rest.      |
| [`forEach`](#foreach)                     | Executes a provided function for each entry in the dictionary.                                                |
| [`some`](#some)                           | Returns `true` if at least one entry satisfies the provided condition, otherwise `false`.                     |
| [`every`](#every)                         | Returns `true` if all entries satisfy the provided condition, otherwise `false`.                              |
| [`find`](#find)                           | Returns one of the entries that satisfies the provided condition, or `undefined` if none is found.            |
| [`count`](#count)                         | Returns the number of entries that satisfy the provided condition.                                            |
| [`reduce`](#reduce)                       | Applies a cumulative function to all dictionary entries, returning the accumulated result.                    |
| [`filter`](#filter)                       | Filters the dictionary, removing entries that do not satisfy the provided condition.                          |
| [`map`](#map)                             | Returns a new `Dictionary`, mapping each entry to a new value based on the provided function.                 |
| [`transformKeys`](#transformkeys)         | Transforms the keys of all dictionary entries based on the provided function.                                 |
| [`transformValues`](#transformvalues)     | Transforms the values of all dictionary entries based on the provided function.                               |
| [`transformEntries`](#transformentries)   | Transforms both keys and values of all dictionary entries based on the provided function.                     |

---

### **`record`**

Returns a `Record` containing all current dictionary entries.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
const result = dictionary.record();
// result: { a: 1, b: 2, c: 3 }
```

### `keys`

Returns an `Array` containing the keys of all dictionary entries.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
const result = dictionary.keys();
// result: ['a', 'b', 'c']
```

### `values`

Returns an `Array` containing the values of all dictionary entries.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
const result = dictionary.values();
// result: [1, 2, 3]
```

### `entries`

Returns an `Array` containing the key-value pairs of all dictionary entries.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
const result = dictionary.entries();
// result: [['a', 1], ['b', 2], ['c', 3]]
```

### `size`

Returns the total number of entries in the dictionary.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
const result = dictionary.size();
// result: 3
```

### `get`

Returns the value associated with a specific key in the dictionary.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
const result = dictionary.get('a');
// result: 1
```

If the key does not exist, returns `undefined`.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
const result = dictionary.get('d');
// result: undefined
```

### `set`

Assigns a value to a specific key in the dictionary.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
dictionary.set('d', 4);
// dictionary: { a: 1, b: 2, c: 3, d: 4 }
```

If the key already exists, its value is overwritten.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
dictionary.set('a', 4);
// dictionary: { a: 4, b: 2, c: 3 }
```

### `rename`

Renames the key of a specific dictionary entry.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
dictionary.rename('a', 'x');
// dictionary: { x: 1, b: 2, c: 3 }
```

By default, renaming to an existing key is not allowed.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
dictionary.rename('a', 'c');
// dictionary: { a: 1, b: 2, c: 3 }
```

To allow overwriting, set the `overwrite` parameter to `true`.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
dictionary.rename('a', 'c', true);
// dictionary: { c: 1, b: 2, c: 3 }
```

### `random`

Returns a random key-value pair from the dictionary.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
const result = dictionary.random();
// result: ['b', 2]
```

Returns `undefined` if the dictionary is empty.

```typescript
const dictionary = new Dictionary({});
const result = dictionary.random();
// result: undefined
```

### `copy`

Creates and returns a new `Dictionary` instance containing a copy of all entries from the current dictionary.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
const result = dictionary.copy();
// result: { a: 1, b: 2, c: 3 }
```

### `has`

Returns `true` if the specified keys exist in the dictionary, otherwise returns `false`.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
const result = dictionary.has('a', 'b', 'x');
// result: false
```

### `hasOneOf`

Returns `true` if at least one of the specified keys exists in the dictionary, otherwise returns `false`.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
const result = dictionary.hasOneOf('a', 'b', 'x');
// result: true
```

### `includes`

Returns `true` if all specified values exist in the dictionary, otherwise returns `false`.<br/>
_Comparison is performed using the `===` operator._

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
const result = dictionary.includes(1, 2, 4);
// result: false
```

### `includesOneOf`

Returns `true` if at least one of the specified values exists in the dictionary, otherwise returns `false`.<br/>
_Comparison is performed using the `===` operator._

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
const result = dictionary.includesOneOf(1, 2, 4);
// result: true
```

### `clear`

Removes all entries from the dictionary.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
dictionary.clear();
// dictionary: {}
```

### `retain`

Keeps entries matching at least one of the provided keys and removes the rest.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
dictionary.retain('a', 'b');
// dictionary: { a: 1, b: 2 }
```

### `delete`

Removes entries matching at least one of the provided keys.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
dictionary.delete('a', 'b');
// dictionary: { c: 3 }
```

### `retainValues`

Keeps entries matching at least one of the provided values and removes the rest.<br/>
_Comparison is performed using the `===` operator._

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
dictionary.retainValues(1, 2);
// dictionary: { a: 1, b: 2 }
```

### `deleteValues`

Removes entries matching at least one of the provided values.<br/>
_Comparison is performed using the `===` operator._

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
dictionary.deleteValues(1, 2);
// dictionary: { c: 3 }
```

### `merge`

Combines the dictionary with another object, overwriting duplicate entries and adding new ones.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
dictionary.merge({ c: 30, d: 40, e: 50 });
// dictionary: { a: 1, b: 2, c: 30, d: 40, e: 50 }
```

### `mergeDifference`

Combines the dictionary with another object, adding new entries and ignoring duplicates.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
dictionary.mergeDifference({ c: 30, d: 40, e: 50 });
// dictionary: { a: 1, b: 2, c: 3, d: 40, e: 50 }
```

### `mergeIntersection`

Combines the dictionary with another object, overwriting only the duplicate entries.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
dictionary.mergeIntersection({ c: 30, d: 40, e: 50 });
// dictionary: { a: 1, b: 2, c: 30 }
```

### `difference`

Combines the dictionary with another object, adding new entries and removing duplicates.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
dictionary.difference({ c: 30, d: 40, e: 50 });
// dictionary: { a: 1, b: 2, d: 40, e: 50 }
```

### `intersection`

Combines the dictionary with another object, retaining only the duplicate entries and removing the rest.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
dictionary.intersection({ c: 30, d: 40, e: 50 });
// dictionary: { c: 30 }
```

### `forEach`

Executes a provided function for each entry in the dictionary.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
dictionary.forEach((value, key) => {
  console.log(value, key);
});
// output: 1 a / 2 b / 3 c
```

### `some`

Returns `true` if at least one entry satisfies the provided condition, otherwise `false`.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
const result = dictionary.some((value, key) => {
  return value % 2 !== 0;
});
// result: true
```

### `every`

Returns `true` if all entries satisfy the provided condition, otherwise `false`.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
const result = dictionary.every((value, key) => {
  return value % 2 !== 0;
});
// result: false
```

### `find`

Returns one of the entries that satisfies the provided condition, or `undefined` if none is found.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
const result = dictionary.find((value, key) => {
  return value % 2 !== 0;
});
// result: ['a', 1]
```

### `count`

Returns the number of entries that satisfy the provided condition.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
const result = dictionary.count((value, key) => {
  return value % 2 !== 0;
});
// result: 2
```

### `reduce`

Applies a cumulative function to all dictionary entries, returning the accumulated result.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
const result = dictionary.reduce((previous, value, key) => {
  return previous + value;
}, 1);
// result: 7
```

### `filter`

Filters the dictionary, removing entries that do not satisfy the provided condition.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
dictionary.filter((value, key) => {
  return value % 2 !== 0;
});
// dictionary: { a: 1, c: 3 }
```

### `map`

Returns a new `Dictionary`, mapping each entry to a new value based on the provided function.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
const result = dictionary.map((value, key) => {
  return value * 100;
});
// result: { a: 100, b: 200, c: 300 }
```

To filter entries, return `undefined` in the callback function.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
const result = dictionary.map((value, key) => {
  if (value % 2 === 0) return undefined;
  return value * 100;
});
// result: { a: 100, c: 300 }
```

### `transformKeys`

Transforms the keys of all dictionary entries based on the provided function.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
dictionary.transformKeys((value, key) => {
  return key.toUpperCase();
});
// dictionary: { A: 1, B: 2, C: 3 }
```

To filter entries, return `undefined` in the callback function.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
dictionary.transformKeys((value, key) => {
  if (value % 2 === 0) return undefined;
  return key.toUpperCase();
});
// dictionary: { A: 1, C: 3 }
```

**Warning:** This method may overwrite an existing entry if the returned key matches a key already present in the dictionary. Additionally, the order of overwriting is not guaranteed, as dictionary entries are unordered.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
dictionary.transformKeys((value, key) => {
  return value % 2 === 0 ? 'EVEN' : 'ODD';
});
// dictionary: { ODD: 3, EVEN: 2 }
```

### `transformValues`

Transforms the values of all dictionary entries based on the provided function.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
dictionary.transformValues((value, key) => {
  return value * 100;
});
// dictionary: { a: 100, b: 200, c: 300 }
```

To filter entries, return `undefined` in the callback function.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
dictionary.transformValues((value, key) => {
  if (value % 2 === 0) return undefined;
  return value * 100;
});
// dictionary: { a: 100, c: 300 }
```

### `transformEntries`

Transforms both keys and values of all dictionary entries based on the provided function.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
dictionary.transformEntries((value, key) => {
  const newKey = key.toUpperCase();
  const newValue = value * 100;
  return [newKey, newValue];
});
// dictionary: { A: 100, B: 200, C: 300 }
```

To filter entries, return `undefined` in the callback function.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
dictionary.transformEntries((value, key) => {
  if (value % 2 === 0) return undefined;
  const newKey = key.toUpperCase();
  const newValue = value * 100;
  return [newKey, newValue];
});
// dictionary: { A: 100, C: 300 }
```

**Warning:** This method may overwrite an existing entry if the returned key matches a key already present in the dictionary. Additionally, the order of overwriting is not guaranteed, as dictionary entries are unordered.

```typescript
const dictionary = new Dictionary({ a: 1, b: 2, c: 3 });
dictionary.transformEntries((value, key) => {
  const newKey = value % 2 === 0 ? 'EVEN' : 'ODD';
  const newValue = value * 100;
  return [newKey, newValue];
});
// dictionary: { ODD: 300, EVEN: 200 }
```
