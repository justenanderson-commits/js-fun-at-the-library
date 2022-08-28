function createLibrary(libraryName, shelves, genre){
  var newLibrary = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
  return newLibrary;
}

function addBook(library, book){
    var bookGenre = book.genre;
    if (bookGenre === "fantasy"){
    library.shelves.fantasy.push(book);
  } else if (bookGenre === "fiction"){
    library.shelves.fiction.push(book);
  } else {
    library.shelves.nonFiction.push(book);
  }
  return library;
}

function checkoutBook(library, bookTitle, genre){
  var shelf = library.shelves[genre]
  var checkedOut = false;

  for (i = 0; i < shelf.length; i++) {
    if (bookTitle === shelf[i].title){
      shelf.splice(i, 1);
      checkedOut = true;
    }
}
  return checkedOut ? `You have now checked out ${bookTitle} from the ${library.name}` :
  `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
}








 //   if (genre === "fantasy") {
 //     library.shelves.fantasy.splice(i,1)
 //   } else if (genre === "fiction") {
 //      library.shelves.fiction.splice(i,1)
 //    } else if (genre === "nonFiction") {
 //      library.shelves.nonFiction.splice(i,1)
 //     }
 //     greeting = `You have now checked out ${book} from ${library}`;
 //     return greeting;
 //   }
 // }

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
