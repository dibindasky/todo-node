
Certainly! Here is the complete README text for your GitHub:

Node.js Todo Application Backend
This is a simple Node.js backend API for a Todo application. It provides user authentication, token-based access, and CRUD functionality for todos, with features such as completion status, deletion, and pinning. This project is built with learning purposes in mind.


Base URL
All requests are made to the following base URL:
https://todo-node-48zl.onrender.com


API Endpoints
1. User Registration
URL: /users/sign_up
Method: POST
Description: Register a new user.
Request Body:
{
  "phone": "7025214086",
  "email": "dibin@gmail.com",
  "name": "Dibin",
  "password": "dibin4086"
}

Response:
{
  "message": "user signup successfully",
  "user": {
    "name": "Dibins",
    "email": "dibins@gmail.com",
    "phone": 7025214083,
    "password": "$2b$10$BpJKblvM94p3eq6pohcD1O1J34s9hGvdX0Ojl6gr.T1gDpyPi2Vp6",
    "_id": "6728abb71f70b3ef784bc07d",
    "__v": 0
  }
}


2. User Login
URL: /users/login
Method: POST
Description: Log in an existing user.
Request Body:
{
  "phone": "7025214086",
  "password": "dibin4086"
}

Response:
{
  "message": "user signedup successfully",
  "user": {
    "_id": "67286fffd290c57533aced62",
    "name": "Dibin",
    "email": "dibin@gmail.com",
    "phone": 7025214086,
    "__v": 0
  },
  "token": "<JWT_TOKEN>"
}


3. Create Todo
URL: /todos/create
Method: POST
Description: Create a new todo item.
Headers: Authorization: Bearer <JWT_TOKEN>
Request Body:
{
  "title": "create todo 2",
  "description": "create todo description 2",
  "isPinned": true,
  "completed": false,
  "deleted": false
}

Response:
{
  "message": "todo created successfully"
}


4. Fetch All Todos
URL: /todos/get
Method: GET
Description: Fetch all todos associated with the authenticated user.
Headers: Authorization: Bearer <JWT_TOKEN>
Response:
{
  "message": "todo fetch successfully",
  "todo": [
    {
      "_id": "67289fd1f80505b88409e658",
      "title": "create todo 1",
      "description": "create todo description",
      "isPinned": false,
      "completed": false,
      "deleted": false,
      "userId": "67286fffd290c57533aced62",
      "createdAt": "2024-11-04T10:20:01.922Z",
      "updatedAt": "2024-11-04T10:20:01.922Z",
      "__v": 0
    }
  ]
}


5. Fetch Deleted Todos
URL: /todos/deleted-todo
Method: GET
Description: Fetch all deleted todos for the authenticated user.
Headers: Authorization: Bearer <JWT_TOKEN>


6. Fetch Pinned Todos
URL: /todos/pinned-todo
Method: GET
Description: Fetch all pinned todos for the authenticated user.
Headers: Authorization: Bearer <JWT_TOKEN>


7. Fetch Completed Todos
URL: /todos/completed-todo
Method: GET
Description: Fetch all completed todos for the authenticated user.
Headers: Authorization: Bearer <JWT_TOKEN>


8. Update Todo
URL: /todos/update
Method: PATCH
Description: Update a specific todo item.
Headers: Authorization: Bearer <JWT_TOKEN>
Request Body:
{
  "id": "67289fe2f80505b88409e65d",
  "title": "give title if any change is there",
  "description": "give description if any change is there",
  "deleted": false,       // Set true to delete
  "isPinned": false,      // Set true to pin, false to unpin
  "completed": false      // Set true to mark as completed, false to unmark
}

Response:
{
  "message": "Todo updated successfully",
  "todo": {
    "title": "create todo 2",
    "description": "create todo description 2",
    "isPinned": true,
    "completed": false,
    "deleted": false,
    "userId": "67286fffd290c57533aced62",
    "_id": "67289fe2f80505b88409e65d",
    "createdAt": "2024-11-04T10:20:18.723Z",
    "updatedAt": "2024-11-04T10:54:04.265Z",
    "__v": 0
  }
}

Authentication
All routes (except for user sign-up and login) require a JWT token for authentication. The token must be passed in the Authorization header as Bearer <JWT_TOKEN>.

Notes
JWT Token: Each user receives a JWT token upon successful login, which should be included in the Authorization header for protected routes.
Error Handling: Ensure that the proper HTTP status codes and messages are used for error cases, such as unauthorized access or invalid data.
Status Codes: The API follows RESTful conventions and returns appropriate HTTP status codes, e.g., 200.201 for successful requests, 500 for server errors and 401 for unauthorized access.
Setup and Run


Clone the repository.

Install dependencies using:
npm install

Start the server:
npm start

Access the endpoints using the base URL https://todo-node-48zl.onrender.com.
