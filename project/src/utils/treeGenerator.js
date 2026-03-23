function makeBalls(levels, containerWidth) {
  let balls = [];
  let id = 0;

  let verticalGap = window.innerWidth < 640 ? 60 : 90;
  let width = window.innerWidth < 640 ? window.innerWidth * 0.9 : containerWidth;

  for (let level = 0; level < levels; level++) {
    let nodesInLevel = Math.pow(2, level);
    let gap = width / (nodesInLevel + 1);

    for (let i = 0; i < nodesInLevel; i++) {
      balls.push({
        id: id,
        value: id + 1,
        x: gap * (i + 1),
        y: verticalGap * (level + 1),
        left: null,
        right: null,
        state: "default",
      });
      id++;
    }
  }

  return balls;
}

// PERFECT BINARY TREE - All levels completely filled
export function perfectBinaryTree(levels = 4, width = 900) {
  let balls = makeBalls(levels, width);

  for (let i = 0; i < balls.length; i++) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < balls.length) balls[i].left = left;
    if (right < balls.length) balls[i].right = right;
  }

  return balls;
}

// COMPLETE BINARY TREE - Last level filled from left to right
export function completeBinaryTree(n = 10, width = 900) {
  let balls = [];
  let verticalGap = 90;
  
  // Calculate actual levels needed
  let levels = Math.floor(Math.log2(n)) + 1;
  
  // Create nodes with proper positioning
  for (let i = 0; i < n; i++) {
    let level = Math.floor(Math.log2(i + 1));
    let nodesInLevel = Math.pow(2, level);
    let indexInLevel = i - (nodesInLevel - 1);
    let maxNodesInLevel = Math.pow(2, level);
    let gap = width / (maxNodesInLevel + 1);
    
    balls.push({
      id: i,
      value: i + 1,
      x: gap * (indexInLevel + 1),
      y: verticalGap * (level + 1),
      state: "default",
      left: null,
      right: null,
    });
  }
  
  // Set connections (complete binary tree property)
  for (let i = 0; i < n; i++) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    
    if (left < n) balls[i].left = left;
    if (right < n) balls[i].right = right;
  }
  
  return balls;
}

// FULL BINARY TREE - Every node has 0 or 2 children, last level has only pairs
export function fullBinaryTree(levels = 3, width = 900) {
  let balls = [];
  let verticalGap = 90;
  let id = 0;
  
  // Create a perfect tree but remove some nodes from last level in pairs
  let perfectNodes = Math.pow(2, levels) - 1;
  let keepNodes = [];
  
  // Keep all nodes except remove some from last level in pairs
  for (let level = 0; level < levels; level++) {
    let nodesInLevel = Math.pow(2, level);
    let gap = width / (nodesInLevel + 1);
    
    for (let i = 0; i < nodesInLevel; i++) {
      // For last level, only add every other node to create gaps
      if (level === levels - 1) {
        // Keep only alternate nodes (0, 2, 4, etc.) to maintain full tree property
        if (i % 2 === 0 && i < nodesInLevel - 1) {
          balls.push({
            id: id,
            value: id + 1,
            x: gap * (i + 1),
            y: verticalGap * (level + 1),
            state: "default",
            left: null,
            right: null,
          });
          id++;
        }
      } else {
        balls.push({
          id: id,
          value: id + 1,
          x: gap * (i + 1),
          y: verticalGap * (level + 1),
          state: "default",
          left: null,
          right: null,
        });
        id++;
      }
    }
  }
  
  // Set connections (only connect if both children exist)
  for (let i = 0; i < balls.length; i++) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    
    // Only add if both children exist (full tree property)
    if (right < balls.length) {
      balls[i].left = left;
      balls[i].right = right;
    }
  }
  
  return balls;
}

// BALANCED BINARY TREE - Different structure: tree that balances values differently
export function balancedBinaryTree(n = 7, width = 900) {
  let balls = [];
  let verticalGap = 90;
  
  // Create a tree with specific structure to show balance
  // This creates a tree where left and right subtrees have similar heights
  let structure = [
    { value: 4, level: 1, position: 0.5 },      // Root
    { value: 2, level: 2, position: 0.25 },     // Left child
    { value: 6, level: 2, position: 0.75 },     // Right child
    { value: 1, level: 3, position: 0.125 },    // Left-left
    { value: 3, level: 3, position: 0.375 },    // Left-right
    { value: 5, level: 3, position: 0.625 },    // Right-left
    { value: 7, level: 3, position: 0.875 },    // Right-right
  ];
  
  // Create nodes with specific connections
  for (let i = 0; i < structure.length; i++) {
    balls.push({
      id: i,
      value: structure[i].value,
      x: width * structure[i].position,
      y: verticalGap * structure[i].level,
      state: "default",
      left: null,
      right: null,
    });
  }
  
  // Set explicit connections for balanced tree structure
  balls[0].left = 1;   // Root -> left
  balls[0].right = 2;  // Root -> right
  balls[1].left = 3;   // Left -> left-left
  balls[1].right = 4;  // Left -> left-right
  balls[2].left = 5;   // Right -> right-left
  balls[2].right = 6;  // Right -> right-right
  
  return balls;
}

// SKEWED BINARY TREE - Added for visual contrast (all nodes on one side)
export function skewedBinaryTree(n = 5, width = 900) {
  let balls = [];
  let verticalGap = 90;
  let xOffset = width / 2;
  
  for (let i = 0; i < n; i++) {
    balls.push({
      id: i,
      value: i + 1,
      x: xOffset,
      y: verticalGap * (i + 1),
      state: "default",
      left: null,
      right: null,
    });
  }
  
  // Connect in a straight line (all right children)
  for (let i = 0; i < n - 1; i++) {
    balls[i].right = i + 1;
  }
  
  return balls;
}