Nomor 1

{
    console.log("LOOPING PERTAMA")
    let i = 1;
    while(i <= 20){
        if(i%2==0){
            console.log(i + "- I love coding");
        }
        i++
    }
    console.log("LOOPING KEDUA")
    let x = 20;
    while(x >= 1){
        if(x%2==0){
            console.log(x + "- I will become a frontend developer");
        }
        x--
    }
}
console.log('-------------------------------');

Nomor 2 

{
    for(z=1;z<=20;z++){
        if(z%2==0){
          console.log(z + "- Berkualitas")
        }
        else if(z%3==0 && z%2!=0){
          console.log(z + "- I Love Coding")
        }
        else if(z%2!=0){
          console.log(z + "- Santai")
        }
    }
}
console.log('-------------------------------');



Nomor 3 

{
    var line = "";
    for (var i = 1; i <= 7; i++) {
      for (var j = 1; j <= i; j++) {
        line += "#"
      }
      line += "\n";
    }
    console.log(line)
}
console.log('-------------------------------');


Nomor 4 

var kalimat="saya sangat senang belajar javascript"
var arrKalimat = kalimat.split(" ");
console.log(arrKalimat);

Nomor 5 

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();
for(i = 0; i <= daftarBuah.length-1; i++){
  console.log(daftarBuah[i]);
}