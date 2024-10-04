# Friends Website Backend

This project is the backend for a web application that allows users to add and manage their friends. It uses Node.js and Express to create a RESTful API.


## Technology Stack

- Node.js
- Express
- MongoDB (for data storage)
- JWT (for authentication)

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your_username/repository_name.git

2. Navigate to the project folder:
   ```bash
   cd Breadcrumbsfriends-website-backend
3. Install the necessary dependencies:
   ```bash
   npm install
4. Create a `.env` file based on `.env.example` and fill it with your environment variables (e.g., MongoDB URL, JWT secret, etc.).

## Running the Application
To run the server in development mode, use:
  ```bash
  npm run dev
```

## API Endpoints

### Authentication

- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Login a user and receive a JWT token

### Friends Management

- `GET /api/friends`: Retrieve the list of friends (requires JWT)
- `POST /api/friends/add`: Add a new friend (requires JWT)
- `PUT /api/friends/:id`: Update friend details (requires JWT)
- `DELETE /api/friends/:id`: Delete a friend (requires JWT)

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
