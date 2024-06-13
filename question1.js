function compareTriplets(a, b) {
  // Initialize points for Alice and Bob
  let alicePoints = 0;
  let bobPoints = 0;

  // Loop through each of the three categories
  for (let i = 0; i < 3; i++) {
      if (a[i] > b[i]) {
          alicePoints += 1;
      } else if (a[i] < b[i]) {
          bobPoints += 1;
      }
      // No action needed if a[i] == b[i], as no points are awarded
  }

  // Return the scores as an array
  return [alicePoints, bobPoints];
}

// Example usage:
const a = [17, 28, 30];
const b = [99, 16, 8];
console.log(compareTriplets(a, b));  // Output: [2, 1]
