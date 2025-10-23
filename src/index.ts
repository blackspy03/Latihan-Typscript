let namaSaya: string = "John Doe";
let umurSaya = 30; //(jadi number, menyesuaikan first declaration) 

let isMarried: any; //bisa diisi dengan tipe data apa saja

//union type
let namaKucing: string | number; //bisa di isi dengan string atau number
namaKucing = "Kitty";
namaKucing = 5;

//array 
let saudaraSaya: string[] = ["Jane", "Doe"]; //di isi hanya dengan string

//tuple array
let alamatSaya: [string, number] = ["Jl. Merdeka", 12345]; //di isi dengan string dan number sesuai urutan 

//tipe data custom
type temanType = {
    nama: string;
    umur: number;
    isMarried?: boolean; // ? artinya optional
};

let temanSaya: temanType = {
    nama: "Alice",
    umur: 28, //bisa di tulis 2_8, _ hanya sebagai pemisah agar lebih mudah dibaca kalau angkanya besar
    isMarried: false,
};

// function
function sapaTeman() { //function type menjadi string karena ada return string
    //function memiliki tipe data void/string/number/boolean/any/array/tuple/custom type
    return `Halo, gaes!`;
}
function sapaTeman1(): string {
    //return 3; tidak valid karena angka bukan string
    return `Halo, gaes!`;
}
function sapaTeman2(): void { //function type void artinya tidak mengembalikan nilai apapun
    console.log(`Halo, gaes!`);
}
function sapaTeman3(nama: string): string { //parameter nama wajib bertipe yang ditentukan 
    // (string/number/boolean/any/array/tuple/custom type)
    return `Halo, ${nama}!`;
}

// arrow function
const sapaTeman4 = (): string => "Halo, gaes!"; //arrow function dengan return string
// bisa juga ditulis seperti ini:
// const sapaTeman4 = (): string => {
//     return "Halo, gaes!";
// }

function tambah(a: number, b: number): string {
    return `${a} ditambah ${b} adalah ${a + b}`;
}

console.log(tambah(5, 10));

// INTERFACEE
interface Hewan {
    nama: string;
    umur: number;
    jenis: string;
    dilindungi: boolean;
}
interface Hewan {
    habitat?: string; //optional
}

interface Burung extends Hewan {
    bisaTerbang: boolean;
}// extends artinya mewarisi properti dari interface Hewan

function tampilHewan(hewan: Hewan): string {
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