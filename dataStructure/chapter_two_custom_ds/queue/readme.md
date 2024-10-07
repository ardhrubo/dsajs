# Queue

The queue data structure is a sequential collection of elements that follows the principle of FIFO (First In First Out). The first element inserted into the queue is the first element to be removed.

## Example

A queue of people. People enter the queue at one end (rear/tail) and leave the other end (front/head).

## Abstract Data Type

Queue is an abstract data type. It is defined by its behavior rather than being a mathematical model.

## Operations

The queue data structure supports two main operations:
1. **Enqueue**: Adds an element to the rear/tail of the collection.
2. **Dequeue**: Removes an element from the front/head of the collection.

## Queue Visualazaion
- Enqueue
    ![image](https://github.com/user-attachments/assets/108b1494-09d7-4ad4-b641-cd333515b671)
- Dequeue
    ![image](https://github.com/user-attachments/assets/a3b376c0-c1e9-48dc-9469-aab3bfc5d56f)



## Queue Usage

Queues are used in various applications, including:
- **Task Scheduling**: Queues are used to manage tasks in operating systems and other scheduling applications.
- **Print Queue**: Managing print jobs in a printer queue.
- **Breadth-First Search**: Queues are used in graph traversal algorithms like breadth-first search (BFS).
- **Buffering**: Queues are used in buffering data streams, such as in IO operations and network data handling.


## Circular Queue

The size of the queue is fixed and a single block of memory is used as if the first element is connected to the last element.

Also referred to as circular buffer or ring buffer and follows the FIFO
principle

A circular queue will reuse the empty block created during the dequeue operation

When working with queues of fixed maximum size, a circular queue is a great implementation choice

The Circular Queue data structure supports two main operations
- **Enqueue**: Which adds an element to the rear/tail of the collection

-**Dequeue**: Which removes an element from the front/head of the collection.






