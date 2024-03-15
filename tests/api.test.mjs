import request from 'supertest';
import app from '../index';

describe('API Endpoints', () => {
  // Test the POST /api/comments/create endpoint
  describe('POST /api/comments/create', () => {
    it('should create a new comment', async () => {
      const response = await request(app)
        .post('/api/comments/create')
        .send({ postId: 'postId123', userId: 'userId123', text: 'This is a test comment' });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('message', 'Comment created successfully!');
      expect(response.body).toHaveProperty('comment');
      expect(response.body.comment).toHaveProperty('postId', 'postId123');
      expect(response.body.comment).toHaveProperty('userId', 'userId123');
      expect(response.body.comment).toHaveProperty('text', 'This is a test comment');
    });

    it('should return 400 if required fields are missing', async () => {
      const response = await request(app)
        .post('/api/comments/create')
        .send({ userId: 'userId123' });

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('errors');
    });
  });

  // Test the POST /api/post/create endpoint
  describe('POST /api/post/create', () => {
    let postId;

    // Test case for creating a post
    it('should create a new post', async () => {
      const res = await request(app)
        .post('/api/post/create')
        .send({ userId: 'user_id', text: 'Test post' });

      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('message');
      expect(res.body).toHaveProperty('post');
      postId = res.body.post._id; // Store the ID of the created post for later tests
    });

    // Test case for updating a post
    it('should update the created post', async () => {
      const res = await request(app)
        .put(`/api/post/update/${postId}`)
        .send({ text: 'Updated post text' });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('message', 'Post updated successfully!');
      expect(res.body).toHaveProperty('updatedPost');
    });

    // Test case for deleting a post
    it('should delete the created post', async () => {
      const res = await request(app).delete(`/api/post/delete/${postId}`);

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('message', 'Post deleted successfully!');
    });
  });
});
