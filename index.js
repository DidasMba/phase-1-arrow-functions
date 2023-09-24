// 1) Function expression called divide
function divide() {
    // 2) Divide 2000 by 100
    return 2000 / 100;
  }
  
  // 3) Arrow function called square
  const square = (number) => {
    // 4) Square arrow function takes one parameter and multiplies it by itself
    return number * number;
  };
  
  // 5) Arrow function called add
  const add = (num1, num2) => {
    // 6) Add arrow function takes two parameters and adds them together
    return num1 + num2;
  };
  
  // Example usage:
  console.log(divide()); // Should output 20
  console.log(square(5)); // Should output 25
  console.log(add(10, 15)); // Should output 25
  