# 🎓 VIT-AP Smart Campus Explorer

An interactive campus navigation and information web application built as part of a Web Technologies assignment.

The system helps students, visitors, and faculty quickly discover important locations, view them on a live map, and access contextual details.

---

## 🌐 Live Concept

Users can:

- Search campus locations  
- Filter by category  
- View places on an interactive map  
- Open detailed information in a side drawer  
- Save favorite locations  
- Open any place directly in Google Maps  

---

## ✨ Key Features

### 🔍 Smart Search
Instant filtering by typing the building or place name.

### 🗂 Category Filters
Browse Academic, Residential, and Facility locations.

### 🗺 Map Integration
Markers plotted using Leaflet + OpenStreetMap.

### 📌 Bidirectional Interaction
Click a card → map zooms.  
Click a marker → details open.

### ⭐ Favorites
Saved in browser LocalStorage.

### 🖼 Visual Detail Drawer
Includes image, description, and highlights.

### 🧭 Google Maps Integration
One-click navigation externally.

---

## 🧠 Learning Outcomes

This project helped practice:

- Modular frontend architecture  
- Separation of concerns  
- Dynamic DOM rendering  
- State management  
- Event-driven UI  
- External map libraries  
- Persistent browser storage  
- Debugging integration problems  
- UI/UX refinement  

---

## 🏗 Technical Stack

- HTML5  
- CSS3  
- Vanilla JavaScript (ES Modules)  
- Leaflet.js  
- OpenStreetMap  

No backend services are used.

---

## 📁 Project Structure

```
campus-explorer/
│
├── assets/          # images, logos, placeholders
├── css/
│   └── styles.css
├── js/
│   ├── app.js       # UI logic & rendering
│   ├── data.js      # campus dataset
│   └── map.js       # map initialization & markers
│
└── index.html
```

---

## ⚙ How the Application Works

1. Locations are defined in `data.js`.
2. `app.js` builds the sidebar dynamically.
3. `map.js` renders the map and markers.
4. User actions dispatch events between modules.
5. Favorites are stored in LocalStorage.

---

## 🎯 Design Goals

- Simple and intuitive navigation  
- Minimal clicks to reach information  
- Clean academic interface  
- Extendable architecture for future features  

---

## 🚀 Possible Future Enhancements

- Turn-by-turn navigation  
- Distance calculation  
- Building floor mapping  
- Faculty cabin finder  
- Accessibility routes  
- Admin update panel  
- Progressive Web App (PWA)

---

## 🧑‍💻 Author

VIT-AP University  
Web Technologies Coursework

---

## ⚠ Disclaimer

This project is a prototype built for educational purposes and may not represent official university systems.