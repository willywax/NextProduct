/* eslint-disable no-useless-catch */
import database from '../database/models';

const { Votes } = database;
class VotesService {
  static async addVote(votes) {
    try {
      return await Votes.create(votes);
    } catch (error) {
      throw error;
    }
  }

  static async votesCount(votes) {
    try {
      return await Votes.count({
        where: votes,
      });
    } catch (error) {
      throw error;
    }
  }

  static async removeVote(votes) {
    try {
      return await Votes.destroy({
        where: votes,
      });
    } catch (error) {
      throw error;
    }
  }
}

export default VotesService;
