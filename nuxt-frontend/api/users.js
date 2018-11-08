import axios from '~/libs/axios'

export const api = (query) => axios.get(`/graphql?query=${query}`);
