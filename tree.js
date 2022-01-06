/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    // start with value of root
    let total = this.root.val;

    function sumHelper(node) {
      // for every child of a node
      for (let child of node.children) {
        // add value
        total += child.val;
        // add all children
        if (child.children.length > 0) {
          // recurse for each child node as the root
          sumHelper(child);
        }
      }
    }

    sumHelper(this.root);
    return total;
    
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let count = this.root.val % 2 === 0 ? 1 : 0;

    function countHelper(node) {
      // for every child of a node
      for (let child of node.children) {
        // if remainder is 0, it is even, add 1 to count
        if(child.val % 2 === 0) count++;
        // add all children
        if (child.children.length > 0) {
          // recurse for each child node as the root
          countHelper(child);
        }
      }
    }

    countHelper(this.root);
    return count;

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let count = this.root.val > lowerBound ? 1 : 0;

    function numHelper(node) {
      // for every child of a node
      for (let child of node.children) {
        // if value is greater than lowerBound, add 1
        if(child.val > lowerBound) count++;
        // add all children
        if (child.children.length > 0) {
          // recurse for each child node as the root
          numHelper(child);
        }
      }
    }

    numHelper(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
