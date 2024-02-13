import { gql } from '@apollo/client'

export const ALL_AUTHORS = gql`
  query{
    allAuthors {
      name
      born
      bookCount
    }
  }
`


// export const ALL_BOOKS = gql`
// `

// export const ALL_AUTHORS = gql`
//   query {
//     allAuthors {
//       name
//       born
//       bookCount
//     }
//   }
// `


// export const CREATE_BOOK = gql`
//   mutate
// `

// export const CREATE_AUTHOR = gql`
//   mutate
// `