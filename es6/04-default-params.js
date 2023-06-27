function newUser(name, age, country) {
    var name = name || 'Diego'
    var age = age || 21
    var country = country || 'col'
    console.log(name,age,country)
}
newUser()
newUser('Alejandro', 21, 'Co')

function newAdmin(name = 'Diego', age = 21, country ='Co'){
    console.log(name,age,country)
}
newAdmin('Ana', 28, 'PE')