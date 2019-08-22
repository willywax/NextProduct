import voteService from '../services/voteService';
import ProductService from '../services/ProductService';

class Votes {
  static async voteProduct(req, res) {
    const vote = {
      userId: req.user.id,
      productId: req.params.id,
    };
    const product = await ProductService.findProduct(req.params.id);
    if (!product) {
      return res.status(404).send({
        status: res.statusCode,
        message: 'Product does not exist',
      });
    }
    const checkVote = await voteService.votesCount(vote);
    if (checkVote) {
      const details = await voteService.removeVote(vote);
      if (details) {
        return res.status(200).send({
          status: res.statusCode,
          message: `Successfully removed vote on product ${product.name}`,
        });
      }
    }
    const details = await voteService.addVote(vote);
    return res.status(200).send({
      status: res.statusCode,
      message: `Successfully Voted product ${product.name}`,
    });
  }
}
export default Votes;
