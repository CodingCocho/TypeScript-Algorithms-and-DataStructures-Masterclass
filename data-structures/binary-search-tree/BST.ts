class BSTNode<T> 
{
  public data: T | null = null;
  public left: BSTNode<T> | null = null;
  public right: BSTNode<T> | null = null;

  constructor(input: T)
  {
    this.data = input;
  }
}

class BST<T>
{

  public root: BSTNode<T> | null = null;

  public add = (data: T): boolean =>
  {
    let newNode: BSTNode<T> = new BSTNode<T>(data);
    if(!this.root)
    {
      this.root = newNode;
      return true;
    }

    let traversingNode: BSTNode<T> = this.root;
    let flag: boolean = true;
    let result: boolean = true;
    while(flag)
    {
      if(traversingNode)
      {
        if(traversingNode.data)
        {
          // Traverse to the right
          if(traversingNode.data < data)
          {
            // Check if there is a right node
            if(traversingNode.right === null)
            {
              traversingNode.right = newNode;
              flag = false;
            }
            // Move the pointer to the right
            else
            {
              traversingNode = traversingNode.right;
            }
          }
          // Traverse to the left
          else if(traversingNode.data > data)
          {
            // Check if there is a left node
            if(traversingNode.left === null)
            {
              traversingNode.left = newNode;
              flag = false;
            }
            // Move the pointer to the left
            else
            {
              traversingNode = traversingNode.left;
            }
          }
          // Duplicate case
          else
          {
            flag = false, result = false;
          }
        }
      }
    }

    return result
  }
}