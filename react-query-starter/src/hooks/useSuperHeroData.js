import { useQuery } from "react-query";
import axios from "axios";

const fetchingUsers = ({ queryKey }) => {
    const id = queryKey[1]
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}

export const useSuperHeroData = (id) => {
    console.log('ID USER',id)
    return useQuery(['users', id],fetchingUsers)
}
