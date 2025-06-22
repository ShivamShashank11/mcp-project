# 📁 MCP File Manager

Hey there! 👋  
This is a simple MCP (Minimal Control Panel) File Manager project where you can **create**, **edit**, **delete**, and **view files** on the server — right from a smooth, modern frontend UI.

---

## ✅ What it can do?

- ➕ Create new files with your own content
- ✏️ Edit files that you already have
- 🗑️ Delete files you don’t need anymore
- 📃 See a list of all files along with their contents on the screen
- 🌙 Modern, dark-themed, and clean interface that works well on any screen size

---

## 🛠 What’s inside?

- **Backend**: Node.js and Express.js
- **Frontend**: HTML, CSS, and Vanilla JavaScript
- **Communication**: REST API calls using `fetch()`

---

## ⚙️ What do you need to run this?

- ✅ [Node.js](https://nodejs.org/) installed on your machine
- ✅ Basic knowledge of terminal/command line

---

## 🚀 How to get started?

### 📦 Backend Setup

1. Open terminal and go to the backend folder (or root folder if not separated):
   ```bash
   cd backend
   Install required packages:
   ```

npm install
Start the server:

For auto-reload on changes (recommended for dev):

npm run dev
Or just run normally:

node index.js
Backend will be available at:

http://localhost:5000
🌐 Frontend Setup
Go to the frontend folder if applicable

Open the index.html file in any browser

⚠️ Make sure your backend server is running, or the frontend won’t work!

🧑‍💻 How to use it?
➕ Click Create File to make a new file and add content

✏️ Click Edit File to change the content of an existing file

🗑️ Click Delete File to remove a file

🔄 Click Refresh List to see the latest files and content

                     📡 API Endpoints

Method Endpoint Description
POST /create Creates a new file
PUT /edit Edits an existing file
DELETE /delete Deletes a file
GET /files Gets list of all files

📄 License
This project is free to use under the MIT License.

✍️ Author
Made with ❤️ by Shivam Shashank
📧 Email: shivamshashank961@gmail.com
