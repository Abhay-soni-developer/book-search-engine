const searchOperations = { 
    
    searchOperationsInit(){
        this.searchBar=document.getElementById('search-bar')
    } ,
    searchForBooks(){
        var searchQuery = this.searchBar.value;
        bookOperations.clearBooksContainer();
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=40`)
        .then((resp)=>resp.json())
        .then((data)=>{
            data.items.forEach(book=>{
                bookOperations.addBook(new Book(book));
            })
        }).then(()=>{updateBookContainer(searchQuery)});
        
        
    },


}