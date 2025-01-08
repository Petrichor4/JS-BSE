const { Query } = require('mongoose');
const { User, Book } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
// const { saveBook } = require('../../client/src/utils/API');

const resolvers = {
    Query: {
        me: async (parent, username) => {
            return User.findOne({username}).populate('savedBooks')
        },
        user: async () => {
            return User.find({})
        }
    },

    Mutation: {
       login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            
            if (!user) {
                throw AuthenticationError
            }

            const correctPW = await user.isCorrectPassword(password)

            if (!correctPW) {
                throw AuthenticationError
            }

            const token = signToken(user);

            return { user, token };

       },
       addUser: async (parent, { username, email, password }) => {
            const user = await User.create({username, email, password});

            const token = signToken(user)

            return { user, token } 
       },
       saveBook: async (parent, criteria) => {
            const savedBook = await User.findOneAndUpdate({})
       }
    }
}

module.exports = resolvers;