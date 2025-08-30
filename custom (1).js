
document.addEventListener("DOMContentLoaded", function () {
  // Welcome message on home page
  if (window.location.href.includes("/home")) {
    apex.message.showPageSuccess("👋 Welcome to your improved APEX dashboard!");
  }

  // Fade-in regions
  document.querySelectorAll(".t-Region").forEach(region => {
    region.classList.add("fade-in");
  });

  // Button hover glow
  document.querySelectorAll(".t-Button").forEach(button => {
    button.addEventListener("mouseenter", () => {
      button.style.boxShadow = "0 0 12px rgba(25, 118, 210, 0.4)";
    });
    button.addEventListener("mouseleave", () => {
      button.style.boxShadow = "none";
    });
  });

  // Hide loading spinner after load
  const overlay = document.getElementById("loadingOverlay");
  if (overlay) {
    overlay.style.transition = "opacity 0.5s ease";
    overlay.style.opacity = 0;
    setTimeout(() => overlay.style.display = "none", 500);
  }
});
