// Fungsi Manipulasi DOM untuk Memutakhirkan Data Secara Dinamis
function renderDashboard() {
    const colorMap = {
      blue: "var(--blue-600)",
      purple: "var(--purple-500)",
      green: "var(--green-600)",
      amber: "var(--amber-500)",
    };
  
    const statsContainer = document.getElementById("statsContainer");
    if (statsContainer) {
      statsContainer.innerHTML = dashboardData.stats.map(s => `
        <div class="stat-card">
          <span class="stat-icon" style="background:${colorMap[s.color] || "var(--primary-color)"}">${s.icon}</span>
          <div>
            <div class="stat-value">${s.value}</div>
            <div class="stat-label">${s.title}</div>
            ${s.trend ? `<div class="stat-trend">▲ ${s.trend}</div>` : ""}
          </div>
        </div>
      `).join("");
    }
  
    const scheduleContainer = document.getElementById("scheduleContainer");
    if (scheduleContainer) {
      scheduleContainer.innerHTML = dashboardData.jadwal.map(j => `
        <div class="list-item">
          <span class="dot-status" style="background:${colorMap[j.status] || "var(--primary-color)"}"></span>
          <div class="list-main">
            <strong>${j.matkul}</strong>
            <small>${j.ruangan}</small>
          </div>
          <small class="list-time">${j.jam}</small>
        </div>
      `).join("");
    }
  
    const gradesContainer = document.getElementById("gradesContainer");
    if (gradesContainer) {
      gradesContainer.innerHTML = dashboardData.nilai.map(n => `
        <div class="list-item">
          <span>${n.matkul}</span>
          <span class="grade-badge">${n.nilai}</span>
        </div>
      `).join("");
    }
  
    const announcementsContainer = document.getElementById("announcementsContainer");
    if (announcementsContainer) {
      announcementsContainer.innerHTML = dashboardData.pengumuman.map(p => `
        <div class="list-item">
          ${p.urgent ? '<span class="urgent" aria-hidden="true"></span>' : ""}
          <span class="dot-status" style="background:${p.urgent ? "var(--red-500)" : "var(--blue-600)"}"></span>
          <div class="list-main">
            <strong>${p.judul}</strong>
            <small>${p.tanggal}</small>
          </div>
        </div>
      `).join("");
    }
  }