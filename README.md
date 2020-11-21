[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Computer Science: Data Structures

## Prerequisites

- [CS](https://git.generalassemb.ly/ga-wdi-boston/cs)
- [CS Algorithms](https://git.generalassemb.ly/ga-wdi-boston/cs-algorithms)

## Objectives

By the end of this, developers should be able to:

1. Implement stacks and queues with arrays
1. Describe and create linked lists, binary trees, hash tables, and graphs.
1. Identify time-complexity of data structure operations

## Preparation

1. [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. Install dependencies with `npm install`.

## Data Structures

In high-level languages such as Ruby and JavaScript, we don't have to think
about exactly where and how to allocate memory for storing things like arrays
and hashes, or what algorithms are used to traverse these data structures when
we need to find or change a value. These low-level concerns are usually not
relevant to modern web development, but knowing the basics is considered a
hallmark of a good programmer, and the concepts frequently come up in interview
questions.

We will be implementing some low-level data structures and algorithms in
JavaScript, even though normally there would be no practical reason to do this.
It's important to understand that we are re-inventing the wheel to an extreme
degree here.

## Abstract data type (ADT)

An [ADT](https://en.wikipedia.org/wiki/Abstract_data_type) is a type defined by
what it does, rather than how it is implemented.  Specific implementations have
limitations not found in the ADT and must be able to create instances of the
type.

## Stack

A stack implements a last in, first out data store (LIFO).

![Stack diagram](https://git.generalassemb.ly/storage/user/3667/files/72cd03b0-e574-11e7-9d98-4699b4fb552b)

### Discussion: Stack

Stack operations:

- `isEmpty` - check to see if there are any items on a stack.
- `push` - add an item onto the top of a stack.
- `pop` - remove an item from the top of a stack and return it.

Visualizing stack implementations:

- As an [array](http://www.cs.usfca.edu/~galles/visualization/StackArray.html).
- As a [list](http://www.cs.usfca.edu/~galles/visualization/StackLL.html).

### Code Along: Implementing a stack

### Annotate along: Annotating a stack implementation

## Queue

A queue implements a first in, first out data store (FIFO).

![Queue diagram](https://git.generalassemb.ly/storage/user/3667/files/7ddf2b52-e574-11e7-9983-a128dca90b82)

### Discussion: Queue

Queue operations:

- `isEmpty` - check to see if there are any items in a queue.
- `enqueue` - add an item to the tail of a queue.
- `dequeue` - remove an item from the head of a queue and return it

Visualizing queue implementations:

- As an [array](http://www.cs.usfca.edu/~galles/visualization/QueueArray.html)
- As a [list](http://www.cs.usfca.edu/~galles/visualization/QueueLL.html)

### Lab: Implementing a queue

### Annotate along: Annotating a queue implementation

## Implementation details

Do we need `isEmpty` when implementing either ADT in
a language that has a "nothing" type  (`undefined` in JavaScript)?  Why or why not?

How should we handle the limitations of concrete implementations of either ADT?

## Research Common Data Structures

For learning about data structures, we'll break into groups, each assigned a
particular data structure and set of guiding questions. After group research is
complete, we'll compile our notes into a single study guide. Accompanying
diagrams may be made on the whiteboard.

### Research Linked Lists

1. What is a linked list?
1. What is the worst-case time-complexity to search a linked list?
1. Does it matter whether the list is sorted or not? Why?
1. **Bonus:** What is a doubly linked list?
1. **Bonus:** What is the worst-case time-complexity to insert an element at an arbitrary position? How about delete?

### Research Dictionary

1. What is a dictionary? When would you use one?
1. What is the average-case and worst-case time-complexity to search a dictionary?
1. What is a hash function?
1. What is a hash collision?
1. **Bonus:** What is the average-case and worst-case time-complexity of insertion? Deletion?

### Research Tree

1. What is a tree? When would you use one?
1. What is a binary search tree?
1. What is the average-case and worst-case time-complexity to search a binary tree?
1. How can we use recursion with a tree structure?
1. **Bonus:** What is the average-case and worst-case time-complexity to insert an element at an arbitrary position? What about delete?

### Research Graph

1. What is a graph? When would you use one?
1. What is depth-first search? Breadth-first search?
1. How is a graph different from a tree?
1. **Bonus:** What is the worst-case time-complexity to search a graph?
1. **Bonus:** What is the worst-case time-complexity of insertion? Deletion?

## Linked List

Low-level arrays (as implemented in C or C++) are contiguous blocks of memory
made up of many "cells", each of which contains a value. The one-block-of-memory
approach makes accessing arbitrary values fast and easy, but it means that you
have to know in advance how many array elements you want. Expanding arrays is an
expensive operation that involves reserving a new block of memory and copying
all the existing elements into it.

To solve this problem, the **linked list** was created. Each "value" within a
linked list is actually an object that contains two things: the value itself,
and a reference to the "next" element in the list. Adding a new element is as
simple as reserving the memory space for that element, and pointing the "next"
reference of what was previously the last element to the new element.

We'll implement a `LinkedList` in JavaScript. **Do not implement the
list as an array** or any built-in data type. We have provided you some
starter code in the form of a `LinkedList` constructor function and a `Node`
constructor function. The `Node` represents one "link": an object with a value
and a pointer to the next
object.

### Basic LinkedList Operations

Let's first look at some of the basic LinkedList operations. These operations
won't require any looping as long as we keep track of the `head` and `tail`
nodes.

#### Code Along: prepend & length

Let's implement the following methods together:

- `prepend`, which when given a value, will add a new `Node` containing that
    value to the beginning of the list
- `length`, which returns the number of elements in the list

##### prepend algorithm

Implementing `prepend` can be done as follows:

1. Create a new `Node` containing the given value
2. Set the new `Node`'s next node to the `head`.
3. Update `head` to be the new `Node`

Let's visualize this process together.

#### Lab: last & append

Now it's your turn! Implement the following methods:

- `last`, which returns the last value in the list
- `append`, which adds new value to the end of the list

### Iterating Through a LinkedList

Now that we've written our first LinkedList methods, let's talk about how we can
iterate through a LinkedList. We'll use a node, that we'll call `currentNode`,
to iterate through each node in our LinkedList.

Iterating through all of the nodes in a LinkedList can be accomplished using
the following algorithm:

1. Create a node, `currentNode`, and assign it to the first node (the `head`) in
      the LinkedList
2. While `currentNode` is not undefined
3. Set `currentNode` to its `next` node. Advancing `currentNode` to the next
      node in the LinkedList

#### Code Along: remove

Let's add `remove` together:

- `remove`, which removes the first node containing the target value

#### Lab: _search

Now it's your turn! Your task is to write your own iteration method,
called `_search`. `_search` is similar to the `find` array method.

Implement the following:

- `_search`, which returns the first node whose value is equal to the "search
     term" (in other words, the argument passed to `_search`)

**Note:** When writing a LinkedList you should never return a node in a public
method. Nodes are needed to make a LinkedList, but they are an implementation
detail, not something the user of your LinkedList should ever see. We prefix
`_search` with an `_` because it is a `private` helper method we can use to
implement the remaining methods.

### Using The _search Iteration Method

Now that we've written the `_search` iteration method, we can use it to
implement other LinkedList methods.

#### Code Along: includes

Now we'll add `includes`. We'll use our `_search` method to help us implement
it.

- `includes`, includes, which returns `true` if the value we are searching for,
    is inside of our list, otherwise returns `false`.

#### Lab: insertAfter

Now implement `insertAfter` with `_search`:

- `insertAfter`, which adds a new node after a given value
    in the list

### Bonus Lab: toString

Lastly, let's implement `toString`

- `toString`, which returns a string representing all the values in
    the list, formatted however you like

## Binary Tree

Both arrays and linked lists suffer from poor lookup and insertion performance
forelements at an arbitrary position. Finding a specific value, or inserting a
new value at an arbitrary position, require O(n) time. **Tree** data structures,
of which the **binary tree** is one, can improve the performance of these
operations (at the expense of others).

Each "value" within a binary tree is actually an object that contains three
things: The value itself, and references to a "left" node and a "right" node.
The first value inserted into the tree becomes the "root" node. The second value
is inserted either to the "left" or the "right" of the root node, depending on
how its value compares to the root node's value. Subsequent values are likewise
inserted to the left or right of some existing node in the tree based on value
comparisons.

Note that this algorithm requires all values inserted into the tree to be
**unique** and **comparable**: for any given value, you should be able to say
for sure that it is either "less than" or "greater than" any other value. If you
have duplicate values, or your values are of different types (e.g. strings and
integers) or otherwise cannot be compared, they cannot be stored in a binary
tree.

**Note**: Most methods on binary search trees can be implemented iteratively
using a while loop or with recursion. We'll look at examples of implementing
methods using both iteration and recursion.

### Searching Through a Binary Tree

As we search through the nodes in a binary tree for a `value`, we use this
logic to find each node’s proper place in the structure: lesser values go left;
greater values go right. We'll use a node, that we'll call `currentNode`,
to search through the nodes in our BinaryTree.

**Remember this hint:** lesser = left!

Searching for a specific value in a BinaryTree can be accomplished using
the following algorithm:

1. Create a node, `currentNode`, and assign it to the first node (the `root`) in
      the BinaryTree
1. While `currentNode` is not undefined, repeat steps 3-5.
1. If the `value` we are searching for is less than the `currentNode`'s value,
      then set the `currentNode` to its `left` node.
1. Otherwise, if the `value` we are searching for is greater than the
      `currentNode`'s value, then set the `currentNode` to its `right` node.
1. Otherwise the `value` we are searching for is equal to the `currentNode`'s
      value. So we found it.
1. If `currentNode` becomes undefined, then the value does not exist in the
    tree.

### Code Along: includes

Let's try implementing our first binary tree method, `includes`, which returns
`true` if the value exists in the tree, otherwise returns `false`.

### Lab: insert

Now try implementing `insert`,

- `insert`, which adds a new node containing the given value to the BinaryTree

### Code Along: size & height

Let's implement `size` & `height` together:

- `size`, which returns the number of values in the binary tree
- `height`, which returns the length of the largest path of nodes

### Lab: getMax

Now it's your turn, try to implement `getMax`:

- `getMax`, which returns the largest value in the tree

### Binary Tries

A trie (pronounced like “try” and short for “retrieval”) is a type of tree in
which nodes aren’t limited to only left and right pointers. Instead, each node
can store a list of “child” nodes that all represent possible paths forward
through the trie.

Like a tree, a trie starts with an empty root node that points to child nodes.
Each subsequent child node contains two types of data:

1. A value.
2. References to other nodes, usually stored in an array.

The other thing that makes tries unique? They almost always store alphabetical
data. The value stored in a node is a single letter, and the references are
pointers to other letters that make up a word.

![Binary Trie](https://media.git.generalassemb.ly/user/16320/files/ed278d80-7a77-11e9-98ef-dbb7e9bdc19e)

## Hash Table

JavaScript objects are implemented as hash tables. Let's implement them together
so we can have a better understanding of what is happening behind the scenes.

### Annotate Along: constructor

Let's open up `lib/hash-table.js` and we'll annotate an implementation
of a hash table's constructor.

### Code Along: insert (hash table)

Hash tables are able to insert data in O(1) or constant time. `insert` takes a
`key`/`value` pair, then stores them in the hash table by hashing the `key`.

Let's implement `insert` together.

### Lab: search

Now try implementing `search`:

- search, which returns the `value` that corresponds to the `key`, otherwise
    returns `undefined` if the `key` doesn't exist in the hash table.

### Bonus Lab: delete

If you finish early, challenge yourself to write `delete`:

- delete, which deletes a `key`/`value` pair and returns the `value`, otherwise
    returns `undefined` if the `key` doesn't exist in the hash table.

## Graph

A graph is a collection of nodes, which store data, and edges, which represent
relationships or connections between nodes.

Graphs are a powerful and flexible data structure and have been widely adopted
in modern software engineering. Have you ever booked a flight online, followed
someone on Instagram, or driven somewhere using Google Maps? Spoiler alert:
You’ve interacted with a graph.

### Code Along: addNode

Let's look at how we can add a node to a graph together in `lib/graph.js`.

### Lab: addEdge

Right now we can add nodes to our graph, but we don't have them connected to
each other! Try implementing `addEdge`.

- addEdge, which adds a one way association from our `node` to the `edge`

### Bonus Challenges: Linked List

These can be attempted in any order; they are not dependent on each other. Note:
You will almost certianly not have time to finish these during this training,
but they would be excellent practice for job interviews.

- Create a method to iterate through each value in the list. You'll need to
    accept a callback function like `forEach` does on arrays.
- Create a method that reverses the list. It can either return a new reversed
    list and leave the existing one alone, or reverse the existing list
    in-place. Or try doing both!
- Upgrade your linked list to a **doubly-linked list**. In this variant of the
    linked list, each element holds references to both the "next" element and
    the "previous" element. You may find that it's much easier to remove a
    specific value from this kind of list.
- Done-to-death interview question: Suppose you have a linked list that has
    been "corrupted" such that the links form a loop: if you tried to iterate
    through it, you'd keep going forever. Devise an algorithm that, given the
    first element of a linked list, would detect whether the list contains a
    loop.
- Revisit your stack and queue implementation, and refactor them to use linked
    lists (your linked list implementation) instead of arrays.
- Implement a linked list [recursively.](https://www.cs.utah.edu/~germain/PPS/Topics/recursion.html)

### Bonus Challenges: Binary Tree

These can be attempted in any order; they are not dependent on each other.

- Create a method to iterate through each value in the tree. You'll need to
    accept a callback function like `forEach` does on arrays.
- Upgrade your binary tree to a **hash tree**: instead of storing only a value
    for each node, store a *key* as well. Perform insertions and deletions based
    on the key, and add a method to retrieve the value associated with a key.
    (This might remind you of the built-in `Hash` in Ruby. This is how
    some other languages implement hashes, but Ruby does it using a non-tree
    data structure called a **hash table**.)
- Note that if the values inserted into the tree go in one "direction" much
    more frequently than another (e.g. they all go to the "left"), the tree can
    become "unbalanced". A completely unbalanced tree performs no better than a
    linked list. In this case we want to "rebalance" the tree, that is,
    rearrange its nodes to minimize the number of connections needed to access
    any given node. How might we do this?

## Additional Resources

- [Data Structure Visualization](http://www.cs.usfca.edu/~galles/visualization/Algorithms.html)
- [Implementing Data Structures in JavaScript](https://www.youtube.com/playlist?list=PLWKjhJtqVAbkso-IbgiiP48n-O-JQA9PJ)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
