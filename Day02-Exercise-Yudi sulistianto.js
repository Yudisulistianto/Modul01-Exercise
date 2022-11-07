// WRITE A CODE TO GET DIFFERENCE BEETWEEN DATES IN DAYS\\
const date = new Date();
let date1 = new Date("2022-11-01");
let date2 = new Date("2022-11-28");

let diff = date1.getTime(); - date2.getTime();

let days = Math.ceil (diff / (1000 * 60 * 60 * 24))
console.log(`jarak antara tanggal ${date1} dan ${date2} adalah ${days} hari`);



// WRITE A CODE TO CONVERT CELCIUS TO FAHREINHEIT\\
let c = 50, f= (9 / 5) * c + 32
console.log(`${c} derajat celcius adalah ${f} derajat fahreinheit`); 

// WRITE A CODE TO CHECK WHETHER THE NUMBER IS ODD OR EVEN\\
let angka= 0
while (angka <= 8) {
    
    if (angka % 2 == 0) {
    console.log(`${angka} merupakan Bilangan GENAP`);
    }  else {
    console.log(`${angka} merupakan Bilangan GANJIL`);
    }
    number ++
}


// WRITE A CODE TO CHECK WHETHER THE NUMBER IS PRIME NUMBER OR NOT\\
let number = 5
let numb = 0
while (number <= 10) {
   
    if (number % 1 == 0) { 
    numb++
        
        console.log(`${number} adalah bilangan prima`);
    
    }  else if (numb == 2) {
    
        console.log(`${number} bukan bilangan prima`);
    }
    number ++
}    


// ///// SUM OF THE NUMBERS 1 TO N \\\\\
let n = 5
let sum = 0, i = 1;
while (i <= n ) {
    sum += i;
    i++;
}
console.log(`jumlah total dari ${i} sampai dengan ${n} adalah ${sum}`);



// WRITE TO FIND FACTORIAL OF A NUMBER\\
let num = 5

let facto = num * (num - 1) * (num - 2) * (num - 3) *(num - 4);
console.log(`faktorial dari ${num} adalah ${facto}`);



// WRITE CODE TO PRINT THE FIRST N FIBONACCI NUMBERS\\
let nomor = 2
let n1 = 0 , n2 = 1, nextN;
console.log(`fibonacci numbers :`)
for (let i = -1; i <= nomor; i++) {
    console.log(n1);   
    nextN= n1 + n2;
    n1 = n2;
    n2 = nextN;
}
