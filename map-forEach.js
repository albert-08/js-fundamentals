// Methods that iterate over an array.
// Methods that DO NOT modify the original array (Immutability).

// map()

const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.map(num => num * num)

console.log(numbers)
console.log(squaredNumbers)

// forEach()

const colors = ['red', 'pink', 'blue']
colors.forEach(color => console.log(color))

console.log(colors)