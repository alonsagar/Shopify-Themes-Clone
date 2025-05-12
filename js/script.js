// script.js

document.addEventListener("DOMContentLoaded", () => {
  // ========== Product Gallery ========== //
  const mainImages = [
    "product1.jpg",
    "product2.jpg",
    "product3.jpg",
    "product4.jpg",
    "product5.jpg",
  ];

  const thumbnailContainer = document.getElementById("thumbnailContainer");
  const mainImage = document.getElementById("mainProductImage");

  mainImages.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = `assets/images/${src}`;
    img.alt = `Thumbnail ${index + 1}`;
    img.classList.add("thumbnail");
    if (index === 0) img.classList.add("selected");
    img.addEventListener("click", () => {
      document.querySelectorAll(".thumbnails img").forEach(i => i.classList.remove("selected"));
      img.classList.add("selected");
      mainImage.src = `assets/images/${src}`;
    });
    thumbnailContainer.appendChild(img);
  });

  // ========== Modal Controls ========== //
  const modalOverlay = document.getElementById("modalOverlay");
  const sizeChartModal = document.getElementById("sizeChartModal");
  const compareColorsModal = document.getElementById("compareColorsModal");

  const openModal = modal => {
    modalOverlay.classList.remove("hidden");
    modal.classList.remove("hidden");
  };

  const closeModal = () => {
    modalOverlay.classList.add("hidden");
    document.querySelectorAll(".modal").forEach(m => m.classList.add("hidden"));
  };

  document.getElementById("sizeChartBtn").addEventListener("click", () => openModal(sizeChartModal));
  document.getElementById("compareColorsBtn").addEventListener("click", () => {
    openModal(compareColorsModal);
    const selectedSwatches = document.querySelectorAll(".swatch.selected");
    const compareContainer = document.getElementById("compareSwatches");
    compareContainer.innerHTML = "";
    selectedSwatches.forEach(swatch => {
      const clone = swatch.cloneNode(true);
      compareContainer.appendChild(clone);
    });
  });

  document.querySelectorAll(".close-modal").forEach(btn => btn.addEventListener("click", closeModal));
  modalOverlay.addEventListener("click", closeModal);
  document.addEventListener("keydown", e => e.key === "Escape" && closeModal());

  // ========== Color Swatches ========== //
  const colors = ["red", "blue", "green", "black"];
  const colorOptions = document.getElementById("colorOptions");

  colors.forEach(color => {
    const swatch = document.createElement("div");
    swatch.className = "swatch";
    swatch.style.backgroundColor = color;
    swatch.title = color;

    swatch.addEventListener("click", () => {
      document.querySelectorAll(".swatch").forEach(s => s.classList.remove("selected"));
      swatch.classList.add("selected");
      localStorage.setItem("selectedColor", color);
    });

    colorOptions.appendChild(swatch);
  });

  const savedColor = localStorage.getItem("selectedColor");
  if (savedColor) {
    const match = Array.from(document.querySelectorAll(".swatch")).find(s => s.title === savedColor);
    if (match) match.classList.add("selected");
  }

  // ========== Tabs Toggle ========== //
  const tabButtons = document.querySelectorAll(".tab-buttons button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      tabButtons.forEach(btn => btn.classList.remove("active"));
      tabContents.forEach(tab => tab.classList.remove("active"));
      button.classList.add("active");
      document.getElementById(button.dataset.tab).classList.add("active");
    });
  });

  // ========== Zoom on Hover ========== //
  const zoomImage = document.getElementById("mainProductImage");
  zoomImage.addEventListener("mouseenter", () => zoomImage.classList.add("zoom"));
  zoomImage.addEventListener("mouseleave", () => zoomImage.classList.remove("zoom"));
});

  // ========== Add to Cart Control ======== //
document.querySelectorAll(".btn1").forEach(button => {
  button.addEventListener("click", () => {
    alert("Item added to Cart!");
  });
});

document.querySelector(".btn2").addEventListener("click", () => {
  alert("Bundle added to Cart!");
});

