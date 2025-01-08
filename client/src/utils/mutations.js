import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        _id
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation Mutation($id: ID, $criteria: BookInput) {
    saveBook(_id: $id, criteria: $criteria) {
      _id
      savedBooks {
        bookId
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation Mutation($id:ID, $bookId: String!) {
    removeBook(bookId: $bookId, _id: $id) {
      _id
      savedBooks {
        bookId
      }
    }
  }
`;
