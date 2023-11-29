// Function untuk mencari pengulangan terpanjang dalam urutan DNA
function findLongestRepetition(sequence) {
    let maxRepetition = 0; // TODO: Menyimpan panjang pengulangan terpanjang
    let currentRepetition = 1; // TODO: Menyimpan panjang pengulangan saat ini

    // Loop untuk memeriksa pengulangan terpanjang
    for (let i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] === sequence[i + 1]) {
            currentRepetition++; // Meningkatkan jumlah pengulangan saat karakter sama
            if (currentRepetition > maxRepetition) {
                maxRepetition = currentRepetition; // Update panjang pengulangan terpanjang
            }
        } else {
            currentRepetition = 1; // Reset pengulangan saat karakter tidak sama
        }
    }

    return maxRepetition; // Mengembalikan panjang pengulangan terpanjang
}

// Modul readline untuk menerima input dari pengguna
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Meminta pengguna memasukkan urutan DNA
rl.question("Masukkan urutan DNA: ", (sequence) => {
    const longestRepetition = findLongestRepetition(sequence); // Mencari pengulangan terpanjang
    console.log(longestRepetition); // Menampilkan panjang pengulangan terpanjang
    rl.close();
});
