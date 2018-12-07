window.addEventListener('load', () => {
    searchOperations.searchOperationsInit();
    booksContainerView = document.querySelector(".books-container");
    document.querySelector(".search-button").addEventListener("click", () => {
        searchOperations.searchForBooks();
    });
    advSearchBarToggleButton = document.querySelector("#adv-search-btn");
    advSearchBarToggleButton.addEventListener('click', toggleAdvanceSearchBar);
    advanceSearchBar = document.querySelector("#adv-search-bar");
    searchResultDiv = document.querySelector("#search-result");
    advanceSearchBar.style.transform = 'scaleY(0)';
    loginBox = document.querySelector("#login-box");
    loginClose = document.querySelector("#login-box #login-close");
    loginBtn = document.querySelector("#login-btn");
    loginClose.addEventListener('click', () => toggleLoginBoxDisplay(false));
    loginBtn.addEventListener('click', () => toggleLoginBoxDisplay(false));
    registrationBox = document.querySelector("#registration-box");
    document.querySelector("#registration-btn").addEventListener('click', toggleRegBox);
    regBoxClose = document.querySelector("#registration-box #login-close");
    regBoxClose.addEventListener("click", toggleRegBox);
    DAO.daoInit();
    
    registrationBtn=document.querySelector("#reg-reg-btn")
    registrationBtn.addEventListener('click', registerNewUser);
    regResetBtn=document.querySelector("#reg-reset");
    regResetBtn.addEventListener('click', regReset);
    loginBtn=document.querySelector('#login-btn-btn');
    loginBtn.addEventListener('click', loginUser);
   
});


function updateBookContainer(searchQuery) {
    updateSearchHeading(searchQuery);
    clearBookContainerView();
    bookOperations.getBooksContainer().forEach(book => {
        let bookCard = createCard();
        bookCard.querySelector(".book-image>img").src = book.imgLink;
        bookCard.querySelector(".book-name").innerText = book.title;
        bookCard.querySelector(".author-name").innerText = book.authorName;
        bookCard.querySelector(".read-more-link").href = book.readMoreLink;
        bookCard.classList.remove("display-none");
        appendBookCard(bookCard);
    });
}

function appendBookCard(bookCard) {
    booksContainerView.append(bookCard);
}

function updateSearchHeading(searchQuery) {
    document.querySelector("#search-heading").innerHTML = `Search Result For ${searchQuery}`;
}

function createCard() {
    var bookCard = document.querySelector('#site-assets>.book-card.display-none').cloneNode(true);
    return bookCard;
}

function clearBookContainerView() {
    booksContainerView.querySelectorAll('.book-card').forEach(book => book.remove());;
}

function toggleAdvanceSearchBar() {
    // console.log(advanceSearchBar);
    if (advanceSearchBar.style.transform == 'scaleY(0)') {
        searchResultDiv.style.marginTop = "150px";
        advanceSearchBar.style.transform = "scaleY(1)";
    } else {
        advanceSearchBar.style.transform = "scaleY(0)";
        searchResultDiv.style.marginTop = "100px";
    }
}

function toggleLoginBoxDisplay(state) {
    loginBox.classList.toggle("display-none");
}

function toggleRegBox(state) {
    registrationBox.classList.toggle("display-none");
}

function getUserRegData() {
    var newUser;
    pass = document.querySelector("#reg-uname").value;
    if ( pass == document.querySelector("#reg-repass").value) {
        newUser = new User(document.querySelector("#reg-uname").value,
                           document.querySelector("#reg-email").value,
                           document.querySelector("input[name='gen']:checked").value,
                           document.querySelector("#reg-mob").value
                           );
        newUser.pass = pass;
    }
    return newUser;
}

function registerNewUser(){
    var newUserData = getUserRegData();
    console.log(newUserData);
    console.log(userOperations.register(newUserData));
}


function regReset(){
    document.querySelectorAll("#registration-box input:not([type='radio])").forEach( box => {box.value=box.defaultValue});
    document.querySelectorAll("#registration-box input[type='radio']").forEach( box => {box.checked=false});
}

function loginUser(){
    var email=document.querySelector("#login-email").value;
    var pass=document.querySelector('#login-pass').value;
    userOperations.login(email, pass);
}