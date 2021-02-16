module.exports = {
    query: `
    getTodoWithQuery(limit: Int, start: Int):[Todo]
    `,
    resolver: {
        Query: {
            getTodoWithQuery: {
                resolverOf: "content.find",
                resolver: async (obj, options, context) => {
                    console.log(obj, options, context)
                } 
            }
        }
    }
}