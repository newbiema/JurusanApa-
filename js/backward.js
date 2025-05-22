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

    let selectedJurusan;
    let kondisiDiperlukan = [];
    let jawabanPengguna = [];

    function backwardChaining(jurusan, userAnswers) {
      const rule = rules.find(r => r.jurusan === jurusan);
      if (!rule) return false;
      return rule.conditions.every(cond => userAnswers.includes(cond));
    }

    function checkJurusan() {
      selectedJurusan = document.getElementById("jurusanSelect").value;
      const rule = rules.find(r => r.jurusan === selectedJurusan);
      if (!rule) {
        alert("Jurusan tidak ditemukan.");
        return;
      }
      kondisiDiperlukan = rule.conditions;
      jawabanPengguna = [];
      tampilkanPertanyaan(0);
    }

    function tampilkanPertanyaan(index) {
      const container = document.getElementById("pertanyaan");
      if (index >= kondisiDiperlukan.length) {
        const hasil = backwardChaining(selectedJurusan, jawabanPengguna);
        container.innerHTML = hasil
          ? `<p class='text-green-600 font-bold text-xl animate-bounce'><i class="fas fa-check-circle text-2xl mr-2"></i> Kamu <span class="underline">cocok</span> di jurusan <span class="underline">${selectedJurusan}</span>!</p>`
          : `<p class='text-red-600 font-bold text-xl animate-pulse'><i class="fas fa-times-circle text-2xl mr-2"></i> Kamu <span class="underline">belum cocok</span> untuk <span class="underline">${selectedJurusan}</span>.</p>`;
        return;
      }

      const kondisi = kondisiDiperlukan[index];
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

    function jawab(ya, index) {
      if (ya) {
        jawabanPengguna.push(kondisiDiperlukan[index]);
      }
      tampilkanPertanyaan(index + 1);
    }