class DoublyLinkedListNode<T>
{
  public data: T;
  public next: DoublyLinkedListNode<T> | null;
  public prev: DoublyLinkedListNode<T> | null;

  constructor(input: T)
  {
    this.data = input
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedListEngine<T>
{

  public head: DoublyLinkedListNode<T> | null = null;
  public tail: DoublyLinkedListNode<T> | null = null;
  public length: number = 0;

  public push = (data: T): void =>
  {
    let newNode: DoublyLinkedListNode<T> = new DoublyLinkedListNode(data);
    
    if(!this.tail)
    {
      this.head = newNode;
      this.tail = newNode;
    }
    else
    {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
  }

  public pop = (): DoublyLinkedListNode<T> | null =>
  {
    let poppedNode: DoublyLinkedListNode<T> | null = null;
    
    if(!this.tail) return poppedNode;
    else if(this.tail.prev === null)
    {
      poppedNode = this.tail;
      this.tail = null
      this.head = null;
    }
    else
    {
      poppedNode = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }

  public unshift = (data: T): void =>
  {
    let newNode: DoublyLinkedListNode<T> = new DoublyLinkedListNode(data);
    
    if(!this.head)
    {
      this.head = newNode;
      this.tail = newNode;
    }
    else
    {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }
  
  public shift = (): DoublyLinkedListNode<T> | null =>
  {
    let shiftedNode: DoublyLinkedListNode<T> | null = null;
    
    if(!this.head) return shiftedNode;
    else if(this.head.next === null)
    {
      shiftedNode = this.head;
      this.tail = null
      this.head = null;
    }
    else
    {
      shiftedNode = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }

    this.length--;
    return shiftedNode;
  }

  public get = (index: number): DoublyLinkedListNode<T> | null =>
  {
    let targetNode: DoublyLinkedListNode<T> | null = null;
    
    if(index < 0) return targetNode;

    else if(index >= this.length) return targetNode;

    else if(index === 0) return this.head;

    else if(index === this.length-1) return this.tail;

    else
    {
      if(index <= Math.floor(this.length / 2))
      {
        let counter: number = 1;
        targetNode = this.head!.next
        while(counter !== index)
        {
          targetNode = targetNode!.next;
          counter++;
        }
      }
      else
      {
        let counter: number = this.length-2;
        targetNode = this.tail!.prev
        while(counter !== index)
        {
          targetNode = targetNode!.prev;
          counter--;
        }
      }
      return targetNode;
    }
  }

  public set = (index: number, newData: T): boolean =>
  {    
    let nodeFound: DoublyLinkedListNode<T> | null = this.get(index);

    if(nodeFound === null) return false;

    else nodeFound.data = newData;

    return true;
  }

  public insert = (index: number, data: T): boolean =>
  {
    if(index < 0 || index > this.length) return false;

    else if(index === 0) this.unshift(data);

    else if(index === this.length) this.push(data);

    else
    {
      let newNode: DoublyLinkedListNode<T> = new DoublyLinkedListNode<T>(data);
      let prevNode: DoublyLinkedListNode<T> | null = this.get(index-1);
      let afterNode: DoublyLinkedListNode<T> | null = prevNode!.next;

      prevNode!.next = newNode;
      afterNode!.prev = newNode;
      newNode.prev = prevNode;
      newNode.next = afterNode;
      this.length++;
    }
    
    return true;
  }

  public remove = (index: number, data:T): DoublyLinkedListNode<T> | null =>
  {
    let removedNode: DoublyLinkedListNode<T> | null = null;

    if(index < 0 || index >= this.length) return removedNode

    else if(index === 0) removedNode = this.shift();

    else if(index === this.length-1) removedNode = this.pop();

    else
    {
      let prevNode: DoublyLinkedListNode<T> | null = this.get(index-1);
      let afterNode: DoublyLinkedListNode<T> | null = prevNode!.next!.next;
      
      removedNode = prevNode!.next;
      removedNode!.next = null;
      removedNode!.prev = null;
      prevNode!.next = afterNode;
      afterNode!.prev = prevNode;
      this.length--
    }

    return removedNode;
  }

  public print = (): void =>
  {
    if(!this.head) console.log('There is no Doubly LinkedList')
    else
    {
      console.log(null)
      console.log(' ↑')
      let traversingNode: DoublyLinkedListNode<T> | null = this.head;
      while(traversingNode !== null)
      {
        console.log('(' + traversingNode.data + ')')
        if(traversingNode.next !== null) console.log('↓ ↑')
        traversingNode = traversingNode.next;
      }
      console.log(' ↓')
      console.log(null)
    }
  }

  public printReverse = (): void => {
    if (!this.head) console.log('There is no Doubly LinkedList');
    else {
      console.log(null);
      console.log(' ↑');
      let traversingNode: DoublyLinkedListNode<T> | null = this.tail;
      while (traversingNode !== null) {
        console.log('(' + traversingNode.data + ')');
        if (traversingNode.prev !== null) console.log('↓ ↑');
        traversingNode = traversingNode.prev;
      }
      console.log(' ↓');
      console.log(null);
    }
  }

  public reverse = (): void =>
  {
    if(!this.head && !this.tail) console.log('Can\'t reverse an empty Doubly LinkedList');
    else
    {
      let traversingNode: DoublyLinkedListNode<T> | null = this.head;
      let prevNode: DoublyLinkedListNode<T> | null = null;
      let nextNode: DoublyLinkedListNode<T> | null = null;

      this.head = this.tail;
      this.tail = traversingNode;
            
      for(let counter: number = 0; counter < this.length; counter++)
      {
        nextNode = traversingNode!.next;
        traversingNode!.next = prevNode;
        traversingNode!.prev = nextNode;
        prevNode = traversingNode;
        traversingNode = nextNode;
      }
    }
  }
}

let linkedListWithATwo: DoublyLinkedListEngine<number> = new DoublyLinkedListEngine<number>();
linkedListWithATwo.push(1)
linkedListWithATwo.push(2)
linkedListWithATwo.push(3)
linkedListWithATwo.push(4)
linkedListWithATwo.print();
linkedListWithATwo.reverse();
linkedListWithATwo.print();
