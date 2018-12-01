import axios from 'axios'

export default axios.create({
    baseURL:'https://laravel-nuxt-graphql.herokuapp.com/graphql',
})
