import { input, select } from "@inquirer/prompts";
import { paket1, paket2, paket3 } from "./menu";

console.log(`selamat datang di KUPANG FRIED CHIKEN`);

const name = await input({ message: "hay,, pesanan atas nama: " });

const paketMenu = await select({
  message: "silahkan pilih pesananmu:",
  choices: [
    { name: "paket 1 (ayam geprek + esteh) Rp.15,000", value: "paket1" },
    { name: "paket 2 (ayam lalapan + esteh) Rp.20,000", value: "paket2" },
    { name: "paket 3 (ayam penyetan + esteh) Rp.25,000", value: "paket3" },
  ]
})

const inputPorsi = await input({ message: "mau berapa porsi?" });
const jumlahPorsi = Number(inputPorsi);

if (paketMenu === "paket1") {
  const hasil = paket1 * jumlahPorsi;
  // console.log(hasil);
  console.log(`baik pesanan ${paketMenu} atas nama ${name}, totalnya Rp.${hasil},000 mohon ditunggu  `)  ;
} else if (paketMenu === "paket2") {
  const hasil = paket2 * jumlahPorsi;
  // console.log(hasil);
  console.log(`baik pesanan ${paketMenu} atas nama ${name}, totalnya Rp.${hasil},000 mohon ditunggu  `)  ;
} else {
  const hasil = paket3 * jumlahPorsi;
  // console.log(hasil);
  console.log(`baik pesanan ${paketMenu} atas nama ${name}, totalnya Rp.${hasil},000 mohon ditunggu  `)  ;
}
