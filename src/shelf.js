function shelfBook(title, genre){
  if (genre.length < 3) {
      return genre.unshift(title);
  }
 }

function unshelfBook(title, genre){
  for(i = 0; i < genre.length; i++) {
  if (title === genre[i].title) {
    return genre.splice(i, 1)
    }
  }
}

function listTitles(titles){
  var titleList = [];
  for(var i = 0; i < titles.length; i++) {
    var listOfTitles = titles[i].title; titleList.push(listOfTitles);
      }
return titleList.join(', ');
}

function searchShelf(shelf, bookTitle){
  for (var i = 0; i < shelf.length; i++)
  var bookTitleQuery = shelf[i].title;
  {
    if(bookTitleQuery.includes(bookTitle)){
      return true;
    } else {
      return false;
      }
    }
  }

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};