//Varible declaration and initialization using the initial data
alert("Welcome to Train Fare !!!")
console.log("This amazing program !")

let userName = prompt("What is your Name : ")
confirm("Would you like to confirm this : ")

let userAge = Number(prompt("What is your age: "))
confirm("Would you confirm this : ")

if (Number.isNaN(userAge) || userAge < 1 ||userAge > 120) {
    alert("Please enter again, the age cannot be more than 120, and less than 1, also please enter a number for it")
    userAge = Number(prompt("What is your age: "))
    confirm("Would you confirm this : ")

    if(userAge < 1 || userAge > 120) {
        alert("I have no words sir, cant you read the text ???")
        userAge = Number(prompt("What is your age: "))
        confirm("Would you confirm this : ")

        if(userAge < 1 || userAge > 120) {
            throw new Error("The user was trying to troll us with not understaning the rules")
        }
    }
}

let userStartingPoint = prompt("What is your Starting Point too chose from \n TIRANA \n KUKES")
confirm("Would you confirm this : ")

if (userStartingPoint === "tirana" || userStartingPoint === "Tirana" ||  userStartingPoint === "KUKES" || userStartingPoint === "Kukes") {

    alert("Please enter the name in like TIRANA not lowercase or capitalize or random please try again.")
    userStartingPoint = prompt("What is your Starting Point too chose from \n TIRANA \n KUKES")
    confirm("Would you confirm this : ") 
    
    if (userStartingPoint === "tirana" || userStartingPoint === "Tirana" ||  userStartingPoint === "KUKES" || userStartingPoint === "Kukes") {
        alert("Please enter the name in like TIRANA not lowercase or capitalize or random please try again.")
        userStartingPoint = prompt("What is your Starting Point too chose from \n TIRANA \n KUKES")
        confirm("Would you confirm this : ") 

        if (userStartingPoint === "tirana" || userStartingPoint === "Tirana" ||  userStartingPoint === "KUKES" || userStartingPoint === "Kukes") {
            throw new Error("The user was trying to troll us with not understaning the rules")
        }
    }
    
}

let userDestinationPoint = prompt("What is your Destination Point too choose from : \n MILANO \n TORINO \n MUNICH :")
confirm("Would you confirm this : ")

if (userDestinationPoint === "Milano" || userDestinationPoint === "milano") {

    alert("Please enter the name in like TIRANA not lowercase or capitalize or random please try again.")
    userDestinationPoint = prompt("What is your Destination Point too chose from  \n MILANO \n TORINO \n MUNICH")
    confirm("Would you confirm this : ")
    
    if (userDestinationPoint === "Milano" || userDestinationPoint === "milano") {
        alert("Please enter the name in like TIRANA not lowercase or capitalize or random please try again.")
        userDestinationPoint = prompt("What is your Destination Point too chose from  \n MILANO \n TORINO \n MUNICH")
        confirm("Would you confirm this : ")  

        if (userDestinationPoint === "Milano" || userDestinationPoint === "milano") {
            throw new Error("The user was trying to troll us with not understaning the rules")
        }
    }
            
}

alert("`The distances betwen destinations are as follow : \n TIRANA-MILANO 900KM \n TIRANA-TORINO 800KM \n TIRANA-MUNICH 5000KM :")
alert("`The distances betwen destinations are as follow : \n KUKES-MILANO 800KM \n TIRANA-TORINO 600KM \n TIRANA-MUNICH 4000KM :")

const priceConstant = 0.21

//distances betwen places TIRANA
const distanceTiranaMilano = 900
const distanceTiranaTorino = 800
const distanceTiranaMunich = 5000
//distances betwen places KUKES
const distanceKukesMilano = 800
const distanceKukesTorino = 600
const distanceKukesMunich = 4000

//VARIABLE DECLARATION
let destinationPriceTiranaMilano, destinationPriceTiranaTorino, destinationPriceTiranaMunich
let discountPriceTiranaMilanoJunior, discountPriceTiranaTorinoJunior, discountPriceTiranaMunichJunior
let discountPriceTiranaMilanoSenior, discountPriceTiranaTorinoSenior, discountPriceTiranaMunichSenior

let destinationPriceKukesMilano, destinationPriceKukesTorino, destinationPriceKukesMunich
let discountPriceKukesMilanoJunior, discountPriceKukesTorinoJunior, discountPriceKukesMunichJunior
let discountPriceKukesMilanoSenior, discountPriceKukesTorinoSenior, discountPriceKukesMunichSenior

//Conditionals to find price based on user input
if(userStartingPoint === "TIRANA" && userDestinationPoint === "MILANO") {
    destinationPriceTiranaMilano = priceConstant * distanceTiranaMilano
    discountPriceTiranaMilanoJunior = destinationPriceTiranaMilano - (0.20 * destinationPriceTiranaMilano)
    discountPriceTiranaMilanoSenior = destinationPriceTiranaMilano - (0.40 * destinationPriceTiranaMilano)
}

else if (userStartingPoint === "TIRANA" && userDestinationPoint === "TORINO") {
    destinationPriceTiranaTorino = priceConstant * distanceTiranaTorino
    discountPriceTiranaTorinoJunior = destinationPriceTiranaTorino - (0.20 * destinationPriceTiranaTorino)
    discountPriceTiranaTorinoSenior = destinationPriceTiranaTorino - (0.40 * destinationPriceTiranaTorino)
}

else if (userStartingPoint === "TIRANA" && userDestinationPoint === "MUNICH") {
    destinationPriceTiranaMunich = priceConstant * distanceTiranaMunich
    discountPriceTiranaMunichJunior = destinationPriceTiranaMunich - (0.20 * destinationPriceTiranaMunich)
    discountPriceTiranaMunichSenior = destinationPriceTiranaMunich - (0.40 * destinationPriceTiranaMunich)
}

else if (userStartingPoint === "KUKES" && userDestinationPoint === "MILANO") {
    destinationPriceKukesMilano = priceConstant * distanceKukesMilano
    discountPriceKukesMilanoJunior = destinationPriceKukesMilano - (0.20 * destinationPriceKukesMilano)
    discountPriceKukesMilanoSenior = destinationPriceKukesMilano - (0.40 * destinationPriceKukesMilano)
}

else if (userStartingPoint === "KUKES" && userDestinationPoint === "TORINO") {
    destinationPriceKukesTorino = priceConstant * distanceKukesTorino
    discountPriceKukesTorinoJunior = destinationPriceKukesTorino - (0.20 * destinationPriceKukesTorino)
    discountPriceKukesTorinoSenior = destinationPriceKukesTorino - (0.40 * destinationPriceKukesTorino)
}

else if (userStartingPoint === "KUKES" && userDestinationPoint === "MUNICH") {
    destinationPriceKukesMunich = priceConstant * distanceKukesMunich
    discountPriceKukesMunichJunior = destinationPriceKukesMunich - (0.20 * destinationPriceKukesMunich)
    discountPriceKukesMunichSenior = destinationPriceKukesMunich - (0.40 * destinationPriceKukesMunich)
}

//Here the evauluation of the data
if ( userAge  < 18 && (userStartingPoint === "TIRANA" && userDestinationPoint === "MILANO") ) { //Junior get 20% discount
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaMilano} with 20% discount wich is: ${discountPriceTiranaMilanoJunior.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaMilano} with 20% discount wich is: ${discountPriceTiranaMilanoJunior.toFixed(1)}$`)
}

else if ( userAge  < 18 && (userStartingPoint === "TIRANA" && userDestinationPoint === "TORINO") ) { //Junior get 20% discount
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaTorino} with 20% discount wich is: ${discountPriceTiranaTorinoJunior.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaTorino} with 20% discount wich is: ${discountPriceTiranaTorinoJunior.toFixed(1)}$`)
}

else if ( userAge  < 18 && (userStartingPoint === "TIRANA" && userDestinationPoint === "MUNICH") ) { //Junior get 20% discount
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaMunich} with 20% discount wich is: ${discountPriceTiranaMunichJunior.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaMunich} with 20% discount wich is: ${discountPriceTiranaMunichJunior.toFixed(1)}$`)
}

else if (userAge  < 18 && (userStartingPoint === "KUKES" && userDestinationPoint === "MILANO") ) { //Junior get 20% discount
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesMilano} with 20% discount wich is: ${discountPriceKukesMilanoJunior.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesMilano} with 20% discount wich is: ${discountPriceKukesMilanoJunior.toFixed(1)}$`)
}

else if (userAge  < 18 && (userStartingPoint === "KUKES" && userDestinationPoint === "TORINO") ) { //Junior get 20% discount
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesTorino} with 20% discount wich is: ${discountPriceKukesTorinoJunior.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesTorino} with 20% discount wich is: ${discountPriceKukesTorinoJunior.toFixed(1)}$`)
}

else if (userAge  < 18 && (userStartingPoint === "KUKES" && userDestinationPoint === "MUNICH") ) { //Junior get 20% discount
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesMunich} with 20% discount wich is: ${discountPriceKukesMunichJunior.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesMunich} with 20% discount wich is: ${discountPriceKukesMunichJunior.toFixed(1)}$`)
}

//PART 2 OF BIG CONDITIONALS
else if (userAge  > 65 && (userStartingPoint === "TIRANA" && userDestinationPoint === "MILANO") ) { //Junior get 20% discount
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaMilano} with 40% discount wich is: ${discountPriceTiranaMilanoSenior.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaMilano} with 40% discount wich is: ${discountPriceTiranaMilanoSenior.toFixed(1)}$`)
}

else if (userAge  > 65 && (userStartingPoint === "TIRANA" && userDestinationPoint === "TORINO") ) { //Junior get 20% discount
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaTorino} with 40% discount wich is: ${discountPriceTiranaTorinoSenior.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaTorino} with 40% discount wich is: ${discountPriceTiranaTorinoSenior.toFixed(1)}$`)
}

else if (userAge  > 65 && (userStartingPoint === "TIRANA" && userDestinationPoint === "MUNICH") ) { //Junior get 20% discount
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaMunich} with 40% discount wich is: ${discountPriceTiranaMunichSenior.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaMunich} with 40% discount wich is: ${discountPriceTiranaMunichSenior.toFixed(1)}$`)
}
// KUKES CONDITIONALS FOR SENIOR DISCOUNT
else if (userAge  > 65 && (userStartingPoint === "KUKES" && userDestinationPoint === "MILANO") ) { //Junior get 20% discount
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesMilano} with 40% discount wich is: ${discountPriceKukesMilanoSenior.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesMilano} with 40% discount wich is: ${discountPriceKukesMilanoSenior.toFixed(1)}$`)
}

else if (userAge  > 65 && (userStartingPoint === "KUKES" && userDestinationPoint === "TORINO") ) { //Junior get 20% discount
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesTorino} with 40% discount wich is: ${discountPriceKukesTorinoSenior.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesTorino} with 40% discount wich is: ${discountPriceKukesTorinoSenior.toFixed(1)}$`)
}

else if (userAge  > 65 && (userStartingPoint === "KUKES" && userDestinationPoint === "MUNICH") ) { //Junior get 20% discount
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesMunich} with 40% discount wich is: ${discountPriceTiranaMunichSenior.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesMunich} with 40% discount wich is: ${discountPriceTiranaMunichSenior.toFixed(1)}$`)
}

//PART 3 OF BIG CONDITIONALS to check both tirana and kukes for no discount price
else if ((userAge  >= 18 && userAge <=65) && (userStartingPoint === "TIRANA" && userDestinationPoint === "MILANO") ) { 
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaMilano} with 0% discount wich is: ${destinationPriceTiranaMilano.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaMilano} with 0% discount wich is: ${destinationPriceTiranaMilano.toFixed(1)}$`)
}

else if ((userAge  >= 18 && userAge <=65) && (userStartingPoint === "TIRANA" && userDestinationPoint === "TORINO") ) { 
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaTorino} with 0% discount wich is: ${destinationPriceTiranaTorino.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaTorino} with 0% discount wich is: ${destinationPriceTiranaTorino.toFixed(1)}$`)
}

else if ((userAge  >= 18 && userAge <=65) && (userStartingPoint === "TIRANA" && userDestinationPoint === "MUNICH") ) { 
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaMunich} with 0% discount wich is: ${destinationPriceTiranaMunich.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaMunich} with 0% discount wich is: ${destinationPriceTiranaMunich.toFixed(1)}$`)
}

//HERE WE CHECK FOR KUKES NO DISCOUNT
else if ((userAge  >= 18 && userAge <=65) && (userStartingPoint === "KUKES" && userDestinationPoint === "MILANO") ) { 
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesMilano} with 0% discount wich is: ${destinationPriceKukesMilano.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesMilano} with 0% discount wich is: ${destinationPriceKukesMilano.toFixed(1)}$`)
}

else if ((userAge  >= 18 && userAge <=65) && (userStartingPoint === "KUKES" && userDestinationPoint === "TORINO") ) { 
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesTorino} with 0% discount wich is: ${destinationPriceKukesTorino.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesTorino} with 0% discount wich is: ${destinationPriceKukesTorino.toFixed(1)}$`)
}

else if ((userAge  >= 18 && userAge <=65) && (userStartingPoint === "KUKES" && userDestinationPoint === "MUNICH") ) { 
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesMunich} with 0% discount wich is: ${destinationPriceTiranaMunich.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesMunich} with 0% discount wich is: ${destinationPriceTiranaMunich.toFixed(1)}$`)
}