// Soal No 1.
let luasLingkaran = (r) => {
    const pi = 3.14;
    let result = pi*(r*r);
    return result;
}

let kelilingLingkaran = (r) => {
    const pi = 3.14;
    let result = pi*(2*r);
    return result;
}

console.log("Luas lingkaran = "+luasLingkaran(14));
console.log("Keliling lingkaran = "+kelilingLingkaran(14));

// Soal No 2.
let kalimat = (a, b, c, d, e) => {
    return `${a} ${b} ${c} ${d} ${e}`
}

console.log(kalimat("saya", "adalah", "seorang", "frontend", "developer"));

// Soal No 3.
class Book{
    constructor(name, totalPage, price){
        this.nama = name;
        this.jumlahHalaman = totalPage;
        this.harga = price;
    }
}

class Komik extends Book{
    constructor(name, totalPage, price, isColorful){
        super(name, totalPage, price);
        this.color = isColorful;
    }
}

let komik = new Komik("Conan", 55, 25000, false);
console.log(komik);
