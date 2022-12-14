class Stack<T>
{
  private stack: (T | null)[] = [];
  public pointer: number = 0;
  public length: number = 0;
  
  constructor(length: number)
  {
    this.stack = new Array<T | null>(length).fill(null);
    this.length = length;
  }

  public push = (element: T): boolean =>
  {
    if(this.pointer === this.length) return false

    this.stack[this.pointer] = element;
    this.pointer++
    return true; 
  }

  public pop = (): T | null =>
  {
    if(this.pointer === 0) return null
    
    let data: T | null = this.stack[--this.pointer];
    this.stack[this.pointer] = null;
    return data;
  }
}

let myStack: Stack<number> = new Stack<number>(8);
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)
myStack.push(5)

