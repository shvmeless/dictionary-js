# Dictionary Module

The `dictionary` module is an alternative to the` dictionary` class, which provides a series of functions to manipulate dictionaries more independent and flexible.

# Functions

The following functions are available on the `dictionary` module:

| method                                    | description                                                                                                                    |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [`keys`](#keys)                           | Returns an `Array` containing the keys of all dictionary entries.                                                              |
| [`values`](#values)                       | Returns an `Array` containing the values of all dictionary entries.                                                            |
| [`entries`](#entries)                     | Returns an `Array` containing the key-value pairs of all dictionary entries.                                                   |
| [`size`](#size)                           | Returns the total number of entries in the dictionary.                                                                         |
| [`get`](#get)                             | Returns the value associated with a specific key in the dictionary.                                                            |
| [`set`](#set)                             | Returns a copy of the dictionary and assigns a value to a specific key.                                                        |
| [`rename`](#rename)                       | Returns a copy of the dictionary and renames the key of a specific dictionary entry.                                           |
| [`random`](#random)                       | Returns a random key-value pair from the dictionary.                                                                           |
| [`has`](#has)                             | Returns `true` if the specified keys exist in the dictionary, otherwise returns `false`.                                       |
| [`hasOneOf`](#hasoneof)                   | Returns `true` if at least one of the specified keys exists in the dictionary, otherwise returns `false`.                      |
| [`includes`](#includes)                   | Returns `true` if all specified values exist in the dictionary, otherwise returns `false`.                                     |
| [`includesOneOf`](#includesoneof)         | Returns `true` if at least one of the specified values exists in the dictionary, otherwise returns `false`.                    |
| [`retain`](#retain)                       | Returns a copy of the dictionary, keeps entries matching at least one of the provided keys and removes the rest.               |
| [`delete`](#delete)                       | Returns a copy of the dictionary, removes entries matching at least one of the provided keys.                                  |
| [`retainValues`](#retainvalues)           | Returns a copy of the dictionary, keeps entries matching at least one of the provided values and removes the rest.             |
| [`deleteValues`](#deletevalues)           | Returns a copy of the dictionary, removes entries matching at least one of the provided values.                                |
| [`merge`](#merge)                         | Returns the combination of the dictionary with another dictionary, overwriting duplicate entries and adding new ones.          |
| [`mergeDifference`](#mergedifference)     | Returns the combination of the dictionary with another dictionary, adding new entries and ignoring duplicates.                 |
| [`mergeIntersection`](#mergeintersection) | Returns the combination of the dictionary with another dictionary, overwriting only the duplicate entries.                     |
| [`difference`](#difference)               | Returns the combination of the dictionary with another dictionary, adding new entries and removing duplicates.                 |
| [`intersection`](#intersection)           | Returns the combination of the dictionary with another dictionary, retaining only the duplicate entries and removing the rest. |
| [`forEach`](#foreach)                     | Executes a provided function for each entry in the dictionary.                                                                 |
| [`some`](#some)                           | Returns `true` if at least one entry satisfies the provided condition, otherwise `false`.                                      |
| [`every`](#every)                         | Returns `true` if all entries satisfy the provided condition, otherwise `false`.                                               |
| [`find`](#find)                           | Returns one of the entries that satisfies the provided condition, or `undefined` if none is found.                             |
| [`count`](#count)                         | Returns the number of entries that satisfy the provided condition.                                                             |
| [`reduce`](#reduce)                       | Applies a cumulative function to all dictionary entries, returning the accumulated result.                                     |
| [`filter`](#filter)                       | Returns a copy of the dictionary, removing entries that do not satisfy the provided condition.                                 |
| [`transformKeys`](#transformkeys)         | Returns the result of transforming the keys of the dictionary entries based on the provided function.                          |
| [`transformValues`](#transformvalues)     | Returns the result of transforming the values of the dictionary entries based on the provided function.                        |
| [`transformEntries`](#transformentries)   | Returns the result of transforming both the keys and values of the dictionary entries based on the provided function.          |

---

### `keys`

Returns an `Array` containing the keys of all dictionary entries.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).keys();
// result: ['a', 'b', 'c']
```

### `values`

Returns an `Array` containing the values of all dictionary entries.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).values();
// result: [1, 2, 3]
```

### `entries`

Returns an `Array` containing the key-value pairs of all dictionary entries.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).entries();
// result: [['a', 1], ['b', 2], ['c', 3]]
```

### `size`

Returns the total number of entries in the dictionary.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).size();
// result: 3
```

### `get`

Returns the value associated with a specific key in the dictionary.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).get('a');
// result: 1
```

If the key does not exist, returns `undefined`.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).get('d');
// result: undefined
```

### `set`

Returns a copy of the dictionary and assigns a value to a specific key.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).set('d', 4);
// result: { a: 1, b: 2, c: 3, d: 4 }
```

If the key already exists, its value is overwritten.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).set('a', 4);
// result: { a: 4, b: 2, c: 3 }
```

### `rename`

Returns a copy of the dictionary and renames the key of a specific dictionary entry.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).rename('a', 'x');
// result: { x: 1, b: 2, c: 3 }
```

By default, renaming to an existing key is not allowed.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).rename('a', 'c');
// result: { a: 1, b: 2, c: 3 }
```

To allow overwriting, set the `overwrite` parameter to `true`.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).rename('a', 'c', true);
// result: { c: 1, b: 2, c: 3 }
```

### `random`

Returns a random key-value pair from the dictionary.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).random();
// result: ['b', 2]
```

Returns `undefined` if the dictionary is empty.

```typescript
const object = {};
const result = dictionary(object).random();
// result: undefined
```

### `has`

Returns `true` if the specified keys exist in the dictionary, otherwise returns `false`.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).has('a', 'b', 'x');
// result: false
```

### `hasOneOf`

Returns `true` if at least one of the specified keys exists in the dictionary, otherwise returns `false`.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).hasOneOf('a', 'b', 'x');
// result: true
```

### `includes`

Returns `true` if all specified values exist in the dictionary, otherwise returns `false`.
_Comparison is performed using the `===` operator._

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).includes(1, 2, 4);
// result: false
```

### `includesOneOf`

Returns `true` if at least one of the specified values exists in the dictionary, otherwise returns `false`.
_Comparison is performed using the `===` operator._

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).includesOneOf(1, 2, 4);
// result: true
```

### `retain`

Returns a copy of the dictionary, keeps entries matching at least one of the provided keys and removes the rest.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).retain('a', 'b');
// result: { a: 1, b: 2 }
```

### `delete`

Returns a copy of the dictionary, removes entries matching at least one of the provided keys.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).delete('a', 'b');
// result: { c: 3 }
```

### `retainValues`

Returns a copy of the dictionary, keeps entries matching at least one of the provided values and removes the rest.
_Comparison is performed using the `===` operator._

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).retainValues(1, 2);
// result: { a: 1, b: 2 }
```

### `deleteValues`

Returns a copy of the dictionary, removes entries matching at least one of the provided values.
_Comparison is performed using the `===` operator._

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).deleteValues(1, 2);
// result: { c: 3 }
```

### `merge`

Returns the combination of the dictionary with another dictionary, overwriting duplicate entries and adding new ones.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).merge({ c: 30, d: 40, e: 50 });
// result: { a: 1, b: 2, c: 30, d: 40, e: 50 }
```

### `mergeDifference`

Returns the combination of the dictionary with another dictionary, adding new entries and ignoring duplicates.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).mergeDifference({ c: 30, d: 40, e: 50 });
// result: { a: 1, b: 2, c: 3, d: 40, e: 50 }
```

### `mergeIntersection`

Returns the combination of the dictionary with another dictionary, overwriting only the duplicate entries.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).mergeIntersection({ c: 30, d: 40, e: 50 });
// result: { a: 1, b: 2, c: 30 }
```

### `difference`

Returns the combination of the dictionary with another dictionary, adding new entries and removing duplicates.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).difference({ c: 30, d: 40, e: 50 });
// result: { a: 1, b: 2, d: 40, e: 50 }
```

### `intersection`

Returns the combination of the dictionary with another dictionary, retaining only the duplicate entries and removing the rest.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).intersection({ c: 30, d: 40, e: 50 });
// result: { c: 30 }
```

### `forEach`

Executes a provided function for each entry in the dictionary.

```typescript
const object = { a: 1, b: 2, c: 3 };
dictionary(object).forEach((value, key) => {
  console.log(value, key);
});
// output: 1 a / 2 b / 3 c
```

### `some`

Returns `true` if at least one entry satisfies the provided condition, otherwise `false`.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).some((value, key) => {
  return value % 2 !== 0;
});
// result: true
```

### `every`

Returns `true` if all entries satisfy the provided condition, otherwise `false`.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).every((value, key) => {
  return value % 2 !== 0;
});
// result: false
```

### `find`

Returns one of the entries that satisfies the provided condition, or `undefined` if none is found.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).find((value, key) => {
  return value % 2 !== 0;
});
// result: ['a', 1]
```

### `count`

Returns the number of entries that satisfy the provided condition.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).count((value, key) => {
  return value % 2 !== 0;
});
// result: 2
```

### `reduce`

Applies a cumulative function to all dictionary entries, returning the accumulated result.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).reduce((previous, value, key) => {
  return previous + value;
}, 1);
// result: 7
```

### `filter`

Returns a copy of the dictionary, removing entries that do not satisfy the provided condition.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).filter((value, key) => {
  return value % 2 !== 0;
});
// result: { a: 1, c: 3 }
```

### `transformKeys`

Returns the result of transforming the keys of the dictionary entries based on the provided function.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).transformKeys((value, key) => {
  return key.toUpperCase();
});
// result: { A: 1, B: 2, C: 3 }
```

To filter entries, return `undefined` in the callback function.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).transformKeys((value, key) => {
  if (value % 2 === 0) return undefined;
  return key.toUpperCase();
});
// result: { A: 1, C: 3 }
```

**Warning:** This method may overwrite an existing entry if the returned key matches a key already present in the dictionary. Additionally, the order of overwriting is not guaranteed, as dictionary entries are unordered.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).transformKeys((value, key) => {
  return value % 2 === 0 ? 'EVEN' : 'ODD';
});
// result: { ODD: 3, EVEN: 2 }
```

### `transformValues`

Returns the result of transforming the values of the dictionary entries based on the provided function.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).transformValues((value, key) => {
  return value * 100;
});
// result: { a: 100, b: 200, c: 300 }
```

To filter entries, return `undefined` in the callback function.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).transformValues((value, key) => {
  if (value % 2 === 0) return undefined;
  return value * 100;
});
// result: { a: 100, c: 300 }
```

### `transformEntries`

Returns the result of transforming both the keys and values of the dictionary entries based on the provided function.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).transformEntries((value, key) => {
  const newKey = key.toUpperCase();
  const newValue = value * 100;
  return [newKey, newValue];
});
// result: { A: 100, B: 200, C: 300 }
```

To filter entries, return `undefined` in the callback function.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).transformEntries((value, key) => {
  if (value % 2 === 0) return undefined;
  const newKey = key.toUpperCase();
  const newValue = value * 100;
  return [newKey, newValue];
});
// result: { A: 100, C: 300 }
```

**Warning:** This method may overwrite an existing entry if the returned key matches a key already present in the dictionary. Additionally, the order of overwriting is not guaranteed, as dictionary entries are unordered.

```typescript
const object = { a: 1, b: 2, c: 3 };
const result = dictionary(object).transformEntries((value, key) => {
  const newKey = value % 2 === 0 ? 'EVEN' : 'ODD';
  const newValue = value * 100;
  return [newKey, newValue];
});
// result: { ODD: 300, EVEN: 200 }
```
