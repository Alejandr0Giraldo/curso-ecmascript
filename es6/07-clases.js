// declarando
//class User {}
// instancia de una clase
//const newUser = new User()
// class user {
//     //metodos
//     greeting(){
//         return'Hello'
//     }
// }
//
// const gndx = new user()
// console.log(gndx.greeting())
// const bebeloper = new user()
// console.log(bebeloper.greeting())

// constructor

class user {
    //Constructor
    constructor() {
        console.log('Nuevo Usuario')
    }
    greeting(){
        return'Hello'
    }
}

const david = new user()