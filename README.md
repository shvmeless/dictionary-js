# Dictionary JS

A dictionary is defined as an object containing an indefinite number of properties (entries), all of which share values of the same data type. The `Dictionary` class allows you to manipulate these dictionaries in a manner similar to arrays.

## Dictionary Class

The `Dictionary` class is designed to work with dictionaries as a unique element, where all changes made to the dictionary will be reflected in real time.

The following methods are available on a `Dictionary` instance:

| method                                    | description                                                                                                   |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| [`record`](docs/dictionary-class.md#record)                       | Returns a `Record` containing all current dictionary entries.                                                 |
| [`keys`](docs/dictionary-class.md#keys)                           | Returns an `Array` containing the keys of all dictionary entries.                                             |
| [`values`](docs/dictionary-class.md#values)                       | Returns an `Array` containing the values of all dictionary entries.                                           |
| [`entries`](docs/dictionary-class.md#entries)                     | Returns an `Array` containing the key-value pairs of all dictionary entries.                                  |
| [`size`](docs/dictionary-class.md#size)                           | Returns the total number of entries in the dictionary.                                                        |
| [`get`](docs/dictionary-class.md#get)                             | Returns the value associated with a specific key in the dictionary.                                           |
| [`set`](docs/dictionary-class.md#set)                             | Assigns a value to a specific key in the dictionary.                                                          |
| [`rename`](docs/dictionary-class.md#rename)                       | Renames the key of a specific dictionary entry.                                                               |
| [`random`](docs/dictionary-class.md#random)                       | Returns a random key-value pair from the dictionary.                                                          |
| [`copy`](docs/dictionary-class.md#copy)                           | Creates and returns a new `Dictionary` instance containing a copy of all entries from the current dictionary. |
| [`has`](docs/dictionary-class.md#has)                             | Returns `true` if the specified keys exist in the dictionary, otherwise returns `false`.                      |
| [`hasOneOf`](docs/dictionary-class.md#hasoneof)                   | Returns `true` if at least one of the specified keys exists in the dictionary, otherwise returns `false`.     |
| [`includes`](docs/dictionary-class.md#includes)                   | Returns `true` if all specified values exist in the dictionary, otherwise returns `false`.                    |
| [`includesOneOf`](docs/dictionary-class.md#includesoneof)         | Returns `true` if at least one of the specified values exists in the dictionary, otherwise returns `false`.   |
| [`clear`](docs/dictionary-class.md#clear)                         | Removes all entries from the dictionary.                                                                      |
| [`retain`](docs/dictionary-class.md#retain)                       | Keeps entries matching at least one of the provided keys and removes the rest.                                |
| [`delete`](docs/dictionary-class.md#delete)                       | Removes entries matching at least one of the provided keys.                                                   |
| [`retainValues`](docs/dictionary-class.md#retainvalues)           | Keeps entries matching at least one of the provided values and removes the rest.                              |
| [`deleteValues`](docs/dictionary-class.md#deletevalues)           | Removes entries matching at least one of the provided values.                                                 |
| [`merge`](docs/dictionary-class.md#merge)                         | Combines the dictionary with another object, overwriting duplicate entries and adding new ones.               |
| [`mergeDifference`](docs/dictionary-class.md#mergedifference)     | Combines the dictionary with another object, adding new entries and ignoring duplicates.                      |
| [`mergeIntersection`](docs/dictionary-class.md#mergeintersection) | Combines the dictionary with another object, overwriting only the duplicate entries.                          |
| [`difference`](docs/dictionary-class.md#difference)               | Combines the dictionary with another object, adding new entries and removing duplicates.                      |
| [`intersection`](docs/dictionary-class.md#intersection)           | Combines the dictionary with another object, retaining only the duplicate entries and removing the rest.      |
| [`forEach`](docs/dictionary-class.md#foreach)                     | Executes a provided function for each entry in the dictionary.                                                |
| [`some`](docs/dictionary-class.md#some)                           | Returns `true` if at least one entry satisfies the provided condition, otherwise `false`.                     |
| [`every`](docs/dictionary-class.md#every)                         | Returns `true` if all entries satisfy the provided condition, otherwise `false`.                              |
| [`find`](docs/dictionary-class.md#find)                           | Returns one of the entries that satisfies the provided condition, or `undefined` if none is found.            |
| [`count`](docs/dictionary-class.md#count)                         | Returns the number of entries that satisfy the provided condition.                                            |
| [`reduce`](docs/dictionary-class.md#reduce)                       | Applies a cumulative function to all dictionary entries, returning the accumulated result.                    |
| [`filter`](docs/dictionary-class.md#filter)                       | Filters the dictionary, removing entries that do not satisfy the provided condition.                          |
| [`map`](docs/dictionary-class.md#map)                             | Returns a new `Dictionary`, mapping each entry to a new value based on the provided function.                 |
| [`transformKeys`](docs/dictionary-class.md#transformkeys)         | Transforms the keys of all dictionary entries based on the provided function.                                 |
| [`transformValues`](docs/dictionary-class.md#transformvalues)     | Transforms the values of all dictionary entries based on the provided function.                               |
| [`transformEntries`](docs/dictionary-class.md#transformentries)   | Transforms both keys and values of all dictionary entries based on the provided function.                     |

## Dictionary Module

The `dictionary` module is an alternative to the` dictionary` class, which provides a series of functions to manipulate dictionaries more independent and flexible.

The following functions are available on the `dictionary` module:

| method                                    | description                                                                                                                    |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [`keys`](docs/dictionary-module.md#keys)                           | Returns an `Array` containing the keys of all dictionary entries.                                                              |
| [`values`](docs/dictionary-module.md#values)                       | Returns an `Array` containing the values of all dictionary entries.                                                            |
| [`entries`](docs/dictionary-module.md#entries)                     | Returns an `Array` containing the key-value pairs of all dictionary entries.                                                   |
| [`size`](docs/dictionary-module.md#size)                           | Returns the total number of entries in the dictionary.                                                                         |
| [`get`](docs/dictionary-module.md#get)                             | Returns the value associated with a specific key in the dictionary.                                                            |
| [`set`](docs/dictionary-module.md#set)                             | Returns a copy of the dictionary and assigns a value to a specific key.                                                        |
| [`rename`](docs/dictionary-module.md#rename)                       | Returns a copy of the dictionary and renames the key of a specific dictionary entry.                                           |
| [`random`](docs/dictionary-module.md#random)                       | Returns a random key-value pair from the dictionary.                                                                           |
| [`has`](docs/dictionary-module.md#has)                             | Returns `true` if the specified keys exist in the dictionary, otherwise returns `false`.                                       |
| [`hasOneOf`](docs/dictionary-module.md#hasoneof)                   | Returns `true` if at least one of the specified keys exists in the dictionary, otherwise returns `false`.                      |
| [`includes`](docs/dictionary-module.md#includes)                   | Returns `true` if all specified values exist in the dictionary, otherwise returns `false`.                                     |
| [`includesOneOf`](docs/dictionary-module.md#includesoneof)         | Returns `true` if at least one of the specified values exists in the dictionary, otherwise returns `false`.                    |
| [`retain`](docs/dictionary-module.md#retain)                       | Returns a copy of the dictionary, keeps entries matching at least one of the provided keys and removes the rest.               |
| [`delete`](docs/dictionary-module.md#delete)                       | Returns a copy of the dictionary, removes entries matching at least one of the provided keys.                                  |
| [`retainValues`](docs/dictionary-module.md#retainvalues)           | Returns a copy of the dictionary, keeps entries matching at least one of the provided values and removes the rest.             |
| [`deleteValues`](docs/dictionary-module.md#deletevalues)           | Returns a copy of the dictionary, removes entries matching at least one of the provided values.                                |
| [`merge`](docs/dictionary-module.md#merge)                         | Returns the combination of the dictionary with another dictionary, overwriting duplicate entries and adding new ones.          |
| [`mergeDifference`](docs/dictionary-module.md#mergedifference)     | Returns the combination of the dictionary with another dictionary, adding new entries and ignoring duplicates.                 |
| [`mergeIntersection`](docs/dictionary-module.md#mergeintersection) | Returns the combination of the dictionary with another dictionary, overwriting only the duplicate entries.                     |
| [`difference`](docs/dictionary-module.md#difference)               | Returns the combination of the dictionary with another dictionary, adding new entries and removing duplicates.                 |
| [`intersection`](docs/dictionary-module.md#intersection)           | Returns the combination of the dictionary with another dictionary, retaining only the duplicate entries and removing the rest. |
| [`forEach`](docs/dictionary-module.md#foreach)                     | Executes a provided function for each entry in the dictionary.                                                                 |
| [`some`](docs/dictionary-module.md#some)                           | Returns `true` if at least one entry satisfies the provided condition, otherwise `false`.                                      |
| [`every`](docs/dictionary-module.md#every)                         | Returns `true` if all entries satisfy the provided condition, otherwise `false`.                                               |
| [`find`](docs/dictionary-module.md#find)                           | Returns one of the entries that satisfies the provided condition, or `undefined` if none is found.                             |
| [`count`](docs/dictionary-module.md#count)                         | Returns the number of entries that satisfy the provided condition.                                                             |
| [`reduce`](docs/dictionary-module.md#reduce)                       | Applies a cumulative function to all dictionary entries, returning the accumulated result.                                     |
| [`filter`](docs/dictionary-module.md#filter)                       | Returns a copy of the dictionary, removing entries that do not satisfy the provided condition.                                 |
| [`transformKeys`](docs/dictionary-module.md#transformkeys)         | Returns the result of transforming the keys of the dictionary entries based on the provided function.                          |
| [`transformValues`](docs/dictionary-module.md#transformvalues)     | Returns the result of transforming the values of the dictionary entries based on the provided function.                        |
| [`transformEntries`](docs/dictionary-module.md#transformentries)   | Returns the result of transforming both the keys and values of the dictionary entries based on the provided function.          |
