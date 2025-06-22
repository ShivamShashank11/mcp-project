MCP File Manager
Hey there! 👋

This is a simple MCP (Minimal Control Panel) File Manager project where you can create, edit, delete, and see files on the server right from a nice frontend UI.

What it can do?
Create new files with your own content

Edit files that you already have

Delete files you don’t need anymore

See a list of all files along with their contents on the screen

Modern, dark-themed, and clean interface that works well on any screen size

What’s inside?
Backend built with Node.js and Express.js

Frontend made with plain HTML, CSS, and JavaScript

Communication between frontend and backend happens via REST API calls using fetch()

What do you need to run this?
Node.js installed on your machine

Basic knowledge of running commands on your terminal or command prompt

How to get started?
Backend setup
Open your terminal and go to the backend folder if you have one, or just the project folder:

cd backend

Install the required packages:

npm install

Start the backend server:

If you want auto reload on code changes (recommended for dev):

npm run dev

Or just start normally:

node index.js

The backend server will start running at:
http://localhost:5000

Frontend setup
Simply open the index.html file in your favorite browser.

Make sure your backend server is running so frontend can talk to it.

How to use it?
Click Create File to make a new file and add content

Click Edit File to change the content of an existing file

Click Delete File to remove a file you don’t want

Click Refresh List anytime to see the updated files and their contents on screen

API Endpoints (if you want to know)
Method Endpoint What it does
POST /create Creates a new file
PUT /edit Edits an existing file
DELETE /delete Deletes a file
GET /files Gets list of all files

License
This project is free to use under the MIT License.

Made with ❤️ by [Shivam Shashank]
Contact: shivamshashank961@gmail.com
