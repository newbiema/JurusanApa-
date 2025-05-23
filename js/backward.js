// Daftar aturan jurusan dan kondisi yang harus dipenuhi untuk jurusan tersebut
const rules = [
  {
    jurusan: "Teknik Informatika",
    conditions: ["suka komputer", "logika bagus", "suka ngoding"]
  },
  {
    jurusan: "Akuntansi",
    conditions: ["suka hitung", "rapi", "suka ekonomi"]
  },
  {
    jurusan: "Desain Komunikasi Visual",
    conditions: ["kreatif", "suka gambar", "suka warna"]
  },
  {
    jurusan: "Kedokteran",
    conditions: ["suka biologi", "empati tinggi", "suka membantu orang"]
  },
  {
    jurusan: "Hukum",
    conditions: ["suka debat", "percaya diri", "suka membaca"]
  },
  {
    jurusan: "Psikologi",
    conditions: ["empati tinggi", "suka mendengar", "suka memahami orang lain"]
  }
];

let selectedJurusan;       // Jurusan yang dipilih user
let kondisiDiperlukan = []; // Daftar kondisi yang harus dicek untuk jurusan terpilih
let jawabanPengguna = [];  // Kondisi yang dijawab "Ya" oleh pengguna

// Fungsi backward chaining untuk memeriksa apakah semua kondisi terpenuhi oleh jawaban user
function backwardChaining(jurusan, userAnswers) {
  // Cari aturan jurusan yang sesuai
  const rule = rules.find(r => r.jurusan === jurusan);
  if (!rule) return false; // Jika jurusan tidak ada, langsung return false

  // Cek apakah semua kondisi jurusan ada dalam jawaban user
  return rule.conditions.every(cond => userAnswers.includes(cond));
}

// Fungsi ini dipanggil saat user memilih jurusan dan ingin memulai cek
function checkJurusan() {
  // Ambil jurusan yang dipilih dari dropdown/select
  selectedJurusan = document.getElementById("jurusanSelect").value;

  // Cari aturan jurusan yang sesuai
  const rule = rules.find(r => r.jurusan === selectedJurusan);
  if (!rule) {
    alert("Jurusan tidak ditemukan.");
    return;
  }

  // Simpan kondisi yang harus dicek berdasarkan jurusan
  kondisiDiperlukan = rule.conditions;
  jawabanPengguna = []; // Reset jawaban pengguna sebelum mulai

  // Mulai tampilkan pertanyaan dari index pertama (0)
  tampilkanPertanyaan(0);
}

// Fungsi untuk menampilkan pertanyaan kondisi ke user satu per satu berdasarkan index
function tampilkanPertanyaan(index) {
  const container = document.getElementById("pertanyaan");

  // Jika sudah melewati semua kondisi yang perlu dicek
  if (index >= kondisiDiperlukan.length) {
    // Jalankan backward chaining untuk cek apakah user cocok di jurusan ini
    const hasil = backwardChaining(selectedJurusan, jawabanPengguna);

    // Tampilkan hasilnya ke user, cocok atau tidak cocok
    container.innerHTML = hasil
      ? `<p class='text-green-600 font-bold text-xl animate-bounce'><i class="fas fa-check-circle text-2xl mr-2"></i> Kamu <span class="underline">cocok</span> di jurusan <span class="underline">${selectedJurusan}</span>!</p>`
      : `<p class='text-red-600 font-bold text-xl animate-pulse'><i class="fas fa-times-circle text-2xl mr-2"></i> Kamu <span class="underline">belum cocok</span> untuk <span class="underline">${selectedJurusan}</span>.</p>`;
    return;
  }

  // Ambil kondisi yang akan ditanya saat ini berdasarkan index
  const kondisi = kondisiDiperlukan[index];

  // Tampilkan pertanyaan dengan 2 tombol jawaban: Ya dan Tidak
  container.innerHTML = `
    <div class="mb-4">
      <p class="text-lg font-medium"><i class="fas fa-question-circle text-blue-500 mr-2"></i>Apakah kamu <span class="text-blue-600 font-semibold">${kondisi}</span>?</p>
    </div>
    <div class="flex justify-center gap-6 mt-4">
      <button onclick="jawab(true, ${index})" class="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full font-semibold shadow transition duration-300 transform hover:scale-105">
        <i class="fas fa-thumbs-up mr-2"></i>Ya
      </button>
      <button onclick="jawab(false, ${index})" class="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full font-semibold shadow transition duration-300 transform hover:scale-105">
        <i class="fas fa-thumbs-down mr-2"></i>Tidak
      </button>
    </div>
  `;
}

// Fungsi yang dijalankan saat user klik "Ya" atau "Tidak" pada pertanyaan
function jawab(ya, index) {
  // Jika user jawab "Ya", simpan kondisi yang dijawab "Ya"
  if (ya) {
    jawabanPengguna.push(kondisiDiperlukan[index]);
  }
  // Tampilkan pertanyaan berikutnya (index + 1)
  tampilkanPertanyaan(index + 1);
}
