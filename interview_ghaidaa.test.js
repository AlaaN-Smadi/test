'use strict';

class Nodes {

    constructor(value) {
        this.value = value,
            this.next = null
        this.previous = null
    }
}


class LinkedList {
    constructor() {
        this.head = null
    }

    //  insert =  singly
    insert = (val) => {  //  accept value
        const node = new Node(val) // time -> 1
                                   // Space -> 1
        //  head = null => empty
        let current = this.head // Space -> 1
        if (current == null) {  //  time -> 1
            this.head = node
            return
        }
        while (current.next !== null) {  // time -> n
            current = current.next
        }
        current.next = node // Space -> 1
        return
    }
    //  Time  Big O =>  O(n)
    //  Space  Big O =>  O(1)


    //   insert node 

    insertNode = (node) => {  //  accept Node
        let current = this.head
        if (current == null) {
            this.head = node
            return
        }
        while (current.next !== null) {
            current = current.next
        }
        current.next = node
        return
    }
    // Space => O(1)
    // Time => O(n)

    //  insert =  doubly
    insertDoubly = (value) => {
        const node = new Node(value)

        let current = this.head
        if (current == null) {
            this.head = node
            return
        }
        while (current.next !== null) {
            current = current.next
        }
        // current.next = null =>  اخر نود في الليست
        node.previous = current
        current.next = node

        return
    }

    //  includes
    includes = (value) => {
        //  5   2   -1   7  4  3  Null
        //      2                => true
        //                     3 => true
        //                         110 => false

        let current = this.head
        if (current == null) {
            return ('Empty Linked List')
        }
        while (current !== null) {
            if (value === current.value) {
                return true
            }
        }

        return false
    }

    // Space => O(1)
    // Time => O(n)

    //  toString
    toString = () => {
        //  2 -> 1 -> 5 -> 4 -> null
        //  ----------
        let result

        let current = this.head
        if (current == null) {
            return ('Empty')
        }
        while (current !== null) {
            result = result + `${current.value} -> `
        }
        result = result + 'null'

        return result
    }
    // Space => O(1)
    // Time => O(n)

}


function palindrome(linkedList){
    let first, last
    first = linkedList.head

    let current = linkedList.head
    while(current.next !== null){  // n
        current = current.next
    }
    last = current

    while(first !== null && last !== null){  // n
        if(first.value !== last.value){
            return false
        }
    }

    return true
}

// Time ->  n + n => 2n ==> O(n)
// Space -> O(1)