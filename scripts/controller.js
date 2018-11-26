window.addEventListener('load', ()=>{
    searchOperations.searchOperationsInit();
    booksContainerView = document.querySelector(".books-container");
    document.querySelector(".search-button").addEventListener("click", ()=>{
        searchOperations.searchForBooks();
    });
});


function updateBookContainer(searchQuery){
    updateSearchHeading(searchQuery);
    clearBookContainerView();
    bookOperations.getBooksContainer().forEach( book=>{
        let bookCard = createCard();
        bookCard.querySelector(".book-image>img").src=book.imgLink;
        bookCard.querySelector(".book-name").innerText = book.title;
        bookCard.querySelector(".author-name").innerText = book.authorName;
        bookCard.querySelector(".read-more-link").href = book.readMoreLink;
        bookCard.classList.remove("display-none");
        appendBookCard(bookCard);
    });
}

function appendBookCard(bookCard){
    booksContainerView.append(bookCard);
}

function updateSearchHeading(searchQuery){
    document.querySelector("#search-heading").innerHTML = `Search Result For ${searchQuery}`;
}

function createCard(){
    var bookCard = document.querySelector('#site-assets>.book-card.display-none').cloneNode(true);
    return bookCard;
}

function clearBookContainerView(){
    booksContainerView.querySelectorAll('.book-card').forEach(book=>book.remove());;
}
