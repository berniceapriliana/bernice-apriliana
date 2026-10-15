// ambil elemen yang dibutuhkan
const deskripsi = document.querySelector("#deskripsi");
const btnTeks = document.querySelector("#btnTeks");
const btnTema = document.querySelector("#btnTema");

// dua kalimat deskripsi
const teksAwal = "Halo, saya Bernice. Saya sedang belajar membuat website " +
  "dan suka mencoba hal-hal baru di dunia teknologi.";
const teksBaru = "Saya mahasiswa Manajemen semester 1 yang sedang belajar membuat website. " +
  "Ini adalah tugas pertama saya tentang halaman responsif.";

let sudahBerubah = false;

// tombol Ubah Teks
btnTeks.addEventListener("click", function () {
  if (sudahBerubah) {
    deskripsi.textContent = teksAwal;
  } else {
    deskripsi.textContent = teksBaru;
  }
  sudahBerubah = !sudahBerubah;
});

// tombol Ganti Tema
btnTema.addEventListener("click", function () {
  document.body.classList.toggle("gelap");
});
