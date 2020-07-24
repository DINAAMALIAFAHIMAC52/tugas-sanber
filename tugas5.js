
        /*
    Tulis code function di sini
*/
        // CONTOH
        // Kamu diminta untuk membuat fungsi bernama tampilkan() untuk menampilkan "Halo Sanbers" pada halaman html. 
        // Jawaban CONTOH
        function tampilkan() {
            document.getElementById("Halo Sanbers").innerHTML = "Halo Sanbers"
        }

        //Jalankan function 
        tampilkan()

        // Soal No. 1 Fungsi Teriak
        /* 
            BTulislah sebuah function dengan nama halo() yang mengembalikan nilai “Halo Sanbers!” yang kemudian dapat ditampilkan di console.
        */

        // Code kamu di sini
        function teriak() {
            document.getElementById("halo").innerHTML = "Halo Sanbers!"
        }

        // Jalankan function teriak
        teriak()

        // Soal No. 2 Fungsi Kalikan
        /* 
            Tulislah sebuah function dengan nama kalikan() yang mengembalikan hasil perkalian dua parameter yang di kirim.
            
        */

        // Code kamu di sini
        function kalikan(dua belas, empat) {
            document.getElementById("kalikan").innerHTML = dua belas * empat
        }

        // Jalankan function kalikan
        kalikan(12, 4)

        // Soal No. 3 Fungsi buatKalimat
        /* 
           Tulislah sebuah function dengan nama introduce() yang memproses paramater yang dikirim menjadi sebuah kalimat perkenalan seperti berikut: “Nama saya [name], umur saya [age] tahun, alamat saya di [address], dan saya punya hobby yaitu [hobby]!”
            CONTOH: 
            var name = "John";
            var age = 30;
            var address = "Jalan belum jadi";
            var hobby = "Gaming";
            var kalimatBaru = buatKalimat(name,age,address,hobby);
            Akan menampilkan : 
            "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!"
        */

        // Code kamu di sini
        function buatKalimat(nama, usia, alamat, hobi) {
            document.getElementById("buatKalimat").innerHTML = 'Nama saya ' + nama +
                ', umur saya ' + usia + ' tahun, alamat saya di ' + alamat +
                ', dan saya punya hobby yaitu ' + hobi + '!'
        }

        // Jalankan function buatKalimat
        buatKalimat('Ahmad', 25, 'alamat saya di jalan belum jadi', 'bermain gitar')
    
