//You can access individual items in the array using bracket notation and supplying the item's index, in the same way that you accessed the letters in a string.

//Example

const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping[0]);
// returns "bread"

//You can also modify an item in an array by giving a single array item a new value. Try this:

const items = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
items[0] = 'tahini';
console.log(items);
// shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]