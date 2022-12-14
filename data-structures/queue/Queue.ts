class Queue<T>
{
  public queue: (T | null)[] = [];
  public pointer: number = 0;
  public length: number = 0;

  constructor(length: number)
  {
    this.queue = new Array<T| null>(length).fill(null);
    this.length = length;
    this.pointer = this.length-1;
  }

  public enqueue = (data: T): boolean =>
  {
    if(this.pointer === -1) return false;

    this.queue[this.pointer] = data;
    this.pointer--;
    return true;
  }

  public dequeue = (): T | null =>
  {
    if(this.pointer === this.length-1) return null;

    let data: T | null = this.queue[++this.pointer];
    this.queue[this.pointer] = null;
    return data;
  }
}