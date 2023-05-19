// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)
    // "ATTGC" --> "TAACG"
    // "GTAT" --> "CATA"

//Parameters: Given a string parameter.
//Results: Convert the characters in the given string parameter into it's other complement and return the string
//Examples:
    // assert.strictEqual(DNAStrand("AAAA"),"TTTT","String AAAA is")
    // assert.strictEqual(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
    // assert.strictEqual(DNAStrand("GTAT"),"CATA","String GTAT is")   
//Pseudocode: 
    //1. Create an object that will contain key and value of each respective complement.
    //2. Use the split method to convert each character in the given string into an array element.
    //3. Use the array map method to iterate over each item, replacing the value of a DNA character with it's complement using the created object variable.
    //4. Use the array join method to combine the array into a string and return the result.
//Time Complexity: O(n) or Linear, depending on the given string length.

function DNAStrand(dna){
    const dnaComplement = {
      'G' : 'C',
      'C' : 'G', 
      'T' : 'A',
      'A' : 'T'
    }
    return dna.split('').map(e => dnaComplement[e]).join('')
}