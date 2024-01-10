let i = 0;

// standart function
function getDetailHuman() {
  i += 1;
  if (i > 5) {
    console.log("lebih dari 5x diklik");
  } else {
    console.log("jatah klik masih ada");
  }
}

// arrow function
const getDetailHuman2 = () => {
  i += 1;
  i > 5
    ? console.log("lebih dari 5x bro human2")
    : console.log("jatah masih ada bro human2");
};

const mahasiswa = [
  {
    nama: "femas arianda",
    alamat: "gabus",
    usia: 19,
    semester: 3,
  },
  {
    nama: "femas rizki",
    alamat: "pati",
    usia: 19.9,
    semester: 5,
  },
];

function getDetailData() {
  // mahasiswa.map(function (result, i) {
  //   console.table(result);
  // });
  // mahasiswa.forEach((result) => {
  //   console.log(result);
  // });
}

class Hewan {
  warna;
  keahlian;
  constructor(nama) {
    this.nama = nama;
  }

  set newColor(color) {
    this.warna = color;
  }

  set newSkill(skill) {
    this.keahlian = skill;
  }

  get detail() {
    return `Hi saya ${this.nama}, saya bewarna ${this.warna} dan keahlian saya ${this.keahlian}`;
  }
}

const kucing = new Hewan("femas");
kucing.newColor = "orange";
kucing.newSkill = "mengaum";

console.log(kucing.detail);
