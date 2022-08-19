// console.info('helloo');

// function adalah kumpulan2 statement

// function hitungLuas() {
//   // input
//   let panjang = prompt(' Masukan Panjang : ');
//   let lebar = prompt(' Masukan Lebar : ');
//   let luas = panjang * lebar;

//   console.info(' Panjang anda adalah : ' + luas + ' cm');
// }
// // memanggil function hitungluas
// hitungLuas();

// arrow function varname = ()=>{}

const hitungUsia = () => {
  // input
  let username = prompt('Masukan Nama Anda : ');
  let tahunLahir = prompt('Masukan Tahun Lahir : ');
  let tahunIni = 2022;

  let usia = tahunIni - tahunLahir;

  // console.info('Hello ' + username + ' Usia Kamu Adalah ' + usia + ' Tahun.');
  // menangkap element dgn id result
  let result = document.getElementById('result');
  result.innerHTML = 'Hello ' + username + ' Usia Anda Adalah ' + usia + ' Tahun';
};
