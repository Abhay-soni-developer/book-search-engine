const bookOperations = {

    booksContainer: [],

    addBook(book){
        this.booksContainer.push(book);
    },

    clearBooksContainer(){
        this.booksContainer=[];
    },

    getBooksContainer(){
        return this.booksContainer;
    }

}