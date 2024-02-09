class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		const newNode = new Node(value);
		this.head = newNode;
		this.tail = this.head;
		this.length = 1;
	}

	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;
		return this
	}

	pop() {
		if (!this.head) return undefined;
		let pre = this.head;
		let temp = this.head;

		while (temp.next) {
			pre = temp;
			temp = temp.next;
		}

		this.tail = pre;
		this.tail.next = null; // important this removes the link to the last node!
		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}

		return temp;
	}

	unshift(value){
		const newNode = new Node(value);
		if(!this.head){
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head
			this.head = newNode
		}
		this.length++
		return this
	}
}

const list = new LinkedList(1);
list.push(2);
list.push(3);
list.pop();
list.pop();
list.pop();
list.push(2);
list.unshift(1);
list.unshift(0.5);
console.log(list);
