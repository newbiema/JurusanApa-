// Ambil parameter dari URL, jika tidak ada maka gunakan default
    const params = new URLSearchParams(window.location.search);
    const nama = params.get("nama") || "Teman";
    const minat = params.get("minat");
    const kepribadian = params.get("kepribadian");
    const gayaBelajar = params.get("gaya_belajar");
    const nilaiUnggulan = params.get("nilai_unggulan");

    // Tampilkan nama pengguna di elemen dengan id "nama"
    document.getElementById("nama").textContent = nama;

   // Daftar aturan untuk rekomendasi jurusan berdasarkan kombinasi kondisi
    const rules = [
      {
        kondisi: minat === "teknologi" && kepribadian === "analitis" && gayaBelajar === "praktik" && nilaiUnggulan === "matematika",
        rekomendasi: "Teknik Informatika",
        deskripsi: "Cocok untuk kamu yang suka logika, coding, dan analisis mendalam.",
      },
      {
        kondisi: minat === "teknologi" && kepribadian === "sosial" && gayaBelajar === "kolaboratif" && nilaiUnggulan === "matematika",
        rekomendasi: "Sistem Informasi",
        deskripsi: "Bagus untuk kamu yang suka teknologi dan kerja tim.",
      },
      {
        kondisi: minat === "seni" && kepribadian === "kreatif" && gayaBelajar === "praktik" && nilaiUnggulan === "seni",
        rekomendasi: "Desain Komunikasi Visual (DKV)",
        deskripsi: "Cocok untuk kamu yang kreatif dan ekspresif dalam visual.",
      },
      {
        kondisi: minat === "seni" && kepribadian === "analitis" && gayaBelajar === "teori" && nilaiUnggulan === "bahasa",
        rekomendasi: "Sastra",
        deskripsi: "Pas untuk kamu yang suka membaca dan menulis kreatif.",
      },
      {
        kondisi: minat === "bisnis" && kepribadian === "sosial" && gayaBelajar === "teori" && nilaiUnggulan === "bahasa",
        rekomendasi: "Manajemen Bisnis",
        deskripsi: "Pas untuk kamu yang pandai komunikasi dan strategi pasar.",
      },
      {
        kondisi: minat === "bisnis" && kepribadian === "analitis" && gayaBelajar === "praktik" && nilaiUnggulan === "matematika",
        rekomendasi: "Akuntansi",
        deskripsi: "Sesuai untuk kamu yang teliti dan suka angka.",
      },
      {
        kondisi: minat === "kesehatan" && kepribadian === "analitis" && gayaBelajar === "teori" && nilaiUnggulan === "biologi",
        rekomendasi: "Kedokteran",
        deskripsi: "Untuk kamu yang teliti, tekun, dan suka ilmu kehidupan.",
      },
      {
        kondisi: minat === "kesehatan" && kepribadian === "sosial" && gayaBelajar === "praktik" && nilaiUnggulan === "biologi",
        rekomendasi: "Keperawatan",
        deskripsi: "Cocok untuk kamu yang peduli dan suka membantu orang.",
      },
      {
        kondisi: minat === "sosial" && kepribadian === "sosial" && gayaBelajar === "teori" && nilaiUnggulan === "bahasa",
        rekomendasi: "Ilmu Komunikasi",
        deskripsi: "Cocok buat kamu yang suka ngobrol, menulis, dan berorganisasi.",
      },
      {
        kondisi: minat === "sosial" && kepribadian === "analitis" && gayaBelajar === "teori" && nilaiUnggulan === "bahasa",
        rekomendasi: "Psikologi",
        deskripsi: "Bagus untuk kamu yang suka memahami perilaku manusia.",
      },
      {
        kondisi: minat === "teknologi" && kepribadian === "analitis" && gayaBelajar === "teori" && nilaiUnggulan === "matematika",
        rekomendasi: "Matematika Terapan",
        deskripsi: "Pas untuk kamu yang suka matematika dan pemecahan masalah.",
      },
      {
        kondisi: minat === "seni" && kepribadian === "kreatif" && gayaBelajar === "kolaboratif" && nilaiUnggulan === "seni",
        rekomendasi: "Teater / Seni Pertunjukan",
        deskripsi: "Cocok untuk kamu yang suka tampil dan ekspresif.",
      },
      {
        kondisi: minat === "bisnis" && kepribadian === "sosial" && gayaBelajar === "kolaboratif" && nilaiUnggulan === "bahasa",
        rekomendasi: "Marketing",
        deskripsi: "Bagus untuk kamu yang suka berkomunikasi dan mempengaruhi orang.",
      },
      {
        kondisi: minat === "kesehatan" && kepribadian === "analitis" && gayaBelajar === "praktik" && nilaiUnggulan === "biologi",
        rekomendasi: "Farmasi",
        deskripsi: "Pas untuk kamu yang suka sains dan kimia.",
      },
      {
        kondisi: minat === "sosial" && kepribadian === "sosial" && gayaBelajar === "praktik" && nilaiUnggulan === "bahasa",
        rekomendasi: "Hubungan Internasional",
        deskripsi: "Untuk kamu yang suka bergaul dan memahami budaya lain.",
      }
    ];

// Cari aturan yang sesuai dengan kondisi pengguna
    const hasil = rules.find(rule => rule.kondisi);

    // Jika ditemukan aturan yang cocok, tampilkan rekomendasi dan deskripsi  
    if (hasil) {
      document.getElementById("rekomendasi").textContent = hasil.rekomendasi;
      document.getElementById("deskripsi").textContent = hasil.deskripsi;
    } else {
    // Fallback berdasarkan minat utama jika tidak ada kecocokan aturan spesifik
    const byMinat = rules.find(rule => rule.rekomendasi.toLowerCase().includes(minat));
    if (byMinat) {
      document.getElementById("rekomendasi").textContent = byMinat.rekomendasi;
      document.getElementById("deskripsi").textContent = "(Rekomendasi berdasarkan minat utama kamu) " + byMinat.deskripsi;
    } else {
      document.getElementById("rekomendasi").textContent = "Rekomendasi belum tersedia";
      document.getElementById("deskripsi").textContent = "Mohon coba lagi dengan kombinasi minat dan kepribadian yang berbeda, atau konsultasikan langsung dengan Guru BK untuk hasil yang lebih tepat.";
    }
  }

  