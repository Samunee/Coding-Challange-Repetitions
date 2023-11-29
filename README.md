# Cari Pengulangan Terpanjang dalam Urutan DNA

Ini adalah program sederhana pake JavaScript buat cari pengulangan terpanjang dalam urutan DNA yang kamu masukkin.

## Gimana kerjanya?

Program ini menggunakan fungsi `findLongestRepetition(sequence)` yang mengambil urutan DNA sebagai argumen dan mengembalikan panjang pengulangan karakter terpanjang dalam urutan tersebut.

### Cara Kerjanya

- Program menggunakan variabel `maxRepetition` untuk menyimpan panjang pengulangan terpanjang yang ditemukan.
- Variabel `currentRepetition` digunakan untuk menyimpan panjang pengulangan saat ini yang sedang dianalisis.
- Dengan menggunakan loop, program memeriksa urutan DNA untuk menemukan pengulangan terpanjang dengan cara membandingkan karakter bersebelahan.
- Jika karakter sama dengan karakter berikutnya, `currentRepetition` akan bertambah.
- Ketika karakter tidak sama, `currentRepetition` akan direset ke 1.
- Program akan mengembalikan nilai `maxRepetition` yang merupakan panjang pengulangan terpanjang dalam urutan DNA.

## Penggunaan

Program pake modul `readline` buat nerima input dari pengguna lewat terminal.
Setelah dijalankan, pengguna diminta masukin urutan DNA, terus program bakal kasih tau panjang pengulangan karakter terpanjang.

## Contoh

Input: <br>
Masukin urutan DNA: <br>
`ATTCGGGA`

Output: <br>
`3`


## Kriteria Penilaian

- Program ini akan memberikan panjang pengulangan karakter terpanjang untuk urutan DNA yang dimasukkan pengguna.
- Nilai Testing peserta akan disortir secara DESC (tertinggi ke terendah).
- Dokumentasi kode yang baik, seperti: TODO setiap baris kode solusi.
- Ringkas, namun tepat.

---
Dibuat oleh [Fitra Muhammad Anugrah](https://github.com/Samunee)
