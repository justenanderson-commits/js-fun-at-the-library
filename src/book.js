function createTitle(title) {
  return `The ${title}`;
  }

function buildMainCharacter(name, age, pronouns) {
  var characterBuilder = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return characterBuilder;
}

function saveReview(stringValue, reviews) {
    if(reviews.includes(stringValue) === false) {
      return reviews.push(stringValue);
  }
}

function calculatePageCount(bookTitle, bookPageCount) {
  bookPageCount = bookTitle.length * 20
  return bookPageCount
}

function writeBook(bookTitle, bookCharacter, genre) {
  var bookWriter = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: bookTitle.length * 20,
    genre: genre,
  }
  return bookWriter;
}

function editBook(){
  newPageCount = (bookWriter.pageCount) * 0.75;
  return newPageCount
}


//console.log(buildMainCharacter)
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
