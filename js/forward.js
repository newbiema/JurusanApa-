
    const params = new URLSearchParams(window.location.search);
    const nama = params.get("nama") || "Teman";
    const minat = params.get("minat");
    const kepribadian = params.get("kepribadian");
    const gayaBelajar = params.get("gaya_belajar");
    const nilaiUnggulan = params.get("nilai_unggulan");

    document.getElementById("nama").textContent = nama;

    const rules = [
      {
        kondisi: minat === "teknologi" && kepribadian === "introvert" && gayaBelajar === "praktik" && nilaiUnggulan === "matematika",
        rekomendasi: "Teknik Informatika",
        deskripsi: "Cocok untuk kamu yang suka logika, coding, dan kerja mandiri.",
      },
      {
        kondisi: minat === "teknologi" && kepribadian === "ekstrovert" && gayaBelajar === "kolaboratif" && nilaiUnggulan === "matematika",
        rekomendasi: "Sistem Informasi",
        deskripsi: "Bagus untuk kamu yang suka teknologi dan kerja tim.",
      },
      {
        kondisi: minat === "seni" && kepribadian === "ekstrovert" && gayaBelajar === "praktik" && nilaiUnggulan === "seni",
        rekomendasi: "Desain Komunikasi Visual (DKV)",
        deskripsi: "Cocok untuk kamu yang kreatif dan ekspresif dalam visual.",
      },
      {
        kondisi: minat === "seni" && kepribadian === "introvert" && gayaBelajar === "teori" && nilaiUnggulan === "bahasa",
        rekomendasi: "Sastra",
        deskripsi: "Pas untuk kamu yang suka membaca dan menulis kreatif.",
      },
      {
        kondisi: minat === "bisnis" && kepribadian === "ekstrovert" && gayaBelajar === "teori" && nilaiUnggulan === "bahasa",
        rekomendasi: "Manajemen Bisnis",
        deskripsi: "Pas untuk kamu yang pandai komunikasi dan strategi pasar.",
      },
      {
        kondisi: minat === "bisnis" && kepribadian === "introvert" && gayaBelajar === "praktik" && nilaiUnggulan === "matematika",
        rekomendasi: "Akuntansi",
        deskripsi: "Sesuai untuk kamu yang teliti dan suka angka.",
      },
      {
        kondisi: minat === "kesehatan" && kepribadian === "introvert" && gayaBelajar === "teori" && nilaiUnggulan === "biologi",
        rekomendasi: "Kedokteran",
        deskripsi: "Untuk kamu yang teliti, tekun, dan suka ilmu kehidupan.",
      },
      {
        kondisi: minat === "kesehatan" && kepribadian === "ekstrovert" && gayaBelajar === "praktik" && nilaiUnggulan === "biologi",
        rekomendasi: "Keperawatan",
        deskripsi: "Cocok untuk kamu yang peduli dan suka membantu orang.",
      },
      {
        kondisi: minat === "sosial" && kepribadian === "ekstrovert" && gayaBelajar === "teori" && nilaiUnggulan === "bahasa",
        rekomendasi: "Ilmu Komunikasi",
        deskripsi: "Cocok buat kamu yang suka ngobrol, menulis, dan berorganisasi.",
      },
      {
        kondisi: minat === "sosial" && kepribadian === "introvert" && gayaBelajar === "teori" && nilaiUnggulan === "bahasa",
        rekomendasi: "Psikologi",
        deskripsi: "Bagus untuk kamu yang suka memahami perilaku manusia.",
      },
      {
        kondisi: minat === "teknologi" && kepribadian === "introvert" && gayaBelajar === "teori" && nilaiUnggulan === "matematika",
        rekomendasi: "Matematika Terapan",
        deskripsi: "Pas untuk kamu yang suka matematika dan pemecahan masalah.",
      },
      {
        kondisi: minat === "seni" && kepribadian === "ekstrovert" && gayaBelajar === "kolaboratif" && nilaiUnggulan === "seni",
        rekomendasi: "Teater / Seni Pertunjukan",
        deskripsi: "Cocok untuk kamu yang suka tampil dan ekspresif.",
      },
      {
        kondisi: minat === "bisnis" && kepribadian === "ekstrovert" && gayaBelajar === "kolaboratif" && nilaiUnggulan === "bahasa",
        rekomendasi: "Marketing",
        deskripsi: "Bagus untuk kamu yang suka berkomunikasi dan mempengaruhi orang.",
      },
      {
        kondisi: minat === "kesehatan" && kepribadian === "introvert" && gayaBelajar === "praktik" && nilaiUnggulan === "biologi",
        rekomendasi: "Farmasi",
        deskripsi: "Pas untuk kamu yang suka sains dan kimia.",
      },
      {
        kondisi: minat === "sosial" && kepribadian === "ekstrovert" && gayaBelajar === "praktik" && nilaiUnggulan === "bahasa",
        rekomendasi: "Hubungan Internasional",
        deskripsi: "Untuk kamu yang suka bergaul dan memahami budaya lain.",
      }

      
    ];

    const hasil = rules.find(rule => rule.kondisi);

    if (hasil) {
      document.getElementById("rekomendasi").textContent = hasil.rekomendasi;
      document.getElementById("deskripsi").textContent = hasil.deskripsi;
    } else {
      // Fallback berdasarkan minat utama
      const fallback = rules.find(rule => rule.kondisi === undefined && rule.rekomendasi.toLowerCase().includes(minat));
      const byMinat = rules.find(rule => rule.rekomendasi.toLowerCase().includes(minat));
      if (byMinat) {
        document.getElementById("rekomendasi").textContent = byMinat.rekomendasi;
        document.getElementById("deskripsi").textContent = "(Rekomendasi berdasarkan minat utama) " + byMinat.deskripsi;
      } else {
        document.getElementById("rekomendasi").textContent = "Sebaiknya Konsultasi ke Guru BK kalian sendiri";
        document.getElementById("deskripsi").textContent = "Silakan coba dengan pilihan minat dan kepribadian lainnya.";
      }
    }
  