import { input, select } from "@inquirer/prompts";

const nama = await input({ message: "silahkan tulis nama anda: " });
const namaLengkap = nama.toUpperCase()

const pilihProdi = await select({
  message: "silahkan pilih Prodi anda : ",
  choices: [
    { name: "Sistem Informasi", value: "Sistem Informasi" },
    {name: "Teknik Informasi", value: "Teknik Informasi"}
  ]
})
const prodi = pilihProdi.toUpperCase();


const nilaiTugas = await input({ message: "nilai tugas:" });
const nilai1 = Number(nilaiTugas);
const nilaiPraktek = await input({ message: "nilai praktek:" });
const nilai2 = Number(nilaiPraktek);
const nilaiUas = await input({ message: "nilai nilaiUas:" });
const nilai3 = Number(nilaiUas);

const jumlahNilai = nilai1 + nilai2 + nilai3;
const totalNilai = jumlahNilai / 3;

if (totalNilai >= 80) {
  console.log(`Nama = ${namaLengkap}`)
  console.log(`Prodi = ${prodi}`)
  console.log(`Nilai =  ${totalNilai}`)
  console.log("SELAMAT ANDA LULUS DENGAN MEMUASKAN");
}else if (totalNilai >= 70) {
  console.log(`Nama = ${namaLengkap}`)
  console.log(`Prodi = ${prodi}`)
  console.log(`Nilai =  ${totalNilai}`)
  console.log("SELAMAT ANDA LULUS");
} else {
  console.log(`Nama = ${namaLengkap}`)
  console.log(`Prodi = ${prodi}`)
  console.log(`Nilai =  ${totalNilai}`)
  console.log("MAAF ANDA MENGULANG LAGI TAHUN DEPAN");
}
