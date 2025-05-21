const params = new URLSearchParams(window.location.search);
const minat = params.get("minat");
const kepribadian = params.get("kepribadian");
const gayaBelajar = params.get("gaya_belajar");
const nilaiUnggulan = params.get("nilai_unggulan");

const rules = [

  // 1
  {
    kondisi:
      minat === "teknologi" &&
      kepribadian === "introvert" &&
      gayaBelajar === "praktik" &&
      nilaiUnggulan === "matematika",
    rekomendasi: "Teknik Informatika",
    deskripsi: "Cocok untuk kamu yang suka logika, coding, dan kerja mandiri.",
  },
  // 2
  {
    kondisi:
      minat === "teknologi" &&
      kepribadian === "ekstrovert" &&
      gayaBelajar === "kolaboratif" &&
      nilaiUnggulan === "matematika",
    rekomendasi: "Sistem Informasi",
    deskripsi: "Bagus untuk kamu yang suka teknologi dan kerja tim.",
  },
  // 3
  {
    kondisi:
      minat === "seni" &&
      kepribadian === "ekstrovert" &&
      gayaBelajar === "praktik" &&
      nilaiUnggulan === "seni",
    rekomendasi: "Desain Komunikasi Visual (DKV)",
    deskripsi: "Cocok untuk kamu yang kreatif dan ekspresif dalam visual.",
  },
  // 4
  {
    kondisi:
      minat === "seni" &&
      kepribadian === "introvert" &&
      gayaBelajar === "teori" &&
      nilaiUnggulan === "bahasa",
    rekomendasi: "Sastra",
    deskripsi: "Pas untuk kamu yang suka membaca dan menulis kreatif.",
  },
  // 5
  {
    kondisi:
      minat === "bisnis" &&
      kepribadian === "ekstrovert" &&
      gayaBelajar === "teori" &&
      nilaiUnggulan === "bahasa",
    rekomendasi: "Manajemen Bisnis",
    deskripsi: "Pas untuk kamu yang pandai komunikasi dan strategi pasar.",
  },
  // 6
  {
    kondisi:
      minat === "bisnis" &&
      kepribadian === "introvert" &&
      gayaBelajar === "praktik" &&
      nilaiUnggulan === "matematika",
    rekomendasi: "Akuntansi",
    deskripsi: "Sesuai untuk kamu yang teliti dan suka angka.",
  },
  // 7
  {
    kondisi:
      minat === "kesehatan" &&
      kepribadian === "introvert" &&
      gayaBelajar === "teori" &&
      nilaiUnggulan === "biologi",
    rekomendasi: "Kedokteran",
    deskripsi: "Untuk kamu yang teliti, tekun, dan suka ilmu kehidupan.",
  },
  // 8
  {
    kondisi:
      minat === "kesehatan" &&
      kepribadian === "ekstrovert" &&
      gayaBelajar === "praktik" &&
      nilaiUnggulan === "biologi",
    rekomendasi: "Keperawatan",
    deskripsi: "Cocok untuk kamu yang peduli dan suka membantu orang.",
  },
  // 9
  {
    kondisi:
      minat === "sosial" &&
      kepribadian === "ekstrovert" &&
      gayaBelajar === "teori" &&
      nilaiUnggulan === "bahasa",
    rekomendasi: "Ilmu Komunikasi",
    deskripsi: "Cocok buat kamu yang suka ngobrol, menulis, dan berorganisasi.",
  },
  // 10
  {
    kondisi:
      minat === "sosial" &&
      kepribadian === "introvert" &&
      gayaBelajar === "teori" &&
      nilaiUnggulan === "bahasa",
    rekomendasi: "Psikologi",
    deskripsi: "Bagus untuk kamu yang suka memahami perilaku manusia.",
  },
  // 11
  {
    kondisi:
      minat === "teknologi" &&
      kepribadian === "introvert" &&
      gayaBelajar === "teori" &&
      nilaiUnggulan === "matematika",
    rekomendasi: "Matematika Terapan",
    deskripsi: "Pas untuk kamu yang suka matematika dan pemecahan masalah.",
  },
  // 12
  {
    kondisi:
      minat === "seni" &&
      kepribadian === "ekstrovert" &&
      gayaBelajar === "kolaboratif" &&
      nilaiUnggulan === "seni",
    rekomendasi: "Teater / Seni Pertunjukan",
    deskripsi: "Cocok untuk kamu yang suka tampil dan ekspresif.",
  },
  // 13
  {
    kondisi:
      minat === "bisnis" &&
      kepribadian === "ekstrovert" &&
      gayaBelajar === "kolaboratif" &&
      nilaiUnggulan === "bahasa",
    rekomendasi: "Marketing",
    deskripsi: "Bagus untuk kamu yang suka berkomunikasi dan mempengaruhi orang.",
  },
  // 14
  {
    kondisi:
      minat === "kesehatan" &&
      kepribadian === "introvert" &&
      gayaBelajar === "praktik" &&
      nilaiUnggulan === "biologi",
    rekomendasi: "Farmasi",
    deskripsi: "Pas untuk kamu yang suka sains dan kimia.",
  },
  // 15
  {
    kondisi:
      minat === "sosial" &&
      kepribadian === "ekstrovert" &&
      gayaBelajar === "praktik" &&
      nilaiUnggulan === "bahasa",
    rekomendasi: "Hubungan Internasional",
    deskripsi: "Untuk kamu yang suka bergaul dan memahami budaya lain.",
  }
];


const hasil = rules.find(rule => rule.kondisi);

if (hasil) {
  document.getElementById("rekomendasi").textContent = hasil.rekomendasi;
  document.getElementById("deskripsi").textContent = hasil.deskripsi;
} else {
  document.getElementById("rekomendasi").textContent = "Jurusan belum ditemukan.";
  document.getElementById("deskripsi").textContent = "Silakan coba dengan pilihan minat dan kepribadian lainnya.";
}
