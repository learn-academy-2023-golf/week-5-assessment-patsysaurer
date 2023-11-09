// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.
 
describe("secretMessage", () => {
    it("takes in a string and returns a string with a coded message", () => {
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
        expect(secretMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l") 
        expect(secretMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k") 
        expect(secretMessage(secretCodeWord3)).toEqual("3cc3ntr1c") 
    })
})

// ReferenceError: secretMessage is not defined


// b) Create the function that makes the test pass.

// Pseudo code:
    // - Create a function named SecretMessage
        // - Input: string
        // - Output: string with a coded message
            // - Note: The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.
                // convert the string to an array to iterate over each character 
                // create an empty array to hold the coded message
                // use .includes and a conditional statement to check and assign the letters to the corresponding number 
                // push to the coded message array 
                // return the coded message in string form using .join('')


        const secretMessage = (str) => {
            let strArr = str.split("")
            let codedMessage = []
            strArr.map((value) => {
                if(value.includes('a')|| value.includes('A')){
                    value = 4
                    codedMessage.push(value)
                } else if(value.includes('e')|| value.includes('E')){
                    value = 3
                    codedMessage.push(value)
                } else if(value.includes('i')|| value.includes('I')){
                    value = 1
                    codedMessage.push(value)
                } else if(value.includes('o')|| value.includes('O')){
                    value = 0
                    codedMessage.push(value)
                } else {
                    codedMessage.push(value)
                }
            })
            return codedMessage.join('')
        }


// --------------------2) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a 'full house'", () => {
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        const hand4 = [7, 2, 7, 2, 7]
        // Expected output: true
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)
    })
})

// ReferenceError: fullHouse is not defined


// b) Create the function that makes the test pass.
// Pseudo code:
 // - Create a function named fullHouse
 // - Input: array
 // - Output: boolean 
    // 1.  create an empty obj to hold the count of repeating card values
    // 2.  iterate over the array using the map method
    // 3.  check if the value is in card object
    // 4.  if value is present than increment 
    // 5.  if value is not present than assign the value to 1
    // 6.  create another method to target the key from the card object
    // 7.  set a variable "pair" to 2 so the program knows how many cards equal a "pair" 🂡 🂡
    // 8.  set a variable "triple" to 3 so the program knows how many cards equal a "three of a kind"  🂡 🂡 🂡
    // 9.  set a variable "find pairs" to invoke the find key function and search for a pair 
    // 10. set a variable "find three of a kind" to invoke and find the key with a triple 
    // 11. set a variable "check for a full house" to check if the incoming array is a full house or not use the ternary operator to check if the card object has both a pair and triple it will result to true that it is a full house
    // 12. return the boolean value

        const fullHouse = (arr) => {
            let cardObj = {}
            arr.map((value) => {
                if(cardObj[value]){
                    cardObj[value]++
                } else {
                    cardObj[value] = 1
                }
            })   

         const findKeyValue = (obj, value) => {
            for(const key in obj){
                if(obj[key] === value){
                    return key
                }
            }
         }
         
         let pair = 2
         let triple = 3
         let findPairs = findKeyValue(cardObj, pair)
         let findThreeOfAKind = findKeyValue(cardObj, triple)
         let checkForAFullHouse = findPairs && findThreeOfAKind ? true : false
         return checkForAFullHouse
        }
        
        const hand1 = [5, 5, 5, 3, 3] // true
        console.log(fullHouse(hand1))
        const hand2 = [5, 5, 3, 3, 4] // false
        console.log(fullHouse(hand2))
        const hand3 = [5, 5, 5, 5, 4] // false
        console.log(fullHouse(hand3))
        const hand4 = [7, 2, 7, 2, 7] // true
        console.log(fullHouse(hand4))