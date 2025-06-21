### Hashtable and HashMaps


### Data Structure Basics:

A hashtable is a data structure that maps keys to values through the use of a hash function, which computes an index based on the key. All keys are unique. 

The average time complexities for basic operations are O(1) for insertion, deletion, and search. Advantages of this strucutre is quick insertion, deletion and search. It's a structure that's used for efficiency because the above operations are performed in constant time. 

### Keywords
These words are usually a hint that the problem you are solving could be solved with a hashmap: UNIQUE, duplicate, frequency, count anagram, exists, lookup, pair, sum.  


### Collision Resolution Techniques
- Chaining
- Open Addrressing 

### Load Factor
- The ratio of the number of elements to the size of the hashtable. A higher load factor can lead to more collisions, degrading performance.
- Hashtables typically resize (rehash) when a certain load factor threshold is exceeded.


### Common JS Methods for objects 
- `Object.keys(myObject)` retrieves all keys
- `Object.values(myObject)` retrieves all values
- `Object.entries()` retrieves both keys and values as array pairs 
- Also possible to use 
