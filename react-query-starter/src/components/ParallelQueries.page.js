import { useQuery } from "react-query";
import axios from "axios";

const fetchUser = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
}

const fetchPost = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
}

export const ParallelQueriesPage = () => {

    useQuery( 'users', fetchUser)
    useQuery( 'post', fetchPost)

    return <div>ParallelQueriesPage</div>
}