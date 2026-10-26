
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    get(i) {
        let curr = this.head;

        while (curr !== null && i > 0) {
            curr = curr.next;
            i--;
        }

        return curr === null ? -1 : curr.val;
    }

    insertHead(val) {
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertTail(val) {
        const newNode = new Node(val);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let curr = this.head;

        while (curr.next !== null) {
            curr = curr.next;
        }

        curr.next = newNode;
    }

    remove(i) {
        if (this.head === null) {
            return false;
        }

        if (i === 0) {
            this.head = this.head.next;
            return true;
        }

        let curr = this.head;

        while (curr.next !== null && i > 1) {
            curr = curr.next;
            i--;
        }

        if (curr.next === null) {
            return false;
        }

        curr.next = curr.next.next;
        return true;
    }

    getValues() {
        const values = [];
        let curr = this.head;

        while (curr !== null) {
            values.push(curr.val);
            curr = curr.next;
        }

        return values;
    }
}

