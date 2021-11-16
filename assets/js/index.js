//Varible declaration and initialization using the initial data
alert("Welcome to Train Fare !!!")
console.log("This amazing program !")
const userName = prompt("What is your Name : ")
const userAge = Number(prompt("What is your age: "))
confirm("Would you confirm this : ")
const userKm = Number(prompt("How far are you travelling in km : "))
confirm("Would you confirm this : ")

//The price and calculation variables
const priceConstant = 0.21
const calculatePrice = userKm * priceConstant
let calculateDiscount1 = 0.20 * calculatePrice
let FinalPrice1 = calculatePrice - calculateDiscount1
let calculateDiscount2 = 0.40 * calculatePrice
let FinalPrice2 = calculatePrice - calculateDiscount2

//Here the evauluation of the data
if (userAge  < 18) { //Junior get 20% discount
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${userKm} with 20% discount wich is: ${FinalPrice1.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${userKm} with 20% discount wich is: ${FinalPrice1.toFixed(1)}$`)
}

else if (userAge > 65) { //Senior get 40% discount
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${userKm} with 40% discount wich is: ${FinalPrice2.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${userKm} with 40% discount wich is: ${FinalPrice2.toFixed(1)}$`)
}

else {
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${userKm} with no discount with price being : ${calculatePrice.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${userKm} with no discount with price being : ${calculatePrice.toFixed(1)}$`)
}