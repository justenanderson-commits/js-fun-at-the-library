var fantasyShelf = [];
var fictionShelf = [];
var nonFictionShelf = [];

function createLibrary(libraryName, shelves, genre){
  var newLibrary = {
    name: libraryName,
    shelves: {
      fantasy: fantasyShelf,
      fiction: fictionShelf,
      nonFiction: nonFictionShelf,
    },
  };
  return newLibrary;
}

function addBook(library, book)
{
    var bookGenre = book.genre;

  if (bookGenre === "fantasy")
  {
    library.shelves.fantasy.push(book);
  }
  else if (bookGenre === "fiction")
  {
    library.shelves.fiction.push(book);
  }
  else
  {
    library.shelves.nonFiction.push(book);
  }
  return library;
}


module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};
