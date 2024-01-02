const { RateLimiterMemory } = require("rate-limiter-flexible");

/**
 * Creates and exports a RateLimiterMemory instance with default or user-configured parameters.
 * @module RateLimiter
 */

// Default configuration
const defaultConfig = {
    points: 1,
    duration: 2,
};

try {
    // Create a RateLimiterMemory instance
    const rateLimiter = new RateLimiterMemory(defaultConfig);

    // Export the rate limiter instance
    module.exports = rateLimiter;
} catch (error) {
    // Log any errors that occur during initialization
    console.error("Error creating rate limiter:", error);
}
