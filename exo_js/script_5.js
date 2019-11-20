

const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];



let result6 = books.filter(book => book.rented>0);
console.log("6/ Nombre de fois où le livre a été emprunté:");
console.log(result6);

//7

function compare( a, b ) {
    if (a.rented < b.rented) {
      return 1;
    } 
    if (a.rented > b.rented) {
      return -1;
    }
    return 0;
  }
  let result7 = books.sort(compare)[0];
  console.log("Quel est livre le plus emprunté ?");
  console.log(result7);



//8
let result8 = books.sort(compare)[books.length - 1];
console.log("Quel est le livre le moins emprunté ?");
console.log(result8);

//9

let result9 = books.find(book => book.id = 873495);
console.log("trouvé le livre");
console.log(result9);

//10

const y = books.findIndex(book => {
  return book.id === 133712
})

console.log(books.splice(y, 1))
 console.log(books);

//11



let result11 = books.sort(function(e,f){
  return e.title.localeCompare(f.title)
}
);
console.log("Affiche les livres par ordre alphabétique");
console.log(result11);


