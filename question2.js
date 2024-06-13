function printPattern() {
  let rows = 3; // Number of rows in the pattern

  for (let i = 1; i <= rows; i++) {
      let pattern = '';
      for (let j = 1; j <= i; j++) {
          pattern += '* ';
      }
      console.log(pattern.trim());
  }
}

printPattern();
