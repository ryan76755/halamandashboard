// Data Dashboard Dinamis
const dashboardData = {
    stats: [
      { title: "IPK", value: "3.72", icon: "📈", color: "blue", trend: "+0.08 dari smt lalu" },
      { title: "SKS Ditempuh", value: "96", icon: "📖", color: "purple", trend: "24 SKS semester ini" },
      { title: "Mata Kuliah", value: "8", icon: "🏛️", color: "green", trend: "Semester ganjil" },
      { title: "Prestasi", value: "3", icon: "🏆", color: "amber", trend: "Tingkat nasional" }
    ],
    jadwal: [
      { jam: "08:00 - 09:40", matkul: "Pemrograman Web", ruangan: "A101 - Lab 1", status: "blue" },
      { jam: "10:00 - 11:40", matkul: "Kecerdasan Buatan", ruangan: "B202 - R. Kuliah", status: "green" },
      { jam: "13:00 - 14:40", matkul: "Basis Data", ruangan: "C301 - R. Kuliah", status: "amber" }
    ],
    nilai: [
      { matkul: "Pemrograman Web", nilai: "A" },
      { matkul: "Basis Data", nilai: "A-" },
      { matkul: "Sistem Operasi", nilai: "B+" },
      { matkul: "Jaringan Komputer", nilai: "A" }
    ],
    pengumuman: [
      { tanggal: "1-20 Sep 2026", judul: "Registrasi KRS Semester Ganjil", urgent: true },
      { tanggal: "12 Sep 2026", judul: "Seminar Nasional Informatika", urgent: false },
      { tanggal: "10 Sep 2026", judul: "Beasiswa Prestasi Akademik", urgent: false }
    ]
  };