const { gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        """
        Apollo Server test query. Returns "Return string!".
        """
        test: String!
    }
`;

module.exports = typeDefs;
