const dotenv = require("dotenv");
const { ApolloServer } = require("apollo-server");
const rateLimiter = require("./src/middleware"); // Import rateLimiter here
const resolvers = require("./src/resolvers");
const typeDefs = require("./src/schemas");

dotenv.config();

/**
 * Ensure that the PORT variable is provided in the .env file
 */
if (!process.env.PORT) {
    console.error("Please provide a PORT variable in the .env file.");
    process.exit(1);
}

/**
 * The port number for Apollo Server.
 * @type {number}
 */
const port = parseInt(process.env.PORT, 10) || 4000;

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

        // Include rateLimiter in the context
        return {
            req,
            ipAddress,
            rateLimiter,
        };
    },
});

/**
 * Handle SIGINT for graceful shutdown.
 */
process.on("SIGINT", async () => {
    try {
        console.log("Received SIGINT. Closing Apollo Server...");
        await server.stop();
        console.log("Apollo Server closed.");
        process.exit(0);
    } catch (error) {
        console.error("Error during graceful shutdown:", error);
        process.exit(1);
    }
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
            console.error("Error starting Apollo Server:", error);
            if (error.code === "EADDRINUSE") {
                console.error(
                    `Port ${port} is already in use. Please choose another port.`
                );
            } else {
                console.error(`Unknown error during Apollo Server startup.`);
            }
            process.exit(1);
        });
};

/**
 * Start Apollo Server on the specified port
 */
startApolloServer(port);
