
# Assignment 3 :
Develop a Social Networking API with MongoDB

## Run Locally


Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
Environment variables
```bash
MONGO_URL = "mongodb+srv://[username:password@]host[/[defaultauthdb][?options]]"
JWT_SECRET = "your jwt sectret"
JWT_EXPIRE = 86400
```

## API Reference

#### Base URL:

```http
  http://localhost:5000/api

```





## Authentication Endpoints

| Endpoint         | Method | Description                         | Request Body                               | Response                             | Example                                           |
|------------------|--------|-------------------------------------|--------------------------------------------|--------------------------------------|---------------------------------------------------|
| /auth/register   | POST   | Register a new user                 | username (string), email (string), password (string) | id (string), username (string), email (string) | ``` { "username": "user123", "email": "user123@example.com", "password": "password123" } ``` |
| /auth/login      | POST   | Log in a user                       | email (string), password (string)          | token (string), user (object)        | ``` { "email": "user123@example.com", "password": "password123" } ``` |
| /auth/logout     | GET    | Log out the currently authenticated user | -                                          | Success message                      | -                                                 |
| /auth/refetch   | GET    | Fetch details of the current user    | -                                          | User object                          | -                                                 |

## User Management Endpoints

| Endpoint                | Method | Description                    | Request Body                | Response              | Example                |
|-------------------------|--------|--------------------------------|-----------------------------|-----------------------|------------------------|
| /user/:userId           | GET    | Get user by ID                 | -                           | User object           | -                      |
| /user/update/:userId    | PUT    | Update user                    | Updated user data           | Success message       | -                      |
| /user/follow/:userId    | POST   | Follow user                    | User ID of user to follow   | Success message       | -                      |
| /user/unfollow/:userId  | POST   | Unfollow user                  | User ID of user to unfollow | Success message       | -                      |
| /user/block/:userId     | POST   | Block user                     | User ID of user to block    | Success message       | -                      |
| /user/unblock/:userId   | POST   | Unblock user                   | User ID of user to unblock  | Success message       | -                      |
| /user/blocked/:userId   | GET    | Get blocked users              | -                           | List of blocked users | -                      |
| /user/delete/:userId    | DELETE | Delete user                    | -                           | Success message       | -                      |

## Posting Endpoints




| Endpoint                  | Method | Description                        | Request Body                                        | Response                           | Example                                                                                                   |
|---------------------------|--------|------------------------------------|-----------------------------------------------------|------------------------------------|-----------------------------------------------------------------------------------------------------------|
|/post/create                    | POST   | Create a new post                 | userId (string), text (string), images (array)      | Success message, Post object       | ``` { "userId": "userId123", "text": "Some text content", "images": ["image1.jpg", "image2.jpg"] } ``` |```                                                         |
| /post/update/:postId            | PUT    | Update an existing post           | postId (string), updated fields                     | Success message, Updated post      | ``` { "text": "Updated text content" } ```                                                                |
| /post/all/:userId               | GET    | Get all posts                     | userId (string)                                     | List of posts                      | -                                                                                                         |
| /post/user/:userId              | GET    | Get posts by user ID              | userId (string)                                     | List of user's posts               | -                                                                                                         |
| /post/delete/:postId            | DELETE | Delete a post                     | postId (string)                                     | Success message                    | -                                                                                                         |
| /post/like/:postId              | POST   | Like a post                       | postId (string), userId (string)                    | Success message, Updated post      | ``` { "userId": "userId123" } ```                                                                         |
| /post/dislike/:postId           | POST   | Dislike a post                    | postId (string), userId (string)                    | Success message, Updated post      | ``` { "userId": "userId123" } ```                                                                         |
| /post/following/:userId         | GET    | Get posts from users the current user follows | userId (string)                           | List of posts from followed users   | -                                                                                                         |



## Commenting Endpoints




| Endpoint                                      | Method | Description                               | Request Body                                          | Response                           | Example                                                                                                                                                               |
|-----------------------------------------------|--------|-------------------------------------------|-------------------------------------------------------|------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /comment/create                                       | POST   | Create a new comment                      | postId (string), userId (string), text (string)        | Success message, Comment object   | ``` { "postId": "postId123", "userId": "userId123", "text": "This is a comment" } ```                                                                              |
| /comment/create/reply/:commentId                     | POST   | Create a reply to a comment               | commentId (string), userId (string), text (string)     | Success message, Reply object     | ``` { "userId": "userId123", "text": "This is a reply to the comment" } ```                                                                                         |
| /comment/update/:commentId                           | PUT    | Update an existing comment                | commentId (string), updated fields                    | Success message, Updated comment | ``` { "text": "Updated comment text" } ```                                                                                                                           |
| /comment/update/:commentId/replies/:replyId          | PUT    | Update an existing reply to a comment     | commentId (string), replyId (string), updated fields  | Success message, Updated reply   | ``` { "text": "Updated reply text" } ```                                                                                                                              |
| /comment/post/:postId                                | GET    | Get all comments for a post              | postId (string)                                       | List of comments                  | -                                                                                                                                                                     |
| /comment/delete/:commentId                           | DELETE | Delete a comment                          | commentId (string)                                    | Success message                   | -                                                                                                                                                                     |
| /comment/delete/:commentId/replies/:replyId          | DELETE | Delete a reply to a comment              | commentId (string), replyId (string)                   | Success message                   | -                                                                                                                                                                     |
| /comment/like/:commentId/                            | POST   | Like a comment                            | commentId (string), userId (string)                  | Success message, Updated comment | ``` { "userId": "userId123" } ```                                                                                                                                    |
| /comment/dislike/:commentId/                         | POST   | Dislike a comment                         | commentId (string), userId (string)                  | Success message, Updated comment | ``` { "userId": "userId123" } ```                                                                                                                                    |
| /comment/:commentId/replies/like/:replyId           | POST   | Like a reply to a comment                 | commentId (string), replyId (string), userId (string) | Success message, Updated reply   | ``` { "userId": "userId123" } ```                                                                                                                                    |
| /comment/:commentId/replies/dislike/:replyId        | POST   | Dislike a reply to a comment              | commentId (string), replyId (string), userId (string) | Success message, Updated reply   | ``` { "userId": "userId123" } ```                                                                                                                                    |





