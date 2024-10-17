// Properties Get & Set

function User(email, password) {
    this._email = email;
    this._password = password

    Object.defineProperties(this, 'email', {
        
    })
}