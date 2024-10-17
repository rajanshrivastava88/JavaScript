// Object Get & Set

// _(underscore means Private value properties)

const User = {
    _email: 'rajansri@gmail.com',
    _password: "raja@1234",

    get email() {
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

//Factory Function

const tea = Object.create(User)
console.log(tea.email);
