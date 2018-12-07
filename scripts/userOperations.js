const userOperations = {
    user: null,

    async login(email, pass) {
        var user = await DAO.getUserRegData(email, pass);
        this.user = new User(user.uname, user.email, user.gender, user.mobile, user.cart, user.favList);
    },

    register(newUserData) {
        return DAO.registerNewUser(newUserData);
    },

    validateLoginCredentials() {

    },

    validateRegCredentials() {

    },

    updateCartList() {
        //new items may have been addded or old item may be have been removed or both
        // in all this case you have to update this in database

    },

    updateFavList() {
        //new items may have been addded or old item may be have been removed or both
        // in all this case you have to update this in database
    }


}