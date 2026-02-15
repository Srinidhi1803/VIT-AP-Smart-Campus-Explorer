# 🎓 VIT-AP Smart Campus Explorer

An interactive web application that helps students, visitors, and faculty explore important locations inside VIT-AP University.

This project provides searchable campus places, category filters, map visualization, and detailed information panels.

---

## 🚀 Features

- 🔍 Search locations by name  
- 🗂 Filter by categories (Academic, Residential, Facilities)  
- ⭐ Save favorite places (stored in browser)  
- 🗺 Interactive map with markers  
- 📌 Click marker or card → view details  
- 🖼 Location image preview  
- 📖 Highlights & sub-locations  
- 🎨 Clean modern UI  

---

## 🧠 What I Learned

Through this project I practiced:

- Structuring a frontend application  
- Managing UI state  
- Modular JavaScript design  
- Map integration using Leaflet  
- DOM rendering  
- Event-driven communication  
- LocalStorage usage  
- UI/UX improvements  
- Debugging real integration issues  

---

## 🏗 Project Structure

```
campus-explorer/
│
├── assets/        → images & logo
├── css/
│   └── styles.css
├── js/
│   ├── app.js     → UI & interactions
│   ├── data.js    → campus data
│   └── map.js     → Leaflet map logic
│
└── index.html
```

---

## 🗺 Map Technology

This application uses **Leaflet.js** with OpenStreetMap tiles for rendering the campus map and markers.

No paid APIs are required.

---

## 💡 How It Works

1. Location data is stored in `data.js`.
2. `app.js` renders the sidebar list.
3. `map.js` initializes the map.
4. Selecting a card or marker opens the detail drawer.
5. Favorites are stored in the browser using LocalStorage.

---

## 📷 Screens

- Sidebar list  
- Live map  
- Detail drawer  
- Favorites mode  

---

## 🎯 Future Enhancements

If developed further, the system can support:

- Navigation between locations  
- Distance calculation  
- Timings & availability  
- Faculty room mapping  
- Accessibility routes  
- Admin updates  
- Mobile optimization  

---

## 🧑‍💻 Author

Student of VIT-AP University  
Web Technologies Assignment

---

## ⚠ Disclaimer

This is an academic prototype built for learning purposes and may not reflect official university data.