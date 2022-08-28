function shelfBook(title, genre){
  if (genre.length < 3) {
      return genre.unshift(title);
  }
  console.log('shelfBook() will return: ', genre[0].title)
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
console.log('This is what titleList is returning: ', titleList);
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

  //try the .includes method
  //If the shelf matches the genre And
  //If the shelf includes the title,
  //Return true, else return false


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf

};

// var titleList = [];
// for(i = 0; i < genre.length; i++){
// titlelist.push(books[i].title);
// }
// console.log('This is the titleList value: ', sciFiShelf);
// return titleList;


//titles variable = [hyperion, dune, endersGame];
//does this need a for loop to pick off the title of each book
// Maybe write another line in there to iterate through the titles array
