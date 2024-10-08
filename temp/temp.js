const positions = [
    [0, 2],
    [1, 2],
    [0, 1],
    [1, 2],
    [0, 2],
    [1, 2],
    [0, 1],
    [1, 2],
    [0, 2],
    [1, 2],
    [0, 1],
    [1, 2],
  ];
  
  // Create a mapping of box positions
  const boxElements = [document.getElementById('box0'), document.getElementById('box1'), document.getElementById('box2')];
  let currentPositions = [0, 1, 2]; // Initial positions of boxes
  
  function swapBoxes([a, b]) {
    // Swap positions
    [currentPositions[a], currentPositions[b]] = [currentPositions[b], currentPositions[a]];
  
    // Apply transformations based on new positions
    boxElements[currentPositions[0]].style.transform = 'translateX(0)';
    boxElements[currentPositions[1]].style.transform = 'translateX(100px)';
    boxElements[currentPositions[2]].style.transform = 'translateX(200px)';
  }
  
  function animateSwaps(index = 0) {
    if (index >= positions.length) return; // Stop when all swaps are done
  
    swapBoxes(positions[index]);
  
    // Animate the next swap after 1 second
    setTimeout(() => {
      animateSwaps(index + 1);
    }, 1000);
  }
  
  // Start the animation
  animateSwaps();
  