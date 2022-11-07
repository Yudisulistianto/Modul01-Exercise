// kelipatan 3 --> Bizz
// kelipatan 5 --> Buzz
// kelipatan 3 dan 5 --> BizzBuzz
let lmt = 100

for ( let i = 1; i <= lmt; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
    console.log(`BizzBuzz = ${i}`);
    } else if (i % 5 == 0) {
        console.log(`Buzz = ${i}`);
    } else if (i % 3 == 0) {
        console.log(`Bizz = ${i}`);
    }
}





// write code to display the multiplication table of given interger\\

let number = 10
console.log(`Nomor ==> ${number}`);
for (let i = 1 ; i <= number ; i++) {
    let result = number * i;
    console.log(`${number} X ${i} = ${result}`);
}


// write code to check a string is a palindrome or not\\

let kata = "kasur ini rusak";
let kata1 = kata.toLowerCase()

let kata2 = kata.length;
let n = 0;

for(let i = 0; i< kata2 / 2; i++) {
    if (kata[i] !== kata1[kata2 - 1 - i]) {
    n++;
}
}
if (n == 0) {
    console.log(`${kata1} adalah palindrome`);
} else {
    console.log(`${kata1} bukanlah palindrome`);
}

// write code to convert centimeters to kilometers
let cm = 100000;
let km = cm / Math.pow (10, 5);
console.log(`jadi ${cm} CM adalah ${km} KM`);




// write a code format number as currency \\
let uang = 10000
console.log(`RP. ${uang.toLocaleString (`id`)},00`);

// write a code to remove the first occurence of  given "search string" from a string
let kalimat = "hai semua"
let cari = "mua"

let indCari = kalimat.indexOf(cari);
if (indCari === -1) {
console.log(kalimat);
} else {
console.log(kalimat.slice(0, indCari) + kalimat.slice(indCari + cari.length));    
}


// write a code to capitalize the first letter of each word in a string \\
let nama = 'purwadhika school'
let cap = nama.split('')

for (let i = 0 ; i < cap.length; i++) {
    cap[i] = cap[i].charAt(0).toUpperCase() + cap [i].slice('')
   
}
let cap1 = cap.join(" ")
console.log(cap1);




// write a code to reverse a string \\
let word = 'halo guys';
let word1 = "";
   
for ( let i = word.length - 1 ; i >= 0 ; i--)
    word1 += word [i];

console.log(word1);
