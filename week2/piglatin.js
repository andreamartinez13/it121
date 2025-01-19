function translator(phrase) {
    //Pig Latin Code here
    // This for extracting from 0 and 1 character (meaning 0)
    const first = phrase.slice(0,1)
    // console.log(first)

    // to substract the rest of the word to move it
    const rest = phrase.slice(1) 
    const rest2 = phrase.slice(2) 

    // to know second letter in the word
    const second = phrase.slice(1,2)

    // to stablish consonants
    const consonants = "BCDFGHJKLMNPQRSTVWYZbcdfghjklmnpqrstvwxyz"

    // declare which are vowels
    const vowels = "aeiouAEIOU";

    // declare number of characters in a phrase
    const singlecharacter = phrase.length;
    // console.log(singlecharacter);

    // function to check if the phrase is equal or less than 1
    if (singlecharacter <=1) {
        return "Cannot be translater";
    }

    // Check if first character is or isn't vowel and adds "way"
    if (vowels.includes(first))  {

        return phrase + "way";

        
    } else {
        // if phrase start with 1 consonant move that letter to end and add 'ay'
        if (consonants.includes(first)  && consonants.includes(second)) {
            return rest2 + first + second + "ay"; 
        }
            // Case when the word is consonant and 2 vowel (if doesn't need else now)
             return rest + first + "ay"; 
 
    }                      
                        
}


