// js/app.js
import { initMap, plotMarkers, zoomToLocation } from "./map.js";
import { LOCATIONS, CATEGORIES } from "./data.js";

// ===== DOM =====
const listEl = document.getElementById("locationList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const favoritesBtn = document.getElementById("favoritesBtn");

const drawer = document.getElementById("detailDrawer");
const drawerContent = document.getElementById("drawerContent");
const closeDrawer = document.getElementById("closeDrawer");

// ===== STATE =====
let activeLocationId = null;
let showFavoritesOnly = false;
let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

// ===== INIT =====
init();

function init() {
  initMap();           // create map
  populateCategories();
  renderList();        // now markers can plot
  attachEvents();
}

// ===== CATEGORY DROPDOWN =====
function populateCategories() {
  CATEGORIES.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat.id;
    option.textContent = cat.label;
    categoryFilter.appendChild(option);
  });
}

// ===== RENDER LIST =====
function renderList() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  let filtered = LOCATIONS.filter(loc => {
    const matchesSearch = loc.name.toLowerCase().includes(searchTerm);
    const matchesCategory =
      selectedCategory === "all" || loc.category === selectedCategory;
    const matchesFav = !showFavoritesOnly || favorites.includes(loc.id);

    return matchesSearch && matchesCategory && matchesFav;
  });

  listEl.innerHTML = "";

  if (filtered.length === 0) {
    listEl.innerHTML = `<p>No locations found.</p>`;
    return;
  }

  filtered.forEach(loc => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${loc.name}</h3>
      <p>${loc.short}</p>
      <button data-id="${loc.id}" class="fav-btn">
        ${favorites.includes(loc.id) ? "★" : "☆"}
      </button>
    `;

    if (loc.id === activeLocationId) {
      card.classList.add("active");
    }

    // card click
    card.addEventListener("click", (e) => {
      if (e.target.classList.contains("fav-btn")) return;
      openDrawer(loc);
    });

    // favorite click
    card.querySelector(".fav-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(loc.id);
    });

    listEl.appendChild(card);
  });


  plotMarkers(filtered);
}

// ===== DRAWER =====
function openDrawer(loc) {
  activeLocationId = loc.id;
  zoomToLocation(loc);
  drawer.classList.add("open");

  drawerContent.innerHTML = `
    <div class="drawer-hero">
      <img src="${loc.image || 'assets/placeholder.jpg'}" alt="${loc.name}" />
    </div>

    <div class="drawer-body">
      <div class="drawer-header">
        <h2>${loc.name}</h2>
        <span class="badge">${loc.category}</span>
      </div>

      <p class="drawer-desc">${loc.short}</p>

      <div class="section">
        <h4>Highlights</h4>
        <ul>
          ${loc.highlights.map(h => `<li>${h}</li>`).join("")}
        </ul>
      </div>

      ${
        loc.subLocations.length
          ? `
        <div class="section">
          <h4>Inside this building</h4>
          <ul>
            ${loc.subLocations.map(s => `<li>${s.name}</li>`).join("")}
          </ul>
        </div>
      `
          : ""
      }
    </div>
  `;

  const activeCard = document.querySelector(".card.active");
  activeCard?.scrollIntoView({ behavior: "smooth", block: "center" });
}

closeDrawer.addEventListener("click", () => {
  drawer.classList.remove("open");
});

// ===== FAVORITES =====
function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(f => f !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderList();
}

// ===== EVENTS =====
function attachEvents() {
  searchInput.addEventListener("input", renderList);
  categoryFilter.addEventListener("change", renderList);

  favoritesBtn.addEventListener("click", () => {
    showFavoritesOnly = !showFavoritesOnly;
    favoritesBtn.textContent = showFavoritesOnly ? "⭐ All" : "⭐ Favorites";
    renderList();
  });
}

// marker -> open drawer
window.addEventListener("markerClick", (e) => {
  openDrawer(e.detail);
});