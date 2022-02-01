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
console.log(book1.info());
console.log(book2.info());




function addBookToLibrary(book) {
  myLibrary.push(book);
}

function makeTableData(content){
  let td = document.createElement('td');
  td.textContent = content;
  return td;
}
function makeRow(book){
  let tr = document.createElement('tr');
  tr.appendChild(makeTableData(book.title));
  tr.appendChild(makeTableData(book.author));
  tr.appendChild(makeTableData(book.numPages));
  tr.appendChild(makeTableData(book.isRead));
  return tr;
}

function showBooks(){
  const tableRowList = document.querySelector('table').children[0].children;
  while(tableRowList.length > 1){  //emptying table
    tableRowList[1].remove();
  }
  for(let i=0; i<myLibrary.length; ++i){
    document.querySelector('table').appendChild(makeRow(myLibrary[i]));
  }
}


addBookToLibrary(book1);
addBookToLibrary(book2);