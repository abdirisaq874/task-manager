
const name = "mandeez"
const userAge = 21

const user={
    name,
    age: userAge,
    location: "somalia"
}

console.log(user)

const product = {
    label:"red notebook",
    price:3,
    stock:201,
    salePrice: undefined
}

// const label =product.label
// const stock = product.stock

const {
    label:ahmed, stock
} = product

console.log(ahmed + "\n"+stock)