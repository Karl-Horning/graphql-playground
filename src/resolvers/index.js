const rateLimiter = require("../middleware");

const resolvers = {
    Query: {
        /**
         * Apollo Server test query.
         * @returns {String} Returns "Return string!".
         */
        test: async (_, __, context) => {
            try {
                await rateLimiter.consume(context.ipAddress);
                return "Return string!";
            } catch (error) {
                // Log the error details for debugging
                console.error("Rate Limiter Error:", error);

                // Handle rate limit exceeded error with a custom response
                return `RATE_LIMIT_EXCEEDED: Please wait ${
                    error.msBeforeNext / 1000
                } seconds`;
            }
        },
    },
};

module.exports = resolvers;
