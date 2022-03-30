//Adding items
//To add one or more items to the end of an array we can use push(). Note that you need to include one or more items that you want to add to the end of your array.

const cities = ['Manchester', 'Liverpool'];
cities.push('Cardiff');
console.log(cities);      // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push('Bradford', 'Brighton');
console.log(cities);      // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]



//To add an item to the start of the array, use unshift():

const city = ['Manchester', 'Liverpool'];
cities.unshift('Edinburgh');
console.log(city);     // [ "Edinburgh", "Manchester", "Liverpool" ]


//Removing items
//To remove the last item from the array, use pop().

const citie = ['Manchester', 'Liverpool'];
cities.pop();
console.log(citie);     // [ "Manchester" ]


//To remove the first item from an array, use shift():

const citi = ['Manchester', 'Liverpool'];
cities.shift();
console.log(citi);     // [ "Liverpool" ]


//If you know the index of an item, you can remove it from the array using splice():

const towns = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
const index = cities.indexOf('Liverpool');
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(towns);     // [ "Manchester", "Edinburgh", "Carlisle" ]
