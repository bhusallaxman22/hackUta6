# Student Government Backend

## Overview

This project is a robust, scalable Node.js backend with MongoDB for a Student Government portal. It provides secure APIs for managing student government information, resolution submissions, and voting processes.

## How To Run
- download node.js from [nodejs.org](https://nodejs.org/en)
### To run the **backend** run 
- Create a `.env` file in the root directory of the project. It should look something like:
    ```
    MONGODB_URI=MONGO_CONNECTION_STRING
    JWT_SECRET=YOUR_SECRET
    ```
- `npm install`
- `node app.js`

### To run the **frontend** run 
- `cd frontend`
- `npm install`
- `npm dev`


## Features

- **User Authentication**: Secure registration and login system.
- **Role-Based Access Control**: Different access levels for guests, senators, and leaders.
- **Home Page**: Public information about student government.
- **Resolution Submission**: Open to all users, including guests.
- **Resolution Management**: Leaders can approve or deny resolutions.
- **Voting System**: Senators can vote on approved resolutions.
- **Scalable Architecture**: Built with Node.js and MongoDB for high performance and scalability.
- **Security Measures**: Implements best practices like password hashing, JWT authentication, and rate limiting.

## Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT)
- **Security**: bcrypt for password hashing, Helmet for HTTP headers
- **Other**: CORS for cross-origin requests, dotenv for environment variables

## Prerequisites

- Node.js (v14 or later)
- MongoDB

## Setup

1. **Clone the repository**

   ```
   git clone https://github.com/your-username/student-government-backend.git
   cd student-government-backend
   ```

2. **Install dependencies**

   ```
   npm install
   ```

3. **Environment Variables**

   Create a `.env` file in the root directory and add the following:

   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=3000
   ```

   Replace `your_mongodb_connection_string` and `your_jwt_secret` with your actual MongoDB connection string and a secure random string for JWT signing.

4. **Start the server**

   ```
   npm start
   ```

   The server will start running on `http://localhost:3000` (or the PORT you specified in the .env file).

## API Endpoints

### Authentication

- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Login and receive JWT

### Pages

- `GET /api/pages/home`: Get home page information

### Resolutions

- `POST /api/resolutions`: Submit a new resolution
- `GET /api/resolutions`: Get all resolutions
- `PUT /api/resolutions/:id`: Approve or deny a resolution (Leader only)
- `POST /api/resolutions/:id/vote`: Vote on a resolution (Senator only)

## Security

This backend implements several security measures:

- Password hashing with bcrypt
- JWT for secure authentication
- Helmet for setting secure HTTP headers
- Rate limiting to prevent abuse
- CORS configuration to control access to the API

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.