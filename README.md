# GraphQL Playground

GraphQL Playground is a simple GraphQL server implementation with a built-in playground for testing queries and mutations.

## Features

- **GraphQL Server:** Provides a GraphQL server with a set of predefined schemas, resolvers, and middleware.
- **Rate Limiting:** Implements a rate limiter using the `rate-limiter-flexible` library to control request rates.
- **Graceful Shutdown:** Handles graceful shutdown on receiving the SIGINT signal for a clean server shutdown.
- **Apollo Server:** Utilizes Apollo Server for serving GraphQL requests with enhanced features.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Endpoints](#endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Karl-Horning/graphql-playground.git
   ```

2. Install dependencies:

   ```bash
   cd graphql-playground
   npm install
   ```

3. Set up your environment variables:

   Create a `.env` file in the project root and define the required variables:

   ```env
   PORT=4000
   # Add other environment variables as needed
   ```

4. Start the GraphQL Playground:

   ```bash
   npm start
   ```

## Usage

Visit `http://localhost:4000/graphql` in your browser to access the GraphQL Playground. You can use the interactive playground to explore and test GraphQL queries and mutations.

## Configuration

The following environment variables can be configured in the `.env` file:

- **PORT:** The port on which the server will run. Default is 4000.

## Endpoints

- **GraphQL Playground:** `http://localhost:4000/graphql`

## Testing

To run tests, use the following command:

```bash
npm test
```

## Contributing

Contributions are welcome! Feel free to open issues, submit pull requests, or provide feedback.

## License

This project is licensed under the [MIT License](LICENSE).

## Author

Karl Horning: [GitHub](https://github.com/Karl-Horning/) | [LinkedIn](https://www.linkedin.com/in/karl-horning/) | [CodePen](https://codepen.io/karlhorning)