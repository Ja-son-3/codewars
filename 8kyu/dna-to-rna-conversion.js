// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:
    // "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

//Parameters: Given a string parameter representing a DNA string.
//Results: Convert the given DNA string to an RNA string and return it.
//Examples:
    // assert.strictEqual(DNAtoRNA("TTTT"), "UUUU")
    // assert.strictEqual(DNAtoRNA("GCAT"), "GCAU")
    // assert.strictEqual(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")
//Pseudocode: 
    //1. Use a replaceAll string method to replace all the T's with U's
    //2. Return the resulting RNA string.
//Time Complexity: Linear or 0(n) depending on the length of the string.

function DNAtoRNA(dna) {
    return dna.replaceAll('T','U')
}