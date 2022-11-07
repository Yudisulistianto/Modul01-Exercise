let kelasIPA = [["Aldo","Kimia","A"], ["Edo","Biologi","B"], ["Ricky","English","F"]]
let rapot = "";
for (let i = 0; i < kelasIPA.length; i++) {
   rapot += ( `${i + 1}. ${kelasIPA[i][0]}, Pelajaran ${kelasIPA[i][1]}, Nilainya ${kelasIPA[i][2]}\n`) 
    
}
console.log(rapot);






// create a func that can create a triangle pattern according to the height we provide like the following \\
// parameter : height -> triangle height
let segitiga = (height) => {
let print = "";
let angkaKedua = 1;
let angkaPertama = 0;
    for (i = 0; i <= height; i++) {
      for (j = 0; j < i; j++) {
        print += `${angkaPertama}${angkaKedua} `;
        angkaKedua++;
        if (angkaKedua == 10) {
          angkaKedua = 0
          angkaPertama++;
        }
      }
      print += `\n`;
    }
    return print;
  };
  console.log(segitiga(4));





// create a func that can loop the number of times according to the input we provide, 
// and will replace multiples of 3 with "Fizz", 
// multiples of 5 with "Buzz", 
// multiples of 3 and 5 with "FizzBuzz" 
// parameters : n -> total looping
let lmt = 70

for ( let i = 1; i <= lmt; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
    console.log(`FizzBuzz = ${i}`);
    } else if (i % 5 == 0) {
        console.log(`Buzz = ${i}`);
    } else if (i % 3 == 0) {
        console.log(`Fizz = ${i}`);
    }
}





/* creat a func to calculate Body Mass Index
formula : BMI = weight (kg) / (height (meter)) pangkat 2
parameters : weight & height
return values : "less weight"
                "ideal"
                "overweight"
                "very overweight"
                "obesity"
*/
bmi = (weight, height) => {
    let meterTinggi= height / 100;
    let BMI = weight / Math.pow(meterTinggi, 2);
    if (BMI < 18.5) {
        return `less weight\n`;
    } else if (BMI > 18.5 && BMI <= 24.9) {
        return `ideal\n`;
    } else if (BMI >= 25.0 && BMI <= 29.9) {
        return `overweight`;
    } else if (BMI >= 30.0 && BMI <= 39.9) {
        return `very overweight\n`;
    } else {
        return `obesity\n`;
    }
}
console.log(`Berat badan (75) dan Tinggi (160) = ${bmi(75, 160)}`);






// write a function to remove all odd numbers in array and return a new array that contain even number only\\
var genap = [];
var i = 0;
var bilangan = [1, 3, 4, 9, 16, 23, 28, 36, 41, 90, 99];
for (i = 0; i <= bilangan.length; i++) {
  if (bilangan[i] % 2 == 0) {
    genap.push(bilangan[i]);
  }
}
console.log(`Bilangan Array awal ${bilangan}`);
console.log(`Bilangan genap dari array ${genap}`);




// write a function to split a string and convert it into an array of words\\
var kalimat = "halo semuanya";
var Kalimat2 = kalimat.split(" ");
var splitAray = [Kalimat2];

console.log(`${kalimat} -> ["${splitAray}"]`);