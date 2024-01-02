const dotenv = require("dotenv");
const { ApolloServer } = require("apollo-server");
const resolvers = require("./src/resolvers");
const typeDefs = require("./src/schemas");

dotenv.config();

/**
 * The port number for Apollo Server.
 * @type {number}
 */
const port = process.env.PORT || 4000;

/**
 * The Apollo Server instance for serving GraphQL requests.
 * @type {ApolloServer}
 */
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        // Extract the IP address from the incoming request
        const ipAddress =
            req?.headers["x-forwarded-for"] || req?.connection?.remoteAddress;

        return {
            req,
            ipAddress,
        };
    },
});

/**
 * Starts the Apollo Server and listens on the specified port.
 * @function
 * @param {number} port - The port number to listen on.
 */
const startApolloServer = (port) => {
    server
        .listen({ port })
        .then(({ url }) => {
            console.log(`Apollo Server started at ${url} 🚀`);
        })
        .catch((error) => {
            if (error.code === "EADDRINUSE") {
                console.error(
                    `Port ${port} is already in use. Please choose another port.`
                );
            } else {
                console.error(`Error starting Apollo Server: ${error}`);
            }
        });
};

startApolloServer(port);
