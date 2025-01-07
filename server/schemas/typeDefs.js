const typeDefs = `
    type Book {
        bookId: Int!
        authors: [String]
        description: String!
        title: String!
        image: String
        link: String
    }

    type User {
        _id: ID
        username: String!
        email: String!
        bookCount: Int
        saveBooks: [Book]
    }

    type Auth {
        token: String
        user: User
    }

    type Query {
        me: User
    }

    input BookInput {
        description: String
        title: String
        bookId: Int
        image: String
        link: String
    }

    type Mutation {
        login(email: String, password: String): Auth
        addUser(username: String, email: String, password: String): Auth
        saveBook(criteria: BookInput): User
        removeBook(bookId: Int): User
    }
`
module.exports = typeDefs;