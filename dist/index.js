"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let namaSaya = "John Doe";
let umurSaya = 30; //(jadi number, menyesuaikan first declaration) 
let isMarried; //bisa diisi dengan tipe data apa saja
//union type
let namaKucing; //bisa di isi dengan string atau number
namaKucing = "Kitty";
namaKucing = 5;
//array 
let saudaraSaya = ["Jane", "Doe"]; //di isi hanya dengan string
//tuple array
let alamatSaya = ["Jl. Merdeka", 12345]; //di isi dengan string dan number sesuai urutan 
let temanSaya = {
    nama: "Alice",
    umur: 28, //bisa di tulis 2_8, _ hanya sebagai pemisah agar lebih mudah dibaca kalau angkanya besar
    isMarried: false,
};
// function
function sapaTeman() {
    //function memiliki tipe data void/string/number/boolean/any/array/tuple/custom type
    return `Halo, gaes!`;
}
function sapaTeman1() {
    //return 3; tidak valid karena angka bukan string
    return `Halo, gaes!`;
}
function sapaTeman2() {
    console.log(`Halo, gaes!`);
}
function sapaTeman3(nama) {
    // (string/number/boolean/any/array/tuple/custom type)
    return `Halo, ${nama}!`;
}
// arrow function
const sapaTeman4 = () => "Halo, gaes!"; //arrow function dengan return string
// bisa juga ditulis seperti ini:
// const sapaTeman4 = (): string => {
//     return "Halo, gaes!";
// }
function tambah(a, b) {
    return `${a} ditambah ${b} adalah ${a + b}`;
}
console.log(tambah(5, 10));
function tampilHewan(hewan) {
    return `Hewan ini bernama ${hewan.nama}, 
    berumur ${hewan.umur} 
    tahun, jenisnya ${hewan.jenis}
    , dan dilindungi: ${hewan.dilindungi}
    habitat: ${hewan.habitat ?? "tidak diketahui"}`;
}
const hewan1 = {
    nama: "Harimau",
    umur: 5,
    jenis: "Karnivora",
    dilindungi: true,
    habitat: "Hutan",
};
console.log(tampilHewan(hewan1));
console.log({ namaSaya }); //menampilkan dalam bentuk object
console.log(namaSaya); //menampilkan dalam bentuk string biasa
//# sourceMappingURL=index.js.map