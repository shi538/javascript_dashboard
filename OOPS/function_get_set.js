function User(email, password) {  
    this.email = email;
    this.password = password;

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this._email = value;
        }
    });

    // now setter works
}

const chai = new User("shia@234", "123");

console.log(chai.email); // SHIA@234
