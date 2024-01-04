const { gql } = require("apollo-server");

const typeDefs = gql`
    type Query @rateLimit(limit: 1, duration: 2) {
        """
        A test query to check the functionality of Apollo Server.
        Returns the string "Return string!" as a response.
        """
        test: String!
    }
`;

module.exports = typeDefs;
