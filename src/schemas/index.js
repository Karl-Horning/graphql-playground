const { makeExecutableSchema } = require("@graphql-tools/schema");
const { rateLimitDirective } = require("graphql-rate-limit-directive");

const { rateLimitDirectiveTypeDefs, rateLimitDirectiveTransformer } =
    rateLimitDirective();

const queries = require("./queries");
const resolvers = require("../resolvers");

let schema = makeExecutableSchema({
    typeDefs: [rateLimitDirectiveTypeDefs, queries],
    resolvers,
});

schema = rateLimitDirectiveTransformer(schema);

module.exports = schema;
