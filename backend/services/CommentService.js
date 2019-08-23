import database from '../database/models';

class CommentService {
  static async addComment(comment) {
    try {
      return await database.Comments.create(comment);
    } catch (error) {
      throw error;
    }
  }
}

export default CommentService;
