//Varible declaration and initialization using the initial data
alert("Welcome to Train Fare !!!")
console.log("This amazing program !")

const userName = prompt("What is your Name : ")
confirm("Would you like to confirm this : ")

const userAge = Number(prompt("What is your age: "))
confirm("Would you confirm this : ")

const userStartingPoint = prompt("What is your Starting Point too chose from \n TIRANA \n FRANKFURT \n UDINE \n SICILIA")
confirm("Would you confirm this : ")

const userDestinationPoint = prompt("What is your Destination Point too choose from : \n MILANO 900km \n TORINO 1200km \n MUNICH 5000km \n BERLIN 7000km:")
confirm("Would you confirm this : ")

// const userKm = Number(prompt("How far are you travelling in km : "))
// confirm("Would you confirm this : ")

const priceConstant = 0.21

//Destination points declaration
const destinationName1 = "MILANO"
let destinationDistance1 = 900
let destinationPrice1 = priceConstant * destinationDistance1

const destinationName2 = "TORINO"
let destinationDistance2 = 1200
let destinationPrice2 = priceConstant * destinationDistance2

const destinationName3 = "MUNICH"
let destinationDistance3 = 5000
let destinationPrice3 = priceConstant * destinationDistance3

const destinationName4 = "BERLIN"
let destinationDistance4 = 7000
let destinationPrice4 = priceConstant * destinationDistance4

//The price and calculation variables
// const priceConstant = 0.21
// const calculatePrice = userKm * priceConstant

// if (userDestinationPoint === "MILANO" || userDestinationPoint === "TORINO" || userDestinationPoint === "MUNICH" || userDestinationPoint === "BERLIN" ) {
//     let calculateDiscount1 = 0.20 * destinationPrice1
//     let calculateDiscount2 = 0.40 * destinationPrice1
//     let FinalPrice1 = destinationPrice1 - calculateDiscount1
//     let FinalPrice2 = destinationPrice1 - calculateDiscount2
// }


// let calculateDiscount1 = 0.20 * calculatePrice
// let FinalPrice1 = calculatePrice - calculateDiscount1

// let calculateDiscount2 = 0.40 * calculatePrice
// let FinalPrice2 = calculatePrice - calculateDiscount2

//Here the evauluation of the data
if (userAge  < 18) { //Junior get 20% discount
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${userKm} with 20% discount wich is: ${FinalPrice1.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${userKm} with 20% discount wich is: ${FinalPrice1.toFixed(1)}$`)
}

else if (userAge > 65) { //Senior get 40% discount
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${userKm} with 40% discount wich is: ${FinalPrice2.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${userKm} with 40% discount wich is: ${FinalPrice2.toFixed(1)}$`)
}

else { //Thre is no discount for this group of age
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${userKm} with no discount with price being : ${calculatePrice.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${userKm} with no discount with price being : ${calculatePrice.toFixed(1)}$`)
}