const resolvers = {
    Query: {
        /**
         * Apollo Server test query.
         * @returns {String} Returns "Return string!".
         */
        test: () => "Return string!",
    },
};

module.exports = resolvers;
