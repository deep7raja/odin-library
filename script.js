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
