// Sample sustainability data for this website dashboard
var dashboardData = {
  totalSize: "428 KB",
  requests: "16",
  loadTime: "1.4 s",
  co2: "0.21 g",
  imageWeight: "210 KB",
  cssWeight: "48 KB",
  jsWeight: "32 KB",
  ecoScore: 86
};

// Add main metric values to the dashboard cards
document.getElementById("totalSize").textContent = dashboardData.totalSize;
document.getElementById("requests").textContent = dashboardData.requests;
document.getElementById("loadTime").textContent = dashboardData.loadTime;
document.getElementById("co2").textContent = dashboardData.co2;

// Add resource weight values
document.getElementById("imageWeight").textContent = dashboardData.imageWeight;
document.getElementById("cssWeight").textContent = dashboardData.cssWeight;
document.getElementById("jsWeight").textContent = dashboardData.jsWeight;

// Add eco score
document.getElementById("ecoScore").textContent = dashboardData.ecoScore;

// Show message based on eco score
if (dashboardData.ecoScore >= 80) {
  document.getElementById("scoreMessage").textContent =
    "Good score. This page is lightweight and efficient.";
} else if (dashboardData.ecoScore >= 50) {
  document.getElementById("scoreMessage").textContent =
    "Average score. Reduce large files and unused resources.";
} else {
  document.getElementById("scoreMessage").textContent =
    "Needs improvement. Optimize images, CSS, and JavaScript.";
}