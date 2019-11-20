

const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

  //1

  let result1 = entrepreneurs.filter(entrepreneur => entrepreneur.year > 1969 && entrepreneur.year < 1980);
  console.log("1/ Entrepreneurs nés dans les années 70 :");
  console.log(result1);

  //2
  let result2 = [];
entrepreneurs.forEach(entrepreneur => {
  result2.push(`${entrepreneur.first} ${entrepreneur.last}`);
});
console.log("2/ Prénom et nom des entrepreneurs :");

console.log(result2);

//3

let result3 = [];
entrepreneurs.forEach(entrepreneur => {result3.push(`${entrepreneur.first} ${entrepreneur.year}`);
    result3.push()
})
console.log("3/ prénom et année de naissance des entrepreneurs : ");

console.log(result3);

//4

let result4 = [];
entrepreneurs.forEach(entrepreneur => {result4.push(2019 - entrepreneur.year)})

console.log("4/ âge des etntrepreneurs: ");

console.log(result4);

//5
function compare( a, b ) {
    if ( a.last < b.last ){
      return -1;
    }
    if ( a.last > b.last ){
      return 1;
    }
    return 0;
  }

let result5 = entrepreneurs.sort( compare );
console.log("5/ Entrepreneurs par ordre alphabétique du nom :");
console.log(result5);

