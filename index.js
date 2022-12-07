let date = document.getElementById("date");
let tgl = document.getElementById("tgl");
let space = " ";

function inputName() {
  let name = prompt("Halo, Siapa Nama mu?")

  if (name != null) {
    document.getElementById("name").innerHTML = name;
  }  else if (name == null) {
      document.getElementById("name").innerHTML = "Halo orang baik";
  }
}

let cal = new Date();
const day = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
const month = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

setInterval(function () {
  date.innerText = cal.getHours() + ":" + cal.getMinutes();
  tgl.innerText =
    day[cal.getDay()] +
    ", " +
    cal.getDate() +
    space +
    month[cal.getMonth()] +
    space +
    cal.getFullYear();
}, 1000);
