// Navigasi Mobile tanpa Framework
function initNavigation() {
    const menuToggle = document.getElementById("menuToggle");
    const closeSidebar = document.getElementById("closeSidebar");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");
  
    if (!menuToggle || !sidebar || !overlay) return;
  
    const openMenu = () => {
      sidebar.classList.add("open");
      overlay.classList.add("active");
      menuToggle.setAttribute("aria-expanded", "true");
    };
  
    const closeMenu = () => {
      sidebar.classList.remove("open");
      overlay.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    };
  
    menuToggle.addEventListener("click", openMenu);
    closeSidebar.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
  
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && sidebar.classList.contains("open")) closeMenu();
    });
  }