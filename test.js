const calculator = {
    add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b) {
      return a - b;
    },
    multiply: function(a, b) {
      return a * b;
    },
    divide: function(a, b) {
      if (b === 0) {
        console.log('Error: Division by zero is not allowed.');
        return null;
      } else {
        return a / b;
      }
    }
  };
  
  // Usage:
  console.log(calculator.add(5, 3));      // Outputs: 8
  console.log(calculator.subtract(5, 3)); // Outputs: 2
  console.log(calculator.multiply(5, 3)); // Outputs: 15
  console.log(calculator.divide(5, 3));   // Outputs: 1.6666666666666667
  console.log(calculator.divide(5, 0));   // Outputs: Error: Division by zero is not allowed.