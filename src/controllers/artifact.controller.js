const logger = require("./utils/logger")

const GET = {
    all: async (req, res) => {
        try {
            const commentId = req.params.id;
            const results = await CommentModel.findById(commentId);
            const response = getPrismaResponse(results, 'Comment', 'findById');
            res.status(response.status).json(response);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
}

module.exports = {
    GET
}