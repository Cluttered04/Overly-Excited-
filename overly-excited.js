let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];


// function addExcitement (theWordArray, punctuation, times) {

//     // Each time the for loop executes, you're going to add one more word to this string
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {
//         // Concatenate the new word onto buildMeUp
//         let extra = " "
//         if(i % 3 === 2 && i != 0){
//             for(let n = 0; n < times; n++) {
//             // n + 1;
//              extra = extra + punctuation;
//              console.log(extra);
//              console.log(n);
//             }

//             buildMeUp = buildMeUp + " " + theWordArray[i] + extra;

//         } else {
//             buildMeUp = buildMeUp + " " + theWordArray[i];
//         }
//         // Print buildMeUp to the console
//         console.log(buildMeUp);
//     }
// }

// Invoke the function and pass in the array

// Add a new argument to the function so that a developer can specify how many times the special character should be added.

// // I want to use a 4 asterisks
// addExcitement(sentence, "*", 4)


//fat arrow version!

const addExcitement = (theWordArray, punctuation, times) => {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        let extra = " "
        if(i % 3 === 2 && i != 0){
            for(let n = 0; n < times; n++) {
            // n + 1;
             extra = extra + punctuation;
             console.log(extra);
             console.log(n);
            }

            buildMeUp = buildMeUp + " " + theWordArray[i] + extra;

        } else {
            buildMeUp = buildMeUp + " " + theWordArray[i];
        }
        // Print buildMeUp to the console
        console.log(buildMeUp);
    }
}

addExcitement(sentence, ",", 4);