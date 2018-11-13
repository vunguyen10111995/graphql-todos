import gql from 'graphql-tag'
export const queryUsers = (page) => `query {
    users(take:10,page:${page}) {
    items {
        id,name,email
    } cursor {
        currentPage,total,hasPages,perPage
        }
    }
}`;

export const getUser = (id) => `query {
    user(id:${id}) {
        id,
        name,
        email,
        profile {
            address
            company
            dob
        }
    }
}`

export const createNewUser = (user) => `mutation{
    createUser(name: "${user.name}",
    email: "${user.email}",
    password: "${user.password}"){id, name, email}
}`;

export const updateOldUser = (user) => `mutation{updateUser(id:${user.id}, email:"${user.email}", name:"${user.name}",password:"${user.password}"){id,name,email}}`;

export const removeUser = (user) => `mutation{deleteUser(id:${user.id}){id}}`;

export const FETCH_USER = (page) => gql`
query {
    users(take:10,page:${page}) {
    items {
        id,name,email
    } cursor {
        currentPage,total,hasPages,perPage
        }
    }
}
`
export const CREATE_USER = (user) => gql`
    mutation{
    createUser(name: "${user.name}",
    email: "${user.email}",
    password: "${user.password}"){id, name, email}
}
`

export const UPDATE_USER = (user) => gql`mutation{updateUser(id:${user.id}, email:"${user.email}", name:"${user.name}",password:"${user.password}"){id,name,email}}`;

export const DELETE_USER = (user) => gql`mutation{deleteUser(id:${user.id}){id}}`;
