//menuliskan js pertama
console.log("Hello Word!");

// variabel
// let lastName;
// lastname = "Muflih";
// console.log(lastname);

/* ataau lansung menginisialisasikan nilai variabel
setelah mendeklarasikan */
let lastName = "MUFLIH";
console.log(lastName);


// Tipe Data 
//undefined  ketika menginisialisasi data tapa nilai
// let x;
// console.log(typeof(x));


// Numbers
// let x = 10;
// console.log(typeof(x))
/* output: number */
// Decimal
// let y = 17.25;
// console.log(typeof(y))
/* output: number */

// Aritmatika
// let a = 12;
// let b = 9;

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a % b)
/* output:
21
3
108
1.3333333333333333
3
*/
/* Increment dan Decrement */

let postfix = 5;
console.log(postfix++);
/* output: 5 */
console.log(postfix);
/* output: 6 */

let prefix = 5;
console.log(++prefix);
/* output: 6 */

//BigInt
const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

/* output
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/
//BigInt untuk operasi aritmatika (boleh angka nilai besar dn kecil)
const bigIntButSmall = 7n;
console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);

/* output
7n
3n
10n
2n; Bukan 2.5n
1n
*/

// String
let greet = "Hello";
console.log(typeof(greet))

/* output: string */
// lalu bagaimna jika menggunakan tanda petik 2
/*const answer = '"I think it's awesome!" he answered confidently';
console.log(answer);*/
// solusinya gunakan backslah seblum tada ' untuk mengurangi ambiguitas
// const answer = '"I think it\'s awesome!" he answered confidently';
// console.log("Windows path: C:\\Program Files\\MyProject");

// operator plus (+). Operator tersebut berfungsi untuk menggabungkan dua teks yang terpisah menjadi satu buah teks. Contohnya seperti ini:
/*let greet = "Hello";
let moreGreet = greet + greet;
console.log(moreGreet);*/
/* output: HelloHello */

// Selain concatenation, string pada JavaScript juga mendukung string interpolation. Sederhananya, kita bisa memasukkan variabel ke dalam sebuah string template. Contohnya adalah seperti berikut:
const myName = "Luke";
console.log(`Hello, my name is ${myName}.`);

/* output: Hello, my name is Luke. */

// Boolen
/*let x = true;
let y = false;
console.log(typeof(x))
console.log(typeof(y)) */
/* output: 
boolean
boolean
*/

// Kita juga bisa menggunakan operator komparasi seperti lebih dari (>) atau kurang dari (<). Contohnya:
/*const a = 10;
const b = 12;

let isGreater = a > b;
let isLess = a < b;
console.log(isGreater);
console.log(isLess);*/
/* output:
false
true
*/

//Null
let someLaterData = null;
console.log(someLaterData);

/* output:
null
*/

//Symbol
const id = Symbol("id");
console.log(id);
/* output
Symbol(id)
*/
/*Symbol disebut sebagai identifier yang unik karena meskipun kita membuat dua variabel symbol dengan nama atau deskripsi yang sama
, kedua nilainya tetap dianggap berbeda. 
Contohnya lihat kode berikut:*/
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);

/* output
false
*/


// Assigment Operator
/*let x = 10;
let y = 5

x += y;

console.log(x);*/
/* output
15
*/
/*Assignment operator tersebut digunakan sebagai shortcut dari x = x + y. Cara ini juga dapat digunakan pada operator aritmatika lain
 seperti, perkalian, pengurangan, pembagian, dan lainnya. */
 /*let x = 10;
 let y = 5;
  
 x += y; // artinya -> x = x + y;
 x -= y; // artinya -> x = x - y;
 x *= y; // artinya -> x = x * y;
 x /= y; // artinya -> x = x / y;
 x %= y; // artinya -> x = x % y;*/


// Comparison Operator (Perbandingan/komparasi)
// contoh
/*let a = 10;
let b = 12;
console.log(a < b);
console.log(a > b);*/
/* output
true
false
*/

// Perbedaan "sama" dan "identik"
/*Hal inilah yang membedakan antara sama dan identik pada JavaScript. Jika kita ingin membandingkan hanya dari kesamaan nilainya kita bisa gunakan == tapi jika kita ingin membandingkan dengan memperhatikan tipe datanya kita gunakan ===.
Contohnya seperti berikut: */
const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda
/* output
true
false
*/


// Logical Operator
/*Pada JavaScript terdapat tiga buah karakter khusus yang berfungsi sebagai logical operator.
 Berikut macam-macam logical operator dan fungsinya: */
//  let a = 10;
//  let b = 12;
 
 /* AND operator = Operator dan (and). Logika akan menghasilkan nilai true apabila semua kondisi terpenuhi (bernilai true).*/ 
 //console.log(a < 15 && b > 10); // (true && true) -> true
 //console.log(a > 15 && b > 10); // (false && true) -> false
 
 /* OR operator  = Operator dan (and). Logika akan menghasilkan nilai true apabila salah satu kondisi terpenuhi (bernilai true).*/
 //console.log(a < 15 || b > 10); // (true || true) -> true
 //console.log(a > 15 || b > 10); // (false || true) -> true
 
 /* NOT operator  = Operator tidak (not). Digunakan untuk membalikkan suatu kondisi.*/
 //console.log(!(a < 15)); // !(true) -> false
 //console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false
 /* output
 true
 false
 true
 true
 false
 false
 */


 //If/Else Statement
 //If
 /*Statement if akan menguji suatu kondisi. Jika kondisi bernilai true, maka blok kode di dalamnya akan dijalankan.
  Sebaliknya, jika bernilai false, maka proses yang ditentukan akan dilewatkan.*/
const isRaining = true;

console.log("Persiapan sebelum berangkat kegiatan.");
if (isRaining) {
    console.log("Hari ini hujan. Bawa payung.");
}
console.log("Berangkat kegiatan.");
/* output:
Persiapan sebelum berangkat kegiatan.
Hari ini hujan. Bawa payung.
Berangkat kegiatan.
 */
/*Jika Anda mengubah nilai isRaining menjadi false, maka kode di dalam blok kode if akan dilewatkan.
Sehingga program Anda tidak akan mengingatkan untuk membawa payung. */

/*Lalu bagaimana jika Anda ingin melakukan operasi lain ketika kondisi bernilai false? Jawabannya adalah statement else.
Pada contoh kode berikut kita akan melakukan pengecekan kondisi menggunakan operator perbandingan. */
/*let x = 50;

if(x > 70) {
    console.log(x);
} else {
    console.log("Nilai kurang dari 70");
}*/
/* output
Nilai kurang dari 70
*/
/*Terdapat variabel x dengan nilai 50, kemudian kita bertanya, “Hai JavaScript! Apakah x lebih dari 70?” Jika kondisi tersebut benar,
maka kita dapat memerintahkan JavaScript untuk menampilkan nilainya.
Jika salah, kita perintahkan JavaScript untuk menampilkan teks “Nilai kurang dari 70”. */

// Menggabungkan else dan if
/*Kita juga bisa mengecek beberapa kondisi sekaligus dengan menggabungkan else dan if.
Contohnya adalah seperti program berikut: */
/*let language = "French";
let greeting = "Selamat Pagi"

if(language === "English") {
    greeting = "Good Morning!";
} else if(language === "French") {
    greeting = "Bonjour!"
} else if(language === "Japanese") {
    greeting = "Ohayou Gozaimasu!"
}
console.log(greeting);*/
/* output
Bonjour!
*/
/*Pengecekan kondisi akan dilakukan dari statement if paling awal.
Sehingga, ketika nilai language adalah “French”, maka pengecekan untuk language === “Japanese” tidak akan dilakukan. */

/*Selain if statement di atas, JavaScript juga mendukung ternary operator atau conditional expressions.
 Dengan ini, kita bisa menuliskan if-else statement hanya dalam satu baris. */

// condition ? true expression : false expression
const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`)
/* output
Anda mendapatkan diskon sebesar 0%
 */


//Truthy & Falsy
/*Selain contoh di atas maka nilainya adalah truthy dan ketika dievaluasi ke dalam if statement akan bernilai true.
 Berikut ini contohnya dalam kode: */
// let name = "";

// if (name) {
//     console.log(`Halo, ${name}`);
// } else {
//     console.log("Nama masih kosong");
// }
/* output:
Nama masih kosong
 */


// Switch Case Statement

/*JavaScript juga mendukung switch statement untuk melakukan pengecekan
 banyak kondisi dengan lebih mudah dan ringkas. */
/*switch (expression) {
  case value1:
    // do something
    break;
  case value2:
    // do something
    break;
  ...
  ...
  default:
    // do something else
} */
/*Tanda kurung setelah keyword switch berisi variabel atau expression yang akan dievaluasi.
Kemudian untuk setiap kondisi yang mungkin terjadi, kita masukkan keyword case diikuti dengan nilai yang valid.
Jika kondisi pada case sama dengan variabel pada switch, maka blok kode setelah titik dua (:) akan dijalankan. Keyword break digunakan untuk keluar dari proses switch.
Terdapat satu case bernama default yang memiliki fungsi yang sama dengan keyword else pada control flow if-else.
Jika tidak ada nilai yang sama dengan variabel pada switch, maka blok kode ini akan dijalankan.
Berikut ini adalah contoh kode dari materi if-else yang dikonversi menjadi statement switch: */
/*let language = "French";
let greeting = null;

switch (language) {
    case "English":
        greeting = "Good Morning!";
        break;
    case "French":
        greeting = "Bonjour!";
        break;
    case "Japanese":
        greeting = "Ohayou Gozaimasu!";
        break;
    default:
        greeting = "Selamat Pagi!";
}
console.log(greeting);*/
/* output
Bonjour!
*/


// Looping
/*For loop
Dari beberapa cara melakukan proses loop pada JavaScript,
“for” merupakan salah satu cara yang banyak digunakan. Struktur dasar dari for tampak seperti berikut: */
//for(inisialisasi variabel; test kondisi; perubahan nilai variabel) {}
for(let i = 0; i < 5; i++) {
    console.log(i);
}
/* output
0
1
2
3
4
*/
/* For of loop
Cara lain dalam melakukan looping adalah menggunakan for..of. For of mulai hadir pada ECMAScript 2015 (ES6).
Cara ini jauh lebih sederhana dan modern dibanding for loop biasa. Sintaks dasar dari for of loop adalah seperti ini: */
// for(arrayItem of myArray) {}
// Sebagai permulaan, kita bisa menganggap array sebagai kumpulan nilai yang disimpan dalam satu variabel.
/*Sederhananya seperti kita melakukan perintah “Hei JavaScript! Lakukan perulangan pada myArray,
akses tiap nilainya, dan simpan pada variabel arrayItem” */
let myArray = ["Luke", "Han", "Chewbacca", "Leia"];

for(const arrayItem of myArray) {
    console.log(arrayItem)
}
/* output
Luke
Han
Chewbacca
Leia
*/

// While and do-while
/*Metode lain untuk melakukan looping adalah dengan statement while. Sama seperti for,
instruksi while mengevaluasi ekspresi boolean dan menjalankan kode di dalam blok while ketika bernilai true.
Untuk menampilkan angka 1 sampai 100 dengan while kita bisa menulis kode seperti berikut: */
let i = 1;

while (i <= 100) {
    console.log(i);
    i++;
}
// Bentuk lain dari while adalah perulangan do-while.
/*let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 100);*/

//Infinite loops
/*Ketika menerapkan perulangan pada program, ada satu kondisi yang perlu kita hindari yaitu infinite loop.
Infinite loop atau endless loop adalah kondisi di mana program kita stucked di dalam perulangan.
Ia akan berjalan terus hingga menyebabkan crash pada aplikasi dan komputer kecuali ada intervensi secara eksternal, seperti mematikan aplikasi.

Kode berikut ini adalah contoh di mana kondisi infinite loop dapat terjadi: */
/*let i = 1;
 
while (i <= 5) {
    console.log(i);
}*/
/*Dapatkah Anda menemukan apa yang salah dari kode di atas sehingga terjadi infinite loop?

Jawabannya adalah karena variabel i selalu bernilai 1. Alhasil,
kondisi i <= 5 akan selalu bernilai true yang mengakibatkan aplikasi akan terus mencetak 1 ke konsol sehingga mengalami crash. */
// Knowlodge check : fundamental js
/*const firstString = "Hello";
const secondString = "JavaScript";*/
// pertanyaan 2
/*console.log(firstString + secondString);

if ((true || false) && (false || false)) {
    console.log("It's true");
} else {
    console.log("It's false");
}*/


//  Struktur Data

// Objek
/*Untuk menetapkan objek pada sebuah variabel kita gunakan tanda kurung kurawal {}. */
// contoh objek
const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
};

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);

/* output
Halo, nama saya Luke Skywalker
Umur saya 19 tahun
*/

/*Selain dot operator, kita juga bisa mengakses properti dari object menggunakan bracket atau tanda kurung siku. */
/*user[“home world”];
Untuk mengakses key yang memiliki spasi atau karakter khusus lainnya maka kita perlu menggunakan bracket seperti di atas. */
//contoh
/*const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    "home world": "Tattooine"
};
console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user["home world"]}`);*/
/* output
Halo, nama saya Luke Skywalker
Umur saya 19 tahun
Saya berasal dari Tattooine
*/

// Assigment Operator
/*Setelah mempelajari bagaimana membuat object dan menampilkan property di dalamnya,
selanjutnya kita akan memodifikasi sebuah object. Untuk mengubah nilai properti di dalam object kita gunakan assignment operator (=). */
// Contoh 
/*const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
console.log(spaceship);*/

/* output
{
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1300,
  color: 'Glossy red'
}
 */
/*Ketika kita mengubah object menggunakan assignment operator dan property/key-nya sudah ada, maka nilai di dalamnya akan tergantikan dengan nilai yang baru.
Sedangkan, jika property dengan nama key yang ditentukan tidak ditemukan, maka property baru akan ditambahkan ke object. */
// Contoh 
/*const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
spaceship.class = "Light freighter";

console.log(spaceship);*/
/* output
{
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1300,
  color: 'Glossy red',
  class: 'Light freighter'
}
*/
/*Kita juga dapat menghapus property pada object menggunakan keyword delete seperti berikut: */
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;

delete spaceship.manufacturer;

console.log(spaceship);

/* output
{ name: 'Millenium Falcon', maxSpeed: 1300, color: 'Glossy red' }
 */

//Array
/*Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel. Contoh: */
// let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
// console.log(myArray);
/* output:
[ 'Cokelat', 42.5, 22, true, 'Programming' ]
*/
// didalam sebuah array, undex dimulai dari 0
// contoh
// let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
// console.log(myArray[1]);
/* output:
42.5
*/

/*Lalu, apa yang akan terjadi jika kita berusaha mengakses index di luar ukuran array-nya?
Jika kita mengakses nilai array lebih dari index-nya,maka hasilnya akan undefined.
Index terakhir array selalu jumlah nilai array - 1. */
// contoh
/*let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");*/
/* output:
Cokelat
42.5
22
true
Programming
undefined
Panjang nilai myArray adalah 5.
*/
// bagaimana memamnipulasi data didalam array
/*Nah, untuk menambahkan data ke dalam array, kita bisa menggunakan metode push(). Fungsi push ini akan menambahkan data di akhir array.*/
/*const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.push('JavaScript');
console.log(myArray);*/
/* output
[ 'Cokelat', 42.5, 22, true, 'Programming', 'JavaScript' ]
 */
//Sedangkan untuk mengeluarkan data atau elemen terakhir dari array, kita bisa gunakan metode pop().
/*const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.pop();
console.log(myArray);*/
/* output
[ Cokelat, 42.5, 22, true ]
*/

/*Metode lain yang bisa kita gunakan untuk memanipulasi data pada array adalah shift() dan unshift().
Metode shift() digunakan untuk mengeluarkan elemen pertama dari array, sementara unshift() digunakan untuk menambahkan elemen di awal array. */
/*const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.shift();
myArray.unshift("Apple");

console.log(myArray);*/

/* output
[ 'Apple', 42.5, 22, true, 'Programming' ]
*/

// Menghapus data data dari array sama seperti objek menggunanakan dlete
/*const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

delete myArray[1];
console.log(myArray);*/
/* output
[ 'Cokelat', <1 empty item>, 22, true, 'Programming' ]
*/

/*Namun, perhatikan di sini bahwa keyword delete hanya menghapus data pada index yang ditentukan lalu membiarkan posisi tersebut kosong.
Untuk menghapus elemen, gunakan metode splice() seperti ini: */
/*const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.splice(2, 1);   // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray);*/
/* output
[ 'Cokelat', 42.5, true, 'Programming' ]
*/

// Spread Operator (Menyebarkan Nilai Array)
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(...favorites);
/* output
Seafood Salad Nugget Soup
*/

// Menampung dua Array menggunakan Spread Operator
/*const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites, ...others];

console.log(allFavorites);*/
/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/
// spread operator juga bisa digunakan untuk object literals
const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);
/* output
{ firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }
*/


// Destrukturing Object
/*Penulisan sintaksis destructuring object pada ES6 menggunakan object literal ({ }) di sisi kiri dari operator assignment. */
/*const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
const {firstName, lastName, age} = profile;
 
console.log(firstName, lastName, age);*/
/* output:
John Doe 18
*/
/* Dalam destructuring object, kita bisa menentukan salah satu nilai yang ingin kita desktrukturisasikan.
Sehingga kita tidak perlu membuat variabel sebanyak properti yang dimiliki objeknya,
contohnya:*/
//const {lastName} = profile;

// Destructuring Assignment
/*Pada contoh sebelumnya, kita telah melakukan destructuring object pada deklarasi variabel.
Namun, pada kasus tertentu mungkin kita perlu melakukannya pada variabel yang sudah dideklarasikan. */
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
let firstName = "Dimas";
let age = 20;
 
// menginisialisasi nilai baru melalui destructuring object
({firstName, age} = profile);
 
console.log(firstName);
console.log(age);
/* output:
John
18
*/

// Default Values
/*Ketika kita mendestruksikan objek dan menetapkan variabel dengan nama yang bukan merupakan properti dari objek,
maka nilai dari variabel tersebut menjadi undefined. Contohnya: */
/*const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

const {firstName, age, isMale} = profile;
 
console.log(firstName)
console.log(age)
console.log(isMale)*/
/* output:
John
18
undefined
*/

/*Alternatifnya, kita bisa secara opsional mendefinisikan nilai default pada properti tertentu jika tidak ditemukan.
Untuk melakukanya, tambahkan tanda assignment (=) setelah nama variabel dan tentukan nilai default-nya seperti ini: */
/*const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
 
const {firstName, age, isMale = false} = profile;
 
console.log(firstName)
console.log(age)
console.log(isMale)*/
/* output:
John
18
false
*/
//Jika nilai properti tidak ditemukan, maka nilai default akan diterapkan pada variabel.

// Assigning to Different Local Variable Names
/*Sampai saat ini kita tahu bahwa untuk melakukan destrukturisasi object pada variabel lokal, kita perlu menyeragamkan penamaan variabel lokal dengan properti object-nya.
 Namun, sebenarnya dalam proses destrukturisasi object kita bisa menggunakan penamaan variabel lokal yang berbeda.
 ES6 menyediakan sintaksis tambahan yang membuat kita dapat melakukan hal tersebut. Penulisannya mirip seperti ketika kita membuat properti beserta nilainya pada object.

Contohnya seperti ini: */
/*const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
const {firstName: localFirstName, lastName: localLastName, age: localAge} = profile;
 
console.log(localFirstName);
console.log(localLastName);
console.log(localAge);*/
/* output:
John
Doe
18
*/

// Destructuring Array
/*Destructuring array serupa dengan destructuring object.
Object menggunakan tanda kurung kurawal { } sedangkan array menggunakan tanda kurung siku [ ].
Perbedaan lainnya adalah destructuring array bekerja berdasarkan posisi daripada penamaan propertinya.
Berikut contoh dari destructuring array pada ES6: */
/*const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
 
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);*/
/* output:
Seafood
Salad
Nugget
Soup
*/

// Kita juga bisa memilih nilai pada index tertentu untuk destrukturisasi pada array. Contohnya
/*const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [, , thirdFood ] = favorites;
 
console.log(thirdFood);*/
/* output:
Nugget
*/

//Destructuring Assignment
/*Kita juga bisa melakukan destructuring assignment pada array. Namun, tidak seperti object, kita tidak perlu membungkusnya dengan tanda kurung.
Contohnya seperti berikut: */
/*const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
let myFood = "Ice Cream";
let herFood = "Noodles";
 
[myFood, herFood] = favorites;
 
console.log(myFood);
console.log(herFood);*/
/* output:
Seafood
Salad
*/

/*Array destructuring assignment sangat berguna ketika kita hendak menukar nilai antara dua variabel.
Sebelum ES6, untuk melakukan hal ini kita menggunakan cara manual menggunakan algoritma sorting seperti ini: */
/*var a = 1;
var b = 2;
var temp;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
temp = a;
a = b;
b = temp;
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);*/
 
/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/

/*Dengan array destructuring assignment, 
kita bisa menukar nilai variabel dengan mudah tanpa membuat variabel tambahan. */

/*let a = 1;
let b = 2;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
[a, b] = [b, a]
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);*/
 
/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/

// Default Values
/*Ketika melakukan destructuring array, tetapi terdapat variabel yang posisinya tidak dapat terjangkau oleh array,
maka variabel tersebut akan bernilai undefined. Contohnya: */

/*const favorites = ["Seafood"];
const [myFood, herFood] = favorites
 
console.log(myFood);
console.log(herFood);*/
 
/* output:
Seafood
undefined
*/

/*Sama seperti object, pada destructuring array kita juga dapat memberikan nilai default pada variabel yang tidak dapat terjangkau oleh array,
sehingga nilai pada variabel tidak akan menjadi undefined. */
/*const favorites = ["Seafood"];
 
const [myFood, herFood = "Salad"] = favorites
 
console.log(myFood);
console.log(herFood);*/
 
/* output:
Seafood
Salad
*/

// Map 
/*Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object. Yang membedakan adalah Map memperbolehkan key dengan tipe data apa pun, dibandingkan Object yang hanya mengizinkan key bertipe String atau Symbol. */
// Apabila ingin menetapkan nilai dari Map secara langsung, gunakan array multi dimensi seperti ini:
const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
]);

console.log(myMap);

/* output
Map(3) { '1' => 'a String key', 1 => 'a number key', true => true }
*/

/*Ketika sudah membuat objek Map, kita bisa mendapatkan nilainya berdasarkan key tertentu dengan metode get(). Lalu, untuk menambahkan pasangan key-value baru gunakan metode set(). */
/*const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));*/

/* output
3
England
4
India
 */

// Note: Meskipun kita bisa menetapkan dan mendapatkan data pada map seperti ini:

/*const wrongMap = new Map();
 
wrongMap["My Key"] = "My Value";
console.log(wrongMap["My Key"]);*/

/*Namun, kode di atas bukanlah cara yang sesuai untuk mengoperasikan Map. Ketika kita menetapkan nilai map seperti di atas, data akan disimpan sebagai generic object.
Ini akan mengakibatkan data tidak tersimpan dalam Map query dan tidak bisa menggunakan fitur dari Map seperti .has atau .delete. */
/*const wrongMap = new Map();
wrongMap["My Key"] = "My Value";

console.log(wrongMap.has("My Key"));
console.log(wrongMap.delete("My Key"));*/

/* output
false
false
 */
// Jadi, pastikan untuk menggunakan metode .set() dan .get() untuk Map.


// Set
/* Struktur data yang akan kita bahas berikutnya adalah Set. Set sederhananya merupakan kumpulan nilai (set of values).
Hal yang membedakan Set dengan struktur data yang lain adalah data pada Set tidak berurutan dan juga tidak diindeks.
Selain itu, data di dalam Set juga bersifat unik dan tidak ada duplikasi. Perhatikan contoh deklarasi Set di bawah ini: */
/*const numberSet = new Set([1, 4, 6, 4, 1]);

console.log(numberSet);*/

/* output
Set(3) { 1, 4, 6 }
*/
/* Pada kode di atas terdapat beberapa angka yang duplikat, yaitu angka 1 dan 4.
Secara otomatis Set akan membuang angka yang sama, sehingga nilai yang tersimpan adalah {1, 4, 6}. */

// Untuk menambahkan data ke dalam Set kita bisa memanfaatkan fungsi add().
/*const numberSet = new Set([1, 4, 6, 4, 1]);
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

console.log(numberSet);*/

/* output
Set(5) { 1, 4, 6, 5, 10 }
*/
/* Fungsi add() hanya menerima satu argumen. Jika Anda memasukkan array, maka array tersebut akan dianggap sebagai satu elemen sendiri.
Nilai yang duplikat akan diabaikan. */
/*const numberSet = new Set([1, 4, 6, 4, 1]);
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

numberSet.delete(4);

console.log(numberSet);*/

/* output
Set(4) { 1, 6, 5, 10 }
*/
/*Ingat bahwa Set tidak memiliki urutan atau index,
sehingga argumen yang dimasukkan ke dalam fungsi delete adalah nilai yang ingin dihapus, bukan index-nya. */


// WeakMap & WeakSet
// Masih bingung? Mari kita lihat contoh kode dan perbedaan antara Map dan WeakMap.
/*let visitsCountMap = new Map(); // Menyimpan daftar user

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);                // Menambahkan user "Jonas"

jonas = null;                    // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
   console.log(visitsCountMap);
}, 10000)*/
/* output
Map(1) { { name: 'Jonas' } => 1 }
*/
/*Ketika nilai jonas sudah tidak bisa dijangkau, object jonas akan dihapus dari memori termasuk informasi yang disimpan di dalam WeakMap. */
//const { inspect } = require('util');

let visitsCountMap = new WeakMap(); // Menyimpan daftar user

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);                // Menambahkan user "Jonas"

jonas = null;                    // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
/*setTimeout(function() {
  console.log(inspect(visitsCountMap, { showHidden: true }));
}, 10000);*/
/* output
  WeakMap {  }
*/


// Function

// Parameter & Argument
// Parameter merupakan variabel yang didefinisikan sebagai inputan dari sebuah fungsi. Contoh:
/*function multiply(a, b) {
    return a * b;
} */
// Argument merupakan nilai atau expression yang dimasukkan ke dalam fungsi. Contohnya:
// multiply(3, 4);

/*Setelah membuat fungsi kita dapat memanggilnya dengan menuliskan nama fungsi diikuti tanda kurung dan memasukkan argumen di dalamnya (jika ada). */

/*function greeting() {
    console.log("Good Morning!")
}
greeting();*/
/* output
Good Morning!
*/

/*Kita dapat membuat fungsi tersebut untuk menerima dan memanfaatkan parameter untuk mengubah perilaku dari fungsinya.
Contohnya fungsi greeting akan kita tambahkan parameter name dan language seperti ini:
*/

/*function greeting(name, language) {
    if(language === "English") {
        console.log(`Good Morning ${name}!`);
    } else if (language === "French") {
        console.log(`Bonjour ${name}!`);
    } else {
        console.log(`Selamat Pagi ${name}!`);
    }
}*/

// Sehingga dalam memanggilnya pun kita perlu mengirimkan dua buah nilainya sebagai argumen:

/*function greeting(name, language) {
    if(language === "English") {
        console.log(`Good Morning ${name}!`);
    } else if (language === "French") {
        console.log(`Bonjour ${name}!`);
    } else {
        console.log(`Selamat Pagi ${name}!`);
    }
}

greeting("Harry", "French");*/

/* output
Bonjour Harry!
*/

/* Satu hal lagi, function dapat menghasilkan output atau mengembalikan sebuah nilai. Dengan nilai kembalian, kita dapat membuat function yang berfungsi untuk melakukan perhitungan matematika dan hasilnya dapat kita masukkan ke dalam sebuah variabel. Contohnya seperti ini: */

/*function multiply(a, b) {
    return a * b;
}

let result = multiply(10, 2)
console.log(result)*/

/* output
20
*/

/* Agar fungsi bisa mengembalikan nilai, gunakan keyword return diikuti dengan nilai yang akan dikembalikan. Nilai kembalian tidak hanya number, bisa juga berupa string, boolean, object, array, atau tipe yang lain. Seperti inilah fungsi greeting() jika kita ubah agar mengembalikan nilai string: */

/*function greeting(name, language) {
    if(language === "English") {
        return `Good Morning ${name}!`
    } else if (language === "French") {
        return `Bonjour ${name}!`;
    } else {
        return `Selamat Pagi ${name}!`;
    }
}

let greetingMessage = greeting("Harry", "French");
console.log(greetingMessage);*/

/* output
Bonjour Harry!
*/

// Expression Function

// contoh penulisan expression function:
const greeting = function(name, language) {
    if(language === "English") {
        return "Good Morning " + name + "!";
    } else if (language === "French") {
        return "Bonjour " + name + "!";
    } else {
        return "Selamat Pagi " + name + "!";
    }
}

console.log(greeting('Ron', 'English'));

/* output
Good Morning Ron!
 */

// Function Parameter

/* Jika parameter dari fungsi adalah sebuah object, kita juga bisa memanfaatkan destructuring object untuk mendapatkan nilainya. Contohnya seperti berikut: */
/*const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren',
};

function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);*/
/* output
kren is Kylo Ren
*/

// Default Parameters
/* Fungsi pada JavaScript tidak melakukan pengecekan terhadap jumlah maupun tipe argumen yang dimasukkan ke dalam parameter. Ini berarti kita bisa memasukkan argumen meskipun tidak sesuai dengan parameter yang telah didefinisikan. */

/* function exponentsFormula(baseNumber, exponent) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(2);*/
/* output
2^undefined = NaN
*/

/* Seperti yang kita lihat pada contoh kode di atas, ketika argumen lebih sedikit dari parameternya, maka parameter yang tidak terdefinisi akan bernilai undefined. Sebagai solusi jika memungkinkan, kita bisa memberikan nilai default pada parameter. Nilai ini akan digunakan jika kita tidak memasukkan parameter. */
function exponentsFormula(baseNumber, exponent = 2) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(3);

/* output
3^2 = 9
*/

// Rest Parameter
/* Masih ingat dengan spread operator (...)? Jika spread operator menyebarkan array menjadi beberapa elemen berbeda, rest parameter ini adalah kebalikan dari operator tersebut. */

function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5));
/* output
15
*/


// Arrow Function
/* Apabila fungsi hanya memiliki satu parameter, maka kita bisa menghapuskan tanda kurung seperti berikut: */
const sayName = name => {
    console.log(`Nama saya ${name}`)
}

sayName("Leia");
/* output
Nama saya Leia
 */

/* Namun, jika kita sama sekali tidak membutuhkan parameter, maka kita tetap menuliskan tanda kurung namun kosong seperti ini: */
const sayHello = () => {
    console.log("Selamat pagi semuanya!")
};

sayHello();
/* output
Selamat pagi semuanya!
 */

/* Satu hal yang menarik, ketika body dari function hanya terdiri dari satu baris, kita bisa menghapus tanda kurung kurawal. Tentunya ini akan menghemat baris kode yang kita tulis. */
/*const sayName = name => console.log(`Nama saya ${name}`);
sayName("Leia");

const sayHello = () => console.log("Selamat pagi semuanya!");
sayHello();*/
/* output
Nama saya Leia
Selamat pagi semuanya!
 */

/* Ketika sebuah fungsi perlu mengembalikan nilai, kita tidak perlu lagi menuliskan return (hanya bekerja untuk fungsi satu baris). */
/*const multiply = (a, b) => a * b;
console.log(multiply(3, 4));*/
/* output
12
 */

// Variable Scope
// contoh scoping dalam kode

/* Kita harus berhati-hati dalam mendefinisikan variabel di dalam fungsi. Pasalnya, kita bisa mendapatkan hasil yang tidak diperkirakan, contohnya seperti berikut: */
/*function multiply(num) {
    total = num * num;
    return total;
}

let total = 9;
let number  = multiply(20);

console.log(total)*/

/* output
400
*/
/* Perlu kita perhatikan, jika kita lupa menuliskan keyword let, const, atau var pada script ketika membuat sebuah variabel, maka variabel tersebut akan menjadi global. */


// Closure
function init() {
    var name = 'Obi Wan';   // Variabel lokal di dalam scope fungsi init
    
    function greet() {      // Inner function, merupakan contoh closure
        console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
    }

    greet();
}
init();
/* output
Halo, Obi Wan
 */
/* Fungsi init() memiliki variabel lokal name dan fungsi greet(). Fungsi greet() adalah inner function yang didefinisikan di dalam init() dan hanya bisa diakses dari dalam fungsi init(). Perhatikan bahwa fungsi greet() tidak memiliki variabel lokal. Namun, karena inner function memiliki akses ke variabel di parent function-nya, sehingga greet() dapat mengakses variabel name. Itulah yang dimaksud dengan lexical scope.

Sekarang perhatikan contoh kode berikut: */
/*function init() {
    var name = 'Obi Wan';

    function greet() {
        console.log(`Halo, ${name}`);
    }

    return greet;
}

let myFunction = init();
myFunction();*/

/* output
Halo, Obi Wan
 */

/* javaScript tidak memiliki cara untuk mendeklarasikan suatu fungsi atau variabel menjadi private seperti bahasa Java. Sehingga sebuah fungsi atau variabel bisa diakses dari mana pun. Kenapa kita membutuhkan private method? Salah satunya adalah untuk membatasi akses ke fungsi atau variabel. Perhatikan contoh berikut: */
/*let counter = 0;

let add = () => {
    return ++counter;
}

console.log(add());
console.log(add());
counter = 23;
console.log(add());*/

/* output
1
2
24
 */
/* Nilai counter akan bertambah ketika kita memanggil fungsi add(). Namun, kita juga bisa mengubah nilai counter secara langsung dengan assignment operator. Pada contoh program yang lebih kompleks, sebaiknya hal ini dihindari karena perubahan langsung pada nilai counter bisa saja memunculkan bug. */

/* Closure memungkinkan kita membuat fungsi dan variabel seolah menjadi private. Seperti inilah contoh program counter yang dibuat dengan closure: */
let add = () => {
    let counter = 0;
    return () => {
        return ++counter;
    };
}

let addCounter = add();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());

/* output
1
2
3
 */

// class oop
/* Nah, untuk penulisan class di JavaScript sendiri bisa menggunakan dua cara, yakni melalui sintaks function ataupun class. */
// Function Menggunakan pendekatan prototype
/*function Mail() {
    this.from = 'pengirim@dicoding.com';
};
 
Mail.prototype.sendMessage = function n(msg, to) {
  console.log(`you send: ${msg} to ${to} from ${this.from}`);
};
// pemanggilan
 
const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com');*/
 
/**
output:
you send: hallo to penerima@dicoding.com from pengirim@dicoding.com
**/

// Funtion Tanpa Pendekatan Prototype
/*function Mail(){
    this.from = "pengirim@dicoding.com",
  this.sendMessage = function(msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
  } 
};
// pemanggilan
 
const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com');*/ 
/**
output:
you send: hallo to penerima@dicoding.com from pengirim@dicoding.com
**/
/* Cara pertama memiliki 2 pendekatan:

Penulisan method menggunakan prototype
Penulisan method sebagai sebuah properti secara umum */

// Lanjut ke cara kedua, yakni menggunakan sintaksis class.
// Cara 2
/*class Mail {
    constructor() {
        this.from = 'pengirim@dicoding.com';
    }
 
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    };
}
 
const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com');*/ 
/**
output:
you send: hallo to penerima@dicoding.com from pengirim@dicoding.com
**/
/* Cara kedua pada dasarnya menggunakan prototype, penggunaan sintaksis class pada javascript hanyalah syntactic sugar dari prototype itu sendiri. Demikianlah cara umum yang digunakan untuk menuliskan dan menginstansiasi objek dari sebuah Class. */

// Property & Method Property
/*class Mail {
    constructor() {
        this.from = 'pengirim@dicoding.com';
        this.contacts = [];
    }
    sendMessage(msg, to, from) {
        console.log(`you send: ${msg} to ${to} from ${from}`);
        // from di sini merujuk ke `from` parameter, bukan ke `from` dari global value yaitu pengirim@dicoding.com
        this.contacts.push(to);
    };
}

const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com', 'aku@gmail.com');*/

/**
you send: hallo to penerima@dicoding.com from aku@gmail.com
**/

// class method

/* Class Method adalah function atau method yang ada di dalam sebuah object. Untuk menggunakannya, sebuah class harus di-instantiate terlebih dahulu menjadi object baru bisa dijalankan. Contoh class mail di atas, kita akan menggunakan method sendMessage maka kita harus meng-instantiate Mail terlebih dahulu. */

/*const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com');*/
/**
output-nya berhasil:
you send: hallo to penerima@dicoding.com from pengirim@dicoding.com
**/

// Static Method
/* Static method adalah function atau method yang sama seperti class method, akan tetapi untuk mengaksesnya tidak perlu meng-instantiate class. Kita cukup menuliskan nama kelas dan nama method-nya secara langsung (NamaClass.namaMethod()).

Sebagai contoh, kita menambahkan sebuah method untuk memeriksa apakah sebuah input adalah nomor handphone: */

/* class Mail{
  static isValidPhone(phone) {
    return typeof phone === 'number';
  }
} */

/* Dari contoh di atas, kita dapat memanggil fungsi tersebut tanpa membuat instance kelas Mail terlebih dahulu. */
// Mail.isValidPhone(089000000000) //true

// Constructor
/* Ketika kita membuat sebuah objek, adakalanya karakteristik dari blueprint yang kita buat harus sudah didefinisikan bersamaan dengan sebuah objek saat pertama kali diinisiasi. Constructor adalah sebuah method/function yang dijalankan pertama kali ketika object dibuat. Dari contoh kelas yang kita buat sebelumnya, kita akan membuat from sebagai sebuah value yang harus ditulis ketika sebuah objek diinisiasi. Maka dalam JavaScript ada dua cara, yaitu: */
// Contoh penerapannya sebagai berikut:

// cara 1
/*class Mail {
    constructor(author) {
        this.from = author;
        console.log('is instantiated', author);
    };
}*/
 
// cara 2
/*function Mail(author) {
    this.from = author;
    console.log('is instantiated', author);
}*/
// Dari contoh constructor di atas, maka cara pemanggilannya menjadi seperti di bawah ini:
// const mail1 = new Mail("emailku@dicoding.com");
/* Karena JavaScript bukan bahasa dengan dukungan static type maka sebenarnya kita dapat melakukan instansiasi dengan parameter sesuka kita: */
// const mail1 = new Mail(085000111222); // misalkan untuk SMS
// const mail2 = new Mail("emailku@dicoding.com"); // misalkan untuk Email

// 4 pilar OOP
// Encapsulation
/* Enkapsulasi adalah kondisi di mana attribute atau method di dalam class dibungkus dan bersifat privat. Artinya objek lain tidak bisa mengakses atau mengubah nilai dari property secara langsung. */
/* class Mail{
    constructor(author) {
        this._contacts = [];
        this.from = author;
    }
    sendMessage = function(msg, to) {
        console.log('you send:', msg, 'to', to, 'from', this.from);
        this._contacts.push(to);
    }
    showAllContacts() {
        return this._contacts;
    }
} */

// Abstraction
/* Abstraksi bisa dibilang merupakan penerapan alami dari enkapsulasi. Abstraksi berarti sebuah objek hanya menunjukkan operasinya secara high-level. Misalnya kita cukup tahu bagaimana pesan dikirim atau diterima, namun kita tidak perlu tahu seperti apa proses enkripsi dan dekripsi isi pesan, atau bagaimana sebuah daftar contact dapat bertambah. */

// Inheritance
/* Beberapa objek bisa memiliki beberapa karakteristik atau perilaku yang sama, tetapi mereka bukanlah objek yang sama. Di sinilah inheritance atau pewarisan berperan. SMS dan jenis pesan lainnya memiliki karakteristik umum yang dimiliki juga oleh jenis pesan lainnya, seperti memiliki konten pesan, alamat/nomor pengirim, alamat/nomor penerima, dsb. Maka dari itu, Email sebagai objek turunan (subclass) mewarisi semua sifat dan perilaku dari objek induknya (superclass) Mail. Begitu juga dengan objek Whatsapp juga mewarisi sifat dan perilaku yang sama. Namun, whatsapp bisa membuat grup, mengirim broadcast message sedangkan Email tidak. */
/* Misalkan kita akan membuat sebuah child class bernama WhatsApp yang mewarisi kelas Mail. Maka contoh kodenya adalah sebagai berikut: */
/*class Mail {
    constructor(author) {
        this.from = author;
        this._contacts = [];
    }
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }
    showAllContacts() {
        return this._contacts;
    }
}

class WhatsApp extends Mail {
    constructor() {
        super();
        this.username = 'dicoding';
        this.isBussinessAccount = true;
    }
    myProfile() {
        return `my name ${this.username}, is ${this.isBussinessAccount ? 'Business' : 'Personal'}`;
    }
}

const wa1 = new WhatsApp(080111000222);
console.log(wa1.myProfile());
// my name dicoding, is Business*/

// Kita juga dapat mengakses attribute maupun method dari parent class yang Accessible. Misalkan:

// wa1.sendMessage('halo', 089000999888);

//Polymorphism
/*Polymorphism dalam bahasa Yunani berarti “banyak bentuk”. Sederhananya objek dapat memiliki bentuk atau implementasi 
yang berbeda-beda pada satu metode yang sama. Semua jenis Mail dapat mengirim pesan, namun whatsapp, email, 
sms tentunya memiliki cara yang berbeda dalam mengirim pesan, misalkan: whatsapp dapat mengirim pesan suara sedangkan yang lainnya tidak, 
email dapat menyaring konten spam saat mengirim pesan sedangkan yang lain tidak. Perbedaan bentuk atau cara mengirim pesan tersebut merupakan contoh dari polymorphism.*/

// Overriding Method
/* Overriding adalah teknik untuk kita melakukan perombakan (baik secara keseluruhan maupun tidak) pada sebuah method ataupun constructor yang dimiliki oleh parent class. Sehingga, ia dapat disesuaikan dengan behavior di child class. */

// Overriding Constructor

/* Sebelumnya kita telah mempelajari tentang constructor dan juga pewarisan. Pada contoh kasus di inheritance atau pewarisan, kita menemukan kasus seperti di bawah ini. */

class Mail {
  constructor(author) {
    this.from = author;
    this._contacts = [];
  }

  sendMessage(msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
    this._contacts.push(to);
  }

  showAllContacts() {
    return this._contacts;
  }

}

class WhatsApp extends Mail {
  constructor(username, isBussinessAccount, phoneNumber) {
  super(phoneNumber);
  this.username = username;
  this.isBussinessAccount = isBussinessAccount;
}
}

const wa1 = new WhatsApp('dicoding', true, 6281111111);

console.log(wa1.from); // undefined 

// Overriding Method

/* Hampir sama dengan overriding constructor, tetapi yang di-override di sini adalah method yang ada pada parent class. Pada dasarnya semua method yang ada pada kelas parent dapat diakses langsung di child kelasnya (as is). */

// super.methodName();

/* Kadang kita tidak menggunakan sebuah method seutuhnya sama seperti parent kelasnya. Namun, kita dapat menambahkan perintah tertentu ataupun menguranginya. Berikut merupakan contoh override pada method sendMessage. */

/* class WhatsApp extends Mail {
    constructor(username, isBussinessAccount, phoneNumber) {
        super(phoneNumber);
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }
 
    // Overriding method => Melakukan Override Total
    sendMessage(msg, to) {
        console.log('Send by WA');
    }
} */

/* Ketika kita memanggil method sendMessage pada contoh di atas, ia hanya akan mengeksekusi kode yang ada pada child class. */

/* const wa1 = new WhatsApp('di', true, 089000999888);
wa1.sendMessage('halo', 089000999888);*/
 
/**
Output:
Send by WA
**/

/* Untuk tetap melakukan eksekusi kode pada parent class maka perlu menggunakan operator super.methodName(). */
/* sendMessage(msg, to) {
    super.sendMessage(msg, to);
    console.log('Send by WA');
} */
/* Catatan:

super(...) digunakan untuk memanggil constructor parent dan hanya dapat digunakan di constructor.

super.methodName(...) digunakan untuk memanggil parent method. */

// Object Composition
/* Setelah konsep dari OOP kita pelajari, pasti sudah ada gambaran terkait dengan bagaimana membuat sebuah Parent Class kemudian membuat berbagai Child Class yang mana mewarisi sifat-sifat dari parent-nya, serta dapat menambahkan, mengubah, bahkan merombak setiap method yang ada.

Sebuah paradigma OOP akan menghasilkan hierarki, di mana semakin besar software yang kita buat, maka akan semakin besar dan rumit juga hierarkinya.
 */

 // [1] list of abstractions
const canSendMessage = self => ({
    sendMessage: () => console.log('send message:', self.message)
  });

const checkIsValidPhone = self => ({
    isValid: () => console.log('valid phone', self.from)
  });

// [2] crate object composition
const personalEnterprise = (from, message, store) => {
  // [3] attributes
  const self = {
    from,
    message,
    store
  };
  // [4] method
  const personalEnterpriseBehaviors = self => ({
    createCatalog: () => console.log('Catalog has created: ', self.store)
  });
  
  // [5] create object composition
  return Object.assign(self, personalEnterpriseBehaviors(self), canSendMessage(self), checkIsValidPhone(self));
};

const pe1 = personalEnterprise('pengirim@gmail.com', 'hei produk baru nih', 'Dicoding Store');
pe1.createCatalog(); //Catalog has created:  Dicoding Store
pe1.sendMessage(); //send message: hei produk baru nih 


// Built-in Class

/* Dalam JavaScript sendiri terdapat built-in class bawaan, misalnya Date, Object, Array, Math, dan String. Built-in class tersebut dapat digunakan untuk memanipulasi data-data terkait dengan array, perintah matematik, manipulasi karakter, dan manipulasi objek.

Date merupakan built-in object bawaan dari bahasa pemrograman JavaScript yang digunakan untuk utilitas terkait tanggal dan waktu. Ini sangat membantu ketika dalam program yang kita buat terdapat penggunaaan dan manipulasi tanggal dan waktu.

Untuk menggunakannya kita dapat meng-instansiasi Date object tersebut dengan 4 cara: */

// #1 tanpa parameter, yang berarti `myDate` akan berisi tanggal dan waktu saat ini
// const myDate = new Date(); 

// #2 parameter tanggal dalam bentuk string, misal  "January 01, 2021" 
// const myDate = new Date(dateString); 
 
// #3 parameter dalam bentuk number, misal 87400000
// const myDate = new Date(miliseconds); 
 
// #4 parameter tanggal dalam bentuk number (7 parameter), [hour,minute,second,millisecond] bersifat opsional
// const myDate = new Date(year,month,date,hour,minute,second,millisecond); 

// Date String Format

/* ketika kita menggunakan tanggal dan waktu, kita perlu memahami format yang dipakai oleh standar dunia. Ini berguna dan memudahkan kita untuk melakukan konversi dan manipulasi sebuah tanggal. Format date string sendiri, secara umum terdiri dari: */

/* Contoh Penggunaan Date
Berikut ini adalah kode misalkan kita ingin menghitung berapa umur kita dengan memanfaatkan object date. */
// parameter birthday dapat berupa miliseconds ataupun date string
const myAge = birthday => {
    const birtday = new Date(birthday);
    const today = Date.now(); // today menghasilkan nilai miliseconds saat ini
    
    const diff_ms = today - birtday.getTime(); // menghitung selisih nilai miliseconds hari ini dan tanggal lahir
    const diffDate = new Date(diff_ms);
    
    return diffDate.getFullYear() - 1970; // 1970 adalah representasi 0 dari miliseconds
  };
  
  console.log(myAge('2000-01-22')); // 21 tahun
// Selain Date, kita juga dapat menggunakan built-in class javascript yang lainnya.
/* const listOfContent = [1,2,”President”, {}];
console.log(Array.isArray(listOfContent)); 
// result is true
 
const splitText = "12:20:00".split(':');
// result is [ '12', '20', '00' ] */


// Paradigma Functional Programming
/* Paradigma Functional Programming adalah paradigma pemrograman di mana proses komputasi didasarkan pada fungsi matematika murni. Functional Programming (selanjutnya akan kita singkat menjadi FP) ditulis dengan gaya deklaratif yang berfokus pada “what to solve” dibanding “how to solve” yang dianut oleh gaya imperatif.

Sebagai gambaran buat Anda yang belum tahu apa itu deklaratif dan imperatif lebih jauh, silakan simak contoh kode berikut. */
// Gaya imperatif
/*const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = [];

for(let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark);*/

/* output:
   [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
*/

/* Contoh kode di atas merupakan salah satu gaya penulisan kode imperatif. Di mana proses pengisian nilai array baru (newNames) berdasarkan array lama (names) dilakukan secara manual. Inilah maksud dari “how to solve”, di mana kita perlu memikirkan bagaimana cara melakukan perulangannya (for); kapan perulangannya harus berhenti (i < names.length); bagaimana cara memasukkan nilai baru ke dalam array (newNamesWithExcMark.push). Huft, sangat melelahkan! */

/* Lantas bagaimana dengan gaya deklaratif? Mari kita lihat kode dengan fungsi yang sama namun dengan gaya deklaratif. */

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = names.map((name) => `${name}!`);

console.log(newNamesWithExcMark);

/* output:
 * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 */


// konsep" Functional Programming

// Pure Function
/* Salah satu konsep besar dari paradigma FP adalah Pure Function. Apa artinya? Pure Function merupakan konsep dari pembuatan fungsi yang mengharuskan fungsi untuk tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya. Sehingga mau seperti apa keadaanya, fungsi yang dibuat selalu menghasilkan sesuatu yang sama, terkecuali bila fungsi tersebut diberikan nilai parameter yang berbeda.

Untuk lebih jelasnya, simak kode berikut: */
let PI = 3.14;

const hitungLuasLingkaran = (jariJari) => {
  return PI * (jariJari * jariJari); 
}

console.log(hitungLuasLingkaran(4)); // 50.24

PI = 5; // tidak sengaja nilai PI berubah

console.log(hitungLuasLingkaran(4)); // 80
/* Menurut Anda, apakah fungsi hitungLuasLingkaran merupakan pure function atau impure function (lawan dari pure function)? Jika Anda menjawab impure function, Anda tepat sekali!

Fungsi tersebut tidak bisa dikatakan pure function karena ia membutuhkan nilai yang berada di luar dari fungsinya, yakni nilai PI. Bila nilai PI berubah, maka penggunaan fungsi menghasilkan nilai yang berbeda walaupun diberikan nilai parameter yang sama.

Lantas, bagaimana cara membuat fungsi tersebut menjadi pure? Mudah! */
/*const hitungLuasLingkaran = (jariJari) => {
    return 3.14 * (jariJari * jariJari); 
  }
  
  console.log(hitungLuasLingkaran(4)); // 50.24
  console.log(hitungLuasLingkaran(4)); // 50.24
  console.log(hitungLuasLingkaran(8)); // 200.96
  console.log(hitungLuasLingkaran(8)); // 200.96*/

/* Dengan memindahkan nilai PI secara konstan di dalam fungsi, maka dapat dipastikan nilai tersebut tidak akan berubah atau tak sengaja diubah. Dengan begitu fungsi selalu menghasilkan nilai yang sama bila nilai parameter yang diberikan sama.

Selain dilarang untuk bergantung terhadap nilai luar, pure function juga dilarang keras untuk mengubah nilai yang berada di luar baik secara sengaja atau tidak sengaja. Pure function tidak boleh menimbulkan efek samping (no side effect) ketika digunakan.

Untuk lebih jelasnya, coba lihat contoh kode berikut: */

const createPersonWithAge = (age, person) => {
    person.age = age;
    return person;
  };
  
  const person = {
    name: 'Bobo'
  };
  
  const newPerson = createPersonWithAge(18, person);
  
  console.log({
    person,
    newPerson
  });
  
  /**
   * Output:
   *  {
        person: { name: 'Bobo', age: 18 },
        newPerson: { name: 'Bobo', age: 18 }
      }
  */
/* Fungsi createPersonWithAge bertujuan untuk membuat objek person baru dengan tambahan properti age dari objek person yang ada. Namun alih-alih hanya membuat objek baru, ia juga malah mengubah nilai dari objek lama. Nah, hal inilah yang menyebabkan fungsi createPersonWithAge bukanlah pure function.

Lalu bagaimana cara membuat fungsi tersebut menjadi pure? Mudah, kita manfaatkan destructuring object daripada mengubah objek tersebut secara langsung. */
/*const createPersonWithAge = (age, person) => {
    return { ...person, age };
  };
  
  const person = {
    name: 'Bobo'
  };
  
  const newPerson = createPersonWithAge(18, person);
  
  console.log({
    person,
    newPerson
  });*/
  
  /**
   * Output:
   *  { 
   *    person: { name: 'Bobo' },
   *    newPerson: { name: 'Bobo', age: 18 } 
   *  }
  */
  /* Lihat! Lagi-lagi lebih mudah dan singkat bukan?

Agar lebih mudah dalam mengetahui apakah fungsi yang Anda buat sudah pure atau belum, pastikan 3 konsep ini ada pada fungsi yang Anda buat.

Mengembalikan nilai yang sama bila inputannya (nilai parameter) sama.
Hanya bergantung pada argumen yang diberikan.
Tidak menimbulkan efek samping.
Bila 3 konsep di atas terpenuhi, maka bisa dipastikan Anda membuat sebuah pure function. */
  

// Immutability
/* Konsep yang kedua adalah immutability. Immutable berarti sebuah objek tidak boleh diubah setelah objek tersebut dibuat. Kontras dengan mutable yang artinya objek boleh diubah setelah objek tersebut dibuat.

Konsep immutability sangat kental pada paradigma FP. Anda bisa lihat sebelumnya pada contoh penggunaan array map. Ketika menggunakan array.map(), alih-alih ia mengubah nilai dari array itu sendiri, malah ia membuat atau menghasilkan array baru. */
/*const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = names.map((name) => `${name}!`);

console.log({
    names,
    newNamesWithExcMark,
});*/

/**
 * {
     names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
     newNamesWithExcMark: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
   }
 */

// Lantas, bagaimana bila kita benar-benar perlu mengubah nilai dari sebuah objek? Contohnya seperti ini:
   /*const user = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const renameLastNameUser = (newLastName, user) => {
    user.lastName = newLastName;
}

renameLastNameUser('Potter', user);

console.log(user);*/

/**
 * output:
 * { firstname: 'Harry', lastName: 'Potter' }
 * 
 */

/* Yup! Tujuan Anda memang tercapai namun itu bukanlah konsep dari paradigma FP. Bila Anda ingin menerapkan FP sepenuhnya, hindari cara seperti di atas. Lantas bagaimana solusinya? Sama seperti fungsi array map(), alih-alih mengubah nilai objek secara langsung, terapkan perubahan tersebut pada nilai return dalam objek baru. */
/*const user = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const createUserWithNewLastName = (newLastName, user) => {
    return { ...user, lastName: newLastName }
}

const newUser = createUserWithNewLastName('Potter', user);

console.log(newUser);*/

/**
 * output:
 * { firstname: 'Harry', lastName: 'Potter' }
 * 
 */
/* Hasilnya sama kan? Selain itu, Anda juga bisa menyesuaikan nama fungsinya dari renameLastNameUser menjadi createUserWithNewLastName. Hal itu perlu untuk mengindikasikan bahwa fungsi mengembalikan atau menghasilkan objek user baru. */

// Rekursif
/* Konsep selanjutnya yang ada di Functional Programming adalah rekursif. Apa itu rekursif? Rekursif merupakan teknik pada sebuah function yang memanggil dirinya sendiri.

Kita akan mencoba mengubah fungsi countDown yang biasanya kita buat menggunakan sintaksis iterasi seperti for, foreach, while seperti kode di bawah menjadi bentuk rekursif. */
// Maka, bentuk rekursinya adalah sebagai berikut:
const countDown = start => {
    console.log(start);
    if(start > 0) countDown(start-1);
  };
  
  countDown(10);
/* Dengan teknik rekursif ini, kita sebenarnya bisa menggantikan operasi iterasi dengan rekursi. Namun tidak sebatas itu saja, dengan rekursi kita dapat membuat dan mengolah data structures seperti Tree dan Array. */


// Higher-Order Function

/* JavaScript memiliki kemampuan First Class Functions, karena itu fungsi pada JavaScript dapat diperlakukan layaknya sebuah data. Kita bisa menyimpan function dalam variabel, memberikan function sebagai parameter pada fungsi lainnya, hingga mengembalikan function di dalam function. */
/*const hello = () => {
    console.log('Hello!')
  };
  
  const say = (someFunction) => {
    someFunction();
  }
  
  const sayHello = () => {
      return () => {
          console.log('Hello!');
      }
  }
  
  hello();
  say(hello);
  sayHello()();*/
  
  /**
   * Hello!
   * Hello!
   * Hello!
   */
/* Karena dengan kemampuan First Class Functions-nya itu, kita dapat membuat Higher-Order Function secara mudah. Tunggu, tunggu. Apa itu Higher-Order Function? */
  
// Higher order function 

/* Apa itu Higher-Order Function?

Higher-Order Function menjadi bagian konsep pada paradigma FP. Higher-Order Function merupakan fungsi yang dapat menerima fungsi lainnya pada argumen; mengembalikan sebuah fungsi; atau bahkan keduanya.

Teknik Higher-Order Function biasanya digunakan untuk:

Mengabstraksi atau mengisolasi sebuah aksi, event, atau menangani alur asynchronous menggunakan callback, promise, dan lainnya.
Membuat utilities yang dapat digunakan di berbagai tipe data.
Membuat teknik currying atau function composition.
Array map() merupakan salah satu contoh Higher-Order Function yang ada di JavaScript. Karena dalam penggunaanya, ia menerima satu buah argumen yang merupakan sebuah function.

Dengan mengetahui adanya Higher-Order Function, Anda bisa membuat fungsi map() versi Anda sendiri! */

/*const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
  const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr[index];
    if(!item) return newArray;
    return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
  }

  return loopTrough(arr, action);
}


const newNames = arrayMap(names, (name) => `${name}!` );

console.log({
    names,
    newNames,
});*/

/**
 * output:
 * {
 *   names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
 *   newNames: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 * }
 */


// Reusable Function 

/* Dengan menerapkan konsep-konsep yang ada di dalam paradigma FP, fungsi yang Anda buat akan bersifat reusable. Karena fungsi yang Anda buat merupakan pure function, ia tidak akan dipengaruhi ataupun mempengaruhi keadaan di/dari luar. Hal ini tentu membuat fungsi dapat digunakan berkali-kali tanpa khawatir mendapatkan hasil di luar ekspektasi Anda. */

// Array Map
/* Fungsi array.map() merupakan fungsi bawaan dari array yang sangat berguna dan banyak sekali digunakan. Fungsi ini dapat dipanggil dari sebuah data bertipe array dan menerima satu buah callback function. */

// ['Harry', 'Ron', 'Jeff', 'Thomas'].map(() => { });

/* Callback function tersebut akan dipanggil sebanyak jumlah panjang array dan akan memiliki akses pada index array sesuai dengan iterasinya. */

// ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { });

/* Seperti yang Anda ketahui di awal, fungsi map akan mengembalikan array baru. Nilai tiap item pada array yang dikembalikan, dihasilkan dari kembalian callback function-nya. Karena callback function dapat mengakses item array, biasanya developer menggunakannya untuk menghasilkan nilai baru. */
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!`});

console.log(newArray);

/**
 * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 * 
 */


// Array Filter
/* Sama seperti array.map(), fungsi array.filter() merupakan fungsi bawaan dari data yang bertipe array di JavaScript. Sesuai namanya, fungsi ini sangat berguna untuk melakukan proses penyaringan (filtering) terhadap nilai array yang ada. Bila Anda memiliki kasus di mana Anda ingin menghilangkan beberapa item di array berdasarkan spesifikasi tertentu, fungsi ini sangatlah cocok Anda gunakan. */

// Contoh penggunaan ketika Anda ingin menghilangkan seluruh nilai falsy pada array:
const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));

console.log(truthyArray);

/**
 * output:
 * [ 1, 'Hallo', 'Harry', 14 ]
 * 
 */

/* Contoh lain, penggunaan filter untuk menyaring array dari objek siswa yang layak mendapatkan beasiswa berdasarkan nilai skor yang didapat. */
/*const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];
  
  const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
  
  console.log(eligibleForScholarshipStudents);*/
  
  /**
   * output:
   * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
   * 
   */

// Array Reduce
/* Sama seperti array.map(), array.reduce() adalah fungsi bawaan dari data yang bertipe array yang digunakan untuk mengeksekusi fungsi reducer pada setiap elemen array dan hanya mengembalikan output satu nilai saja. */
// arr.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue])
 
// [...] adalah opsional parameter

/* Callback function dari fungsi ini dapat diolah untuk manipulasi data currentValue dan menyimpannya pada accumulator. Selain itu, fungsi reduce juga memiliki nilai awal yang dapat didefinisikan pada bagian initialValue.

Contoh penggunaannya misalkan ketika kita ingin menjumlahkan total nilai siswa: */
const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];
  
  const totalScore = students.reduce((acc, student) => acc + student.score, 0);
  
  console.log(totalScore);
  
  /**
   * output:
   * 313
   * 
   */

// Array some
/* array.some() merupakan fungsi bawaan dari array yang cukup sering digunakan. Fungsi ini akan menghasilkan nilai boolean. */
// arr.some(callback(element, [index], [array]), [thisArg])
 
// [...] adalah opsional parameter

/* Nilai yang dihasilkan didasarkan pada pernyataan apakah ada setidaknya satu dari deretan nilai dalam array tersebut lolos berdasarkan kriteria yang kita tuliskan dalam callback function.

Contoh penggunaannya misalkan kita ingin mengetahui apakah dalam deretan angka terdapat angka genap. */
const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);

console.log(even);

/** 
output true
**/

// Array find
/* Mirip dengan array.some(), array.find() sesuai namanya digunakan untuk mencari apakah di dalam deretan nilai terdapat nilai yang sesuai dengan kriteria yang kita definisikan pada callback function. 

Yang membedakan array.find() dengan array.some(), find akan menghasilkan satu nilai dari elemen yang pertama kali ditemukan berdasarkan kriteria tertentu dan akan menghasilkan nilai undefine bila tidak ada kriteria yang terpenuhi pada item array. */
// arr.find(callback(element, [index], [array]), [thisArg]);
 
// [...] adalah opsional parameter
// Sebagai contoh, misalkan kita akan mencari siswa dengan nama `James`.
/*const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];
  
  const findJames = students.find(student => student.name === 'James');
  console.log(findJames);*/
  
  /**
  output
  { name: 'James', score: 88 }
  **/

// Array sort
/* array.sort() merupakan fungsi bawaan dari array yang berguna untuk melakukan pengurutan nilai dari sebuah deretan nilai. Secara default, fungsi sort akan mengubah semua nilai dalam deretan menjadi bentuk string dan mengurutkannya secara ascending. */
// arr.sort([compareFunction])
 
// [...] adalah opsional parameter
// Contoh sederhananya adalah sebagai berikut:
/*const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// output: [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);*/
// output: [ 1, 1000, 101, 121, 30, 4 ]
/* Contoh pengurutan di atas didasarkan pada pengurutan bentuk tipe data string. Oleh karena itu, ketika kita ingin mengurutkan sesuai dengan kriteria yang kita inginkan (berdasarkan tanggal ataupun berdasarkan nilai siswa) maka kita perlu membuat compare function tersendiri. */
const array1 = [1, 30, 4, 1000];

const compareNumber = (a, b) => {
  return a - b;
};
const sorting = array1.sort(compareNumber);
console.log(sorting);

/**
output
[ 1, 4, 30, 1000 ]
**/
/* Pada compare function, fungsi akan membandingkan 2 nilai yang akan menghasilkan 3 result yaitu negatif (-), 0, dan positif (+).

Jika, negative maka `a` akan diletakkan sebelum `b`
Jika, positive maka `b` akan diletakkan sebelum `a`
Jika, 0 maka tidak ada perubahan posisi. */

// Array every
/* array.every() merupakan fungsi bawaan dari array yang digunakan untuk mengecheck apakah semua nilai dari sebuah array sesuai dengan kriteria yang didefinisikan. Kembalian dari array.every() adalah nilai Boolean. */
// arr.every(callback(element, [index], [array])
// Sebagai contoh, kita akan mengecek apakah seorang siswa telah lulus semua uji materi:
const scores = [70,85,90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);

/**
output
true
**/

// Array forEach
/* Array forEach merupakan fungsi bawaan dari array yang berfungsi untuk memanggil fungsi callback pada setiap iterasi index array. Berbeda dari fungsi array lain yang sudah kita bahas, fungsi ini tidak mengembalikan nilai apa pun. Jadi fungsi ini secara harfiah hanya berfungsi untuk memanggil fungsi callback-nya saja, tak lebih dari itu.

Melalui fungsi ini, Anda dapat mengubah sintaks perulangan berdasarkan jumlah array secara imperatif menjadi deklaratif. */
/*const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
for(let i = 0; i < names.length; i++) {
  console.log(`Hello, ${names[i]}!`);
}*/
 
/**
 * output:
 * Hello, Harry!
 * Hello, Ron!
 * Hello, Jeff!
 * Hello, Thomas!
 * 
 */
/* Namun, ketahuilah bahwa ketika menggunakan forEach, kita tidak bisa menggunakan operator break atau continue pada proses perulangan (Anda bisa melakukannya pada perulangan for). Hal ini juga berlaku ketika pada fungsi map dan filter. */
/*const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
for(let i = 0; i < names.length; i++) {
  if(names[i] === 'Jeff') continue; // Bisa!
  
  console.log(`Hello, ${names[i]}!`);
}
 
names.forEach((name) => {
  if(name === 'Jeff') continue; // Tidak Bisa!
  console.log(`Hello, ${name}`);
});*/

// kuis Currency
// soal 1
/*function fetchUsername() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve('JSUser');
      }, 3000);
  })
}

console.log("Fetching username...");
fetchUsername().then((value) => {
  console.log(`You are logged in as ${value}`);
})
console.log("Welcome!");*/

// soal 2
/*function fetchUsername() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve('JSUser');
      }, 3000);
  })
}

console.log("Fetching username...");
const username = fetchUsername();
console.log(`You are logged in as ${username}`);
console.log("Welcome!");*/

// soal 3
/*function fetchUsername() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve('JSUser');
      }, 3000);
  })
}

console.log("Fetching username...");
fetchUsername().then((value) => {
  console.log(`You are logged in as ${value}`);
})
.finally(() => {
  console.log("Welcome!");
})*/



// ujian akhir js
// if ((true || false) && (false || false)) {
//   console.log("It's true");
// } else {
//   console.log("It's false");
// }
//
const firstString = "Hello";
const secondString = "JavaScript";

console.log(firstString + secondString);
//
const oneTwoThree = [1, 2, 3];
const sevenEightNine = [7, 8, 9];

// const result = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];

// console.log(result);
//
const capital = {
  "Jakarta": "Indonesia",
  "London": "England",
  "Tokyo": "Japan"
}
capital["New Delhi"] = "Indonesia";

console.log(capital["Indonesia"]);
// //
// function minMax(arrayOfNumbers) {
//   let currentMin = arrayOfNumbers[0];
//   let currentMax = arrayOfNumbers[0];
//   for (value of arrayOfNumbers) {
//       if (value < currentMin) {
//           currentMin = value;
//       } else if (value > currentMax) {
//           currentMax = value;
//       }
//   }

//   console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
// }

// minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);

//
// class MyCustomError extends Error {
//   constructor(message) {
//       super(message);
//       this.name = "MyError";
//   }
// }

// try {
//   throw new MyCustomError("This is an error");
// } catch (e) {
//   console.log(e.message);
// }
//
/*let myString = "";

try {
    myString += "a";
    throw Error();
} catch(e) {
    myString += "b";
} finally {
    myString += "c";
    throw Error();
    myString += "d";
}

console.log(myString);*/
//
// function fetchUsername() {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           resolve('JSUser');
//       }, 3000);
//   })
// }

// console.log("Fetching username...");
// const username = fetchUsername();
// console.log(`You are logged in as ${username}`);
// console.log("Welcome!");
//
const stock = 0;
const milkNeeded = 25;

if (stock > milkNeeded) {
  stock = stock - milkNeeded;
  console.log('Processing your order...');
} else {
  console.log('Out of Stock!');
}

// console.log('Thank you');
//
let x;
x = 7;
x = 'JS is great';
console.log(x);
//
// const name = 'Dicoding';
// const language = 'JavaScript';

// console.log(`Hello $name. Welcome to $language!`);
// //
// const artistsAndSongs = {
//   "Keyakizaka46": ["Silent Majority"],
//   "Blackpink": ["How You Like That", "Ice Cream"],
//   "JKT48": ["Rapsodi", "Heavy Rotation"],
//   "Twice": ["What is Love?"],
// }

// artistsAndSongs["Babymetal"] = ["Gimme chocolate"];
// delete artistsAndSongs["Keyakizaka46"];
// artistsAndSongs["Blackpink"].push("Rose - Gone");

// console.log(artistsAndSongs);
//
// function calculate(value) {
//   return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
// }

// console.log(calculate(3));
//
// function multiply(num) {
//   total = num * num;
// }

// const result = multiply(3);

// console.log(result);
//
// try {
//   const arr = [1, 2, 3, 4];
//   for (let i = 0; i <= 4; i++) {
//       console.log(arr[i]);
//   }
// } catch(e) {
//   console.log("Out of bounds");
// }
//
// let myString = "";

// try {
//     myString += "a";
//     throw Error();
// } catch(e) {
//     myString += "b";
// } finally {
//     myString += "c";
//     throw Error();
//     myString += "d";
// }

// console.log(myString);
//
// function main() {
//   try {
//       console.log("Fetching username...");
//       const username = await fetchUsername();
//       console.log(`You are logged in as ${username}`);
//       console.log("Welcome!");
//   } catch(e) {
//       console.log("Username tidak ditemukan");
//   }
// }

//
function fetchUsername() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve('JSUser');
      }, 3000);
  })
}

console.log("Fetching username...");
const username = fetchUsername();
console.log(`You are logged in as ${username}`);
console.log("Welcome!");
//
function minMax(arrayOfNumbers) {
  let currentMin = arrayOfNumbers[0];
  let currentMax = arrayOfNumbers[0];
  for (value of arrayOfNumbers) {
      if (value < currentMin) {
          currentMin = value;
      } else if (value > currentMax) {
          currentMax = value;
      }
  }

  console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);
//
function multiply(num) {
    total = num * num;
}

const result = multiply(3);

console.log(result);
//
class MyCustomError extends Error {
  constructor(message) {
      super(message);
      this.name = "MyError";
  }
}

try {
  throw new MyCustomError("This is an error");
} catch (e) {
  console.log(e.message);
}
//
function fetchUsername() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve('JSUser');
      }, 3000);
  })
}

console.log("Fetching username...");
fetchUsername().then((value) => {
  console.log(`You are logged in as ${value}`);
})
console.log("Welcome!");
























































































































































