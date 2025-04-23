# MongoDB Auth App

A Node.js web application using Express, MongoDB, and EJS that supports user authentication with hashed passwords and JWT-based authorization.

## 📁 Project Structure

├── app.js ├── package.json ├── views/ ├── routes/ ├── models/ └── public/

## 🚀 Technologies Used

- **Node.js** – Backend runtime environment
- **Express.js** – Web framework for Node.js
- **MongoDB** – NoSQL database
- **Mongoose** – ODM (Object Data Modeling) for MongoDB
- **EJS** – Templating engine for dynamic HTML
- **bcrypt** – For hashing passwords securely
- **jsonwebtoken (JWT)** – For user authentication using tokens
- **cookie-parser** – To parse cookies in HTTP requests

---

## 📦 Dependencies (from package.json)

| Package          | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| **express**      | Fast, minimal web framework for Node.js                                     |
| **mongoose**     | MongoDB object modeling tool                                                 |
| **ejs**          | Templating engine to render dynamic content in HTML                         |
| **bcrypt**       | Encrypts passwords before storing in database (for security)                |
| **jsonwebtoken** | Allows secure user login with token-based authentication                    |
| **cookie-parser**| Parses cookies attached to the client request object                        |

---

## 🛠️ Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/mongodb-auth-app.git
cd mongodb-auth-app
