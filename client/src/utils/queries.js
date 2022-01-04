import { gql } from '@apollo/client';

export const QUERY_SAUCES = gql`
    query getSauces($category: ID) {
        sauces(category: $category) {
            _id
            name
            description
            price
            quantity
            image
            category {
                _id
            }
        }
    }
`

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            orders {
                sauces {
                    _id
                    category
                }
            }
        }
    }
`;

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            orders {
                sauces {
                    _id
                    category
                }
            }
        }
    }
`