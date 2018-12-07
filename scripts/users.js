class User{

    constructor(username, email, gender, mobile, cartList=[], favList=[]){
        this.email=email;
        this.uname=username;
        this.gender=gender;
        this.mobile=mobile;
        this.cart=cartList;
        this.favouriteBooks=favList;
    }

    initCart(){
        //check database for any product in cart for this user;
    }

    initFavBooksList(){
        //check database for book marked as fav for this user;
    }

    addBookToCart(book){
        //add Book To Cart
        this.cart.push(book);
    }

    addToFavBookList(book){
        //add Book to favourite List
        this.favouriteBooks.push(book);
    }

    getCartList(){
        return this.cart;
    }

    getFavBookList(){
        return this.favouriteBooks;
    }

    removeFromFavBook(){

    }

    removeCartList(){

    }


}