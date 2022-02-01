let myLibrary = [];

function Book(title, author, numPages, isRead){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = isRead;   

    this.info = function(){
        const status = isRead ? 'read':'not read yet';
        return `${title} by ${author}, ${numPages} pages, ${status}`;
    }
}

const book1 = new Book('University', 'zimansky', 5627, true);
const book2 = new Book('Physics', 'LRT', 69420, false);

function addBookToLibrary(book) {
  myLibrary.push(book);
}
function makeTableData(content){
  let td = document.createElement('td');
  td.textContent = content;
  return td;
}
function makeReadButton(index){
  let td = document.createElement('td'); 
  let button = document.createElement('button');
  button.textContent = myLibrary[index].isRead ? "UnRead":"Read";
  button.addEventListener('click', ()=>{
    myLibrary[index].isRead = !myLibrary[index].isRead;
    showBooks();
  })
  td.appendChild(button)
  return td;
}
function makeDeleteButton(index){
  let td = document.createElement('td');
  let button = document.createElement('button');
  button.textContent = 'Delete';
  button.addEventListener('click', ()=>{
    myLibrary.splice(index, 1);
    showBooks();
  })
  td.appendChild(button)
  return td;
}
function makeRow(book, index){
  let tr = document.createElement('tr');
  tr.dataset.listIndex = index;
  tr.appendChild(makeTableData(book.title));
  tr.appendChild(makeTableData(book.author));
  tr.appendChild(makeTableData(book.numPages));
  tr.appendChild(makeTableData(book.isRead? 'Yes':'No'));
  tr.appendChild(makeReadButton(index));
  tr.appendChild(makeDeleteButton(index));
  return tr;
}
function showBooks(){
  let tableRowList = document.querySelector('tbody').children;
  while(tableRowList.length > 0){  //emptying table
    tableRowList[0].remove();
  }
  for(let i=0; i<myLibrary.length; ++i){
    document.querySelector('tbody').appendChild(makeRow(myLibrary[i], i));
  }
}


addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book1);
addBookToLibrary(book2);
showBooks();


const addBookButton = document.querySelector('#addBookButton');
addBookButton.addEventListener('click', ()=>{
  const inputTitle = document.querySelector('#input-title');
  const inputAuthor = document.querySelector('#input-author');
  const inputPages = document.querySelector('#input-pages');
  const inputRadioRead = document.querySelector('#radioRead');
  let tempBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputRadioRead.checked);
  addBookToLibrary(tempBook);
  showBooks();
  }
)