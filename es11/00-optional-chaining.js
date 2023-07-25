const users = {
    gndx: {
        country: 'CO'
    },
    ana: {
        country: 'MX'
    }
}

console.log(users.gndx.country)
console.log(users.gndx1.country) // asegurando de que existe y por consecencia bota error 
console.log(users?.bebeloper?.country)// si existe imprimir sino traer undefined