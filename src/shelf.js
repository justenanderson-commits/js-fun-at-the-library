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

function listTitles(title, genre){
  var titleList = [];
  titleList.splice(title, genre);
  return titleList;
}



function searchShelf(){

}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
