# 🔗 LeadTracker Chrome Extension

A powerful **Chrome Extension** that helps users save, manage, and track useful links (leads) efficiently. Save custom URLs or bookmark your current browser tab with just one click!

---

## 🚀 Features

* ➕ **Save custom input links** - Type any URL and save it
* 🌐 **Save current browser tab** - One-click to save your active tab
* 🗑️ **Delete all saved leads** - Double-click to clear everything
* 💾 **Persistent storage** - Data saved using Local Storage
* 🔗 **Clickable links** - Open saved links in new tab
* ⚡ **Fast and lightweight** - Minimal resource usage

---

## 🛠️ Tech Stack

* **HTML5** - Structure
* **CSS3** - Styling
* **JavaScript** - Functionality
* **Chrome Tabs API** - Browser tab access
* **Local Storage API** - Data persistence
* **Manifest V3** - Chrome Extension configuration

---

## 📂 Project Structure

```
📁 Chrome-Extension/
 ├ 📄 manifest.json      (Extension configuration)
 ├ 📄 index.html         (UI layout)
 ├ 📄 style.css          (Styling)
 ├ 📄 script.js          (Functionality)
 └ 📄 README.md          (This file)
```

---

## 📥 Installation Guide

### Step 1: Clone or Download the Repository
```bash
git clone https://github.com/ApelaBrazil29/Chrome-Extension.git
```

### Step 2: Open Chrome Extensions Page
1. Open Google Chrome
2. Go to `chrome://extensions/`
3. Enable **Developer mode** (toggle in the top right corner)

### Step 3: Load the Extension
1. Click **"Load unpacked"** button
2. Select the `Chrome-Extension` folder from your computer
3. The extension should appear in your extensions list

### Step 4: Start Using!
1. Click the extension icon in the toolbar
2. The LeadTracker popup will open
3. Start saving your leads!

---

## ⚙️ How to Use

1. **Save a Link Manually:**
   - Type a URL in the input field
   - Click **SAVE INPUT**
   - Link appears in the list

2. **Save Current Tab:**
   - Click **SAVE TAB**
   - Your current browser tab URL is saved instantly

3. **Open a Saved Link:**
   - Click any link in the list
   - Opens in a new tab

4. **Delete All Leads:**
   - **Double-click** the **DELETE ALL** button
   - All saved data is cleared

---

## 📋 Requirements

* **Google Chrome** (or Chrome-based browser)
* **Manifest V3 compatible** browser (Chrome 88+)

---

## 🎯 Features in Detail

### Auto-Protocol Addition
- If a URL doesn't start with `http://` or `https://`, the extension automatically adds `https://`
- Example: `google.com` → `https://google.com`

### Data Persistence
- All saved links are stored in browser's Local Storage
- Data persists even after closing the extension
- Clears only when you click "DELETE ALL"

---

## 🌟 Future Enhancements

- ✏️ Edit saved leads
- 📌 Pin important links
- 🌙 Dark mode UI
- 🔍 Search/filter functionality
- 📱 Better responsive design
- 🏷️ Categorize leads with tags

---

## ⚠️ Important Notes

- **Save Tab feature** works ONLY as a Chrome Extension
- Data is stored locally in your browser (not synced to cloud)
- Clearing browser data may delete saved leads
- The extension only has access to basic tab and storage permissions

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Fork the repository
- Create a feature branch
- Submit a pull request

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 👨‍💻 Author

**Umesh Thakare** - [@ApelaBrazil29](https://github.com/ApelaBrazil29)

---

## 🐛 Troubleshooting

**Issue:** Extension doesn't load
- ✅ Make sure `manifest.json` is in the root folder
- ✅ Enable Developer mode on `chrome://extensions/`
- ✅ Try removing and re-adding the extension

**Issue:** Save Tab button doesn't work
- ✅ Refresh the extension
- ✅ Check that you're using Chrome (not another browser)
- ✅ Verify `manifest.json` has `"permissions": ["tabs"]`

**Issue:** Links don't open
- ✅ Click directly on the link text
- ✅ Check that the URL format is correct
- ✅ Try opening in incognito mode

---

⭐ **If you find this useful, please give it a star!** ⭐