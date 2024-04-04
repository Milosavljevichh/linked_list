// linkedList and Node objects will be created using Factories
// instead of classes


function Node(value, nextNode) {
    return {
        value: value,
        nextNode: nextNode
    }
};

function LinkedList() {
    return {
        head: null,
        append: function(value) {
            if (this.head === null) {this.prepend(value)}
            else {
                let tempNode = this.head
                while (tempNode.nextNode !== null) {
                    tempNode = tempNode.nextNode
                }

                const newNode = Node(value, null)
                tempNode.nextNode = newNode
            } 
        },
        prepend: function(value) {
            const newNode = Node(value, this.head)
            this.head = newNode;
        },
        size: function() {
            let n = 0;
            let counter = this.head;
            while (counter != null) {
                if (counter.value) {
                    n++;
                };
                counter = counter.nextNode;
            }
            return n;
        },
        listHead: function(){
            return this.head;
        }, 
        tail: function() {
            let node = this.head;
            while (node.nextNode != null) {
                node = node.nextNode;
            }
            return node;
        },
        atIndex: function(index) {
            let node = this.head
            for (let i = 0; i<index;i++){
                if (i === index-1) {
                    node.value;
                } else{
                    node = node.nextNode
                }
            }
            return node;
        },
        pop: function() {
            let node = this.head;
            while (node.nextNode.nextNode != null) {
                node = node.nextNode;
            }
            node.nextNode = null;
        },
        contains: function(value){
            let node = this.head
            let contains = false;
            while (node.nextNode != null) {
                if (node.value === value) {
                    contains = true;
                    break;
                }
                node = node.nextNode;
            }
            return contains;
        },
        find: function(value) {
            let node = this.head
            let counter = 0;
            while (node.nextNode != null) {
                if (node.value === value) {
                    return counter;
                }
                counter++;
                node = node.nextNode;
            }
            return null;

        },
        toString: function(){
            let node = this.head
            let str = ``;
            while (node != null) {
                str += `(${node.value}) -> `;
                node = node.nextNode;
            }
            str += `null`;
            return str;
        },
        insertAt: function(value, index) {
            if (index === 0 ) {
                list.prepend(value);
            } else {
                let node = this.head;
                let temp = node.nextNode;
                for (let i=0; i<index-1; i++){
                    temp = node.nextNode.nextNode
                    node = node.nextNode
                }
                const newNode = Node(value, temp);
                node.nextNode = newNode;
            }
        }

}};


// let list = LinkedList()
// let node1 = Node(3)
// list.prepend(node1.value)
// let node2 = Node(2)
// list.prepend(node2.value)
// let node3 = Node(1)
// list.prepend(node3.value)
// let node4 = Node(4)
// list.append(node4.value)
// list.append(node1.value)
// list.append(node2.value)
// list.append(node3.value)

// console.log(list)
// console.log(list.size())
// console.log(list.listHead())
// console.log(list.tail())
// console.log(list.atIndex(6))
// list.pop()
// console.log(list.tail()) 
// console.log(list.contains(2)) 
// console.log(list.find(4)) 
// console.log(list.toString()) 
// list.insertAt('joker', 2)
// console.log(list.toString())
