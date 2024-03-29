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
		return this;
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

	unshift(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	shift() {
		if (!this.head) return undefined;
		let temp = this.head;

		this.head = this.head.next;
		temp.next = null;
		this.length--;

		if (this.length === 0) {
			this.tail = null;
		}

		return temp;
	}

	get(index) {
		if (index < 0 || index >= this.length) {
			return undefined;
		}

		let temp = this.head;
		for (let i = 0; i < index; i++) {
			temp = temp.next;
		}
		return temp;
	}

	set(index, value) {
		let temp = this.get(index);
		if (temp) {
			temp.value = value;
			return true;
		}
		return false;
	}

	insert(index, value) {
		if (index === 0) return this.unshift(value);
		if (index === this.length) this.push(value);
		if (index < 0 || index > this.length) return false;

		const newNode = new Node(value);
		let temp = this.get(index - 1);
		newNode.next = temp;
		temp.next = newNode;
		this.length++;
		return true;
	}

	remove(index) {
		if (index === 0) return this.shift(value);
		if (index === this.length - 1) this.pop(value);
		if (index < 0 || index >= this.length) return undefined;

		const before = this.get(index - 1);
		const temp = before.next;

		before.next = temp.next;
		temp.next = null;

		this.length--;
		return temp;
	}

	reverse() {
		let temp = this.head;
		this.head = this.tail;
		this.tail = temp;

		let next = temp.next;
		let prev = null;
		for (let i = 0; i < this.length; i++) {
			next = temp.next;
			temp.next = prev;
			prev = temp;
			temp = next;
		}

		return this;
	}

	findMiddleNode() {
		let slow = this.head;
		let fast = this.head;

		while (fast !== null && fast.next !== null) {
			slow = slow.next;
			fast = fast.next.next;
		}
		return slow;
	}

	hasLoop() {
		let slow = this.head;
		let fast = this.head;

		while (fast !== null && fast.next !== null) {
			slow = slow.next;
			fast = fast.next.next;

			if (slow == fast) return true;
		}

		return false;
	}

	findKthFromEnd(k) {
		let fast = this.head;
		let slow = this.head;

		for (let i = 0; i < k; i++) {
			if (fast === null) return null;
			fast = fast.next;
		}

		while (fast !== null) {
			fast = fast.next;
			slow = slow.next;
		}
		return slow;
	}
}

const list = new LinkedList(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);

list.reverse();

console.log(list);
