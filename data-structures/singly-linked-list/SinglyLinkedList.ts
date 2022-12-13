class SinglyLinkedListNode<T>
{
  public data: T;
  public next: SinglyLinkedListNode<T> | null;

  constructor(input: T)
  {
    this.data = input
    this.next = null;
  }
}

class SinglyLinkedListEngine<T>
{

  public head: SinglyLinkedListNode<T> | null = null;
  public tail: SinglyLinkedListNode<T> | null = null;
  public length: number = 0;

  public push = (input: T): void =>
  {
    let newNode: SinglyLinkedListNode<T> =  new SinglyLinkedListNode<T>(input);

    if(!this.tail)
    {
      this.head = newNode;
      this.tail = newNode;
    }
    else
    {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    
    this.length++;
  }

  public pop = (): T | null =>
  {
    let data: T | undefined | null;
    
    if(!this.head)
    {
      return null;
    }

    if(!(this.head.next))
    {
      data =  this.head.data
      this.head = null;
      this.tail = null;
      this.length--;
      return data
    }

    let newTailNode: SinglyLinkedListNode<T> |null = this.head;
    let traversingNode: SinglyLinkedListNode<T> = this.head.next;
    
    while(traversingNode.next !== null)
    {
      newTailNode = newTailNode!.next;
      traversingNode = traversingNode.next;
    }

    data = traversingNode.data;
    newTailNode!.next = null;
    
    this.tail = newTailNode;
    this.length--;
    
    return data;
  }

  public unshift = (input: T): void =>
  {
    let newNode: SinglyLinkedListNode<T> =  new SinglyLinkedListNode<T>(input);

    if(!this.head)
    {
      this.head = newNode;
      this.tail = newNode;
    }
    else
    {
      newNode.next = this.head;
      this.head = newNode;
    }
    
    this.length++;
  }

  public shift = (): T | null =>
  {
    let data: T | undefined;

    if(!this.head) return null 

    if(!this.head.next)
    {
      data = this.head.data
      this.head = null;
      this.tail = null;
      this.length--;
      return data;
    }

    let newHead: SinglyLinkedListNode<T> = this.head.next;
    
    data = this.head.data;
    this.head = newHead;
    this.length--;
    
    return data;
  }

  public get = (index: number): SinglyLinkedListNode<T> | null =>
  {
    if(!this.head) return null;

    if(index < 0) return null;

    if(index >= this.length) return null;

    if(index === 0) return this.head;

    if(index === this.length-1) return this.tail

    let countingIndex: number = 1;
    let countingNode: SinglyLinkedListNode<T> | null = this.head.next
    
    while(countingIndex !== index)
    {
      countingNode = countingNode!.next;
      countingIndex++
    }

    return countingNode;
  }

  public set = (index: number, data: T): boolean =>
  {
    if(!this.head) return false;

    if(index < 0) return false;

    if(index >= this.length) return false;

    if(index === 0)
    { 
      this.head.data = data;
      return true;
    }

    if(index === this.length-1 && this.tail)
    {
      this.tail.data = data;
      return true;
    }

    let countingIndex: number = 1;
    let countingNode: SinglyLinkedListNode<T> | null = this.head.next
    
    while(countingIndex !== index)
    {
      countingNode = countingNode!.next;
      countingIndex++
    }
    
    if(countingNode) countingNode.data = data;

    return true;
  }

  public insert = (input: T, index: number): void =>
  {
    if(index > this.length) return

    if(index < 0) return

    if(index === 0) 
    {
      this.unshift(input);
      return;
    }

    if(index === this.length)
    {
      this.push(input);
      return;
    } 

    let traversingNode: SinglyLinkedListNode<T> | null = this.head;
    let countingIndex: number = 0;
    
    while(countingIndex !== index-1)
    {
      traversingNode = traversingNode!.next
      countingIndex++;
    }
    
    let tempNode: SinglyLinkedListNode<T> | null= traversingNode!.next
    let insertingNode: SinglyLinkedListNode<T> = new SinglyLinkedListNode<T>(input);
    
    if(traversingNode) traversingNode.next =  insertingNode;
    insertingNode.next = tempNode;
    this.length++;
  }

  public remove = (index: number): T | null =>
  {
    if(index >= this.length) return null

    if(index < 0) return null

    if(index === 0) return this.shift();

    if(index === this.length-1) return this.pop();

    let trailingNode: SinglyLinkedListNode<T> | null = this.head
    let trackingNode: SinglyLinkedListNode<T> | null = trailingNode!.next;
    let traversingIndex: number = 0;

    while(traversingIndex !== index-1)
    {
      traversingIndex++
    }

    let data: T | undefined;
    let tempNode: SinglyLinkedListNode<T> | null = trackingNode!.next;
    data = trackingNode!.data;
    trailingNode!.next = tempNode;
    this.length--;
    return data;
  }

  public print = (): void =>
  {
    if(!this.head) console.log('There is no Singly LinkedList')
    else
    {
      let traversingNode: SinglyLinkedListNode<T> | null = this.head;
      while(traversingNode !== null)
      {
        console.log('(' + traversingNode.data + ')')
        console.log(' ↓')
        traversingNode = traversingNode.next;
      }
      console.log(null)
    }
  }

  public reverse = (): void =>
  {
    if(!this.head && !this.tail) console.log('Can\'t reverse an empty Singly LinkedList');
    else
    {
      let traversingNode: SinglyLinkedListNode<T> | null = this.head;
      
      this.head = this.tail;
      this.tail = traversingNode;
      
      let prevNode: SinglyLinkedListNode<T> | null = null;
      let nextNode: SinglyLinkedListNode<T> | null = null;
      
      for(let counter: number = 0; counter < this.length; counter++)
      {
        nextNode = traversingNode!.next;
        traversingNode!.next = prevNode;
        prevNode = traversingNode;
        traversingNode = nextNode;
      }
    }
  }
}

const myLinkedList: SinglyLinkedListEngine<number> = new SinglyLinkedListEngine<number>();
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.insert(6, 1)
myLinkedList.insert(9, 3);
myLinkedList.print();
myLinkedList.reverse();
myLinkedList.print();

