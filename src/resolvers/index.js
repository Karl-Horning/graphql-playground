const resolvers = {
    Query: {
        /**
         * Apollo Server test query.
         * @returns {String} Returns "Return string!".
         */
        test: async (_, __, { rateLimiter, ipAddress }) => {
            try {
                await rateLimiter.consume(ipAddress);
                return "Return string!";
            } catch (error) {
                // Log the error details for debugging
                console.error("Rate Limiter Error:", error);

                if (
                    error.remainingPoints !== undefined &&
                    error.msBeforeNext !== undefined
                ) {
                    // Handle rate limit exceeded error with a custom response
                    return `RATE_LIMIT_EXCEEDED: ${
                        error.remainingPoints
                    } requests remaining. Please wait ${
                        error.msBeforeNext / 1000
                    } seconds`;
                } else {
                    // Log other types of errors for further investigation
                    console.error(
                        "Unexpected error type:",
                        typeof error,
                        error
                    );
                    return "Unexpected error occurred.";
                }
            }
        },
    },
};

module.exports = resolvers;
