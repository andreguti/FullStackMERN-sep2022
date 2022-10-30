var booksArray = []

function bookTitle(title){
  return {title:title};
}

function factory(n){
  for(let i = 0;i < n;i++){
    booksArray.push(bookTitle('titulo: ' + i));
  }
  return booksArray;
}

function stampBooks(myBooks){
  myBooks.forEach(item => item.owner = 'me');
}

factory(3);
stampBooks(booksArray);

console.log(booksArray);