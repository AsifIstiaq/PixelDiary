#PixelDiary – AI-Powered Blogging Platform

PixelDiary is a modern, AI-enhanced blogging platform developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). It integrates Gemini API for AI-assisted features and ImageKit for optimized media handling, providing users with a smooth and intelligent blogging experience.

🚀 Features
✨ AI-generated blog assistance using Gemini API

🖼️ Image uploading and optimization via ImageKit

🗂️ Organized blog categories

🔍 Search and filter capabilities

✏️ Rich blog editor for seamless content creation

🧑‍💼 Admin access for blog management

💬 Commenting system for user engagement

🧰 Technologies Used
Frontend: React.js, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB

Cloud Storage & Optimization: ImageKit

AI Integration: Gemini API

⚙️ Setup Instructions

1. Clone the Repository
   bash
   Copy code
   git clone https://github.com/yourusername/pixeldiary.git
   cd pixeldiary
2. Install Dependencies
   Client
   bash
   Copy code
   cd client
   npm install
   Server
   bash
   Copy code
   cd ../server
   npm install
3. Configure Environment Variables
   For security purposes, you are required to create your own configuration values. In the server/.env file, include the following:

env
Copy code

a)JWT_SECRET =your_jwt_secret
b)ADMIN_EMAIL=your_admin_email@example.com
c)ADMIN_PASSWORD=your_secure_admin_password
d)MONGODB_URI=your_mongodb_connection_string
e)IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
f)IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
g)IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
h)GEMINI_API_KEY=your_gemini_api_key

⚠️ Do not use the default credentials or expose your keys in public repositories.

4. Start the Application
   Start Backend Server
   bash
   Copy code
   npm run dev
   Start Frontend Client
   bash
   Copy code
   cd client
   npm run dev
   The application should now be running at http://localhost:5173 (or the port configured in your frontend).

🛡️ Security Notes
Ensure your admin credentials (ADMIN_EMAIL and ADMIN_PASSWORD) are strong and unique.

Always use your own MongoDB URI to store and manage blog data securely.

Keep your .env file private and out of version control.
