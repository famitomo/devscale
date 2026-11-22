import { input, select } from "@inquirer/prompts";
import { kuKe, kuSo, kuTam } from "./rute";

console.log("selamat datang di KUPANG TRAVEL");
const tujuanBus = await select({
  message: "silahkan pilih kota tujuanmu: ",
  choices: [
    { name: "Kupang-Soe ~ Rp.125,000", value: "kuSo" },
    { name: "Kupang-Kefa ~ Rp.150,000", value: "kuKe" },
    { name: "Kupang-Atambua ~ Rp.200,000", value: "kuTam" },
  ]
})
// ------------------------------------------
const namaPenumpang = await input({message: "pesanan atas nama: "})

const jumlahPenumpang = await input({ message: "untuk berapa orang" });
const numberPenumpang = Number(jumlahPenumpang);
// -------------------------------------------
if (tujuanBus === "kuSo") {
  const hasil = kuSo * numberPenumpang;
  console.log(`pesanan atas nama ${namaPenumpang} untuk ${numberPenumpang} orang tujuan Soe harga Rp.${hasil},000`);
} else if (tujuanBus === "kuKe") {
  const hasil = kuKe * numberPenumpang;
  console.log(`pesanan atas nama ${namaPenumpang} untuk ${numberPenumpang} orang tujuan Kefa harga Rp.${hasil},000`);
} else {
  const hasil = kuTam * numberPenumpang;
  console.log(`pesanan atas nama ${namaPenumpang} untuk ${numberPenumpang} orang tujuan Atambua harga Rp.${hasil},000`);
}
