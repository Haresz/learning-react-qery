import { useQueries } from "react-query";
import axios from "axios";

const fetchUser = (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users${id}`)
}

export const DynamicParallelPage = ({ ids }) => {
    const queryResult = useQueries(
        ids.map( id => {
            return{
                queryKey: ['user', id],
                queryFn: () => fetchUser(id),
            }
        })
    )
    console.log({queryResult})
    return <div>DynamicParallel</div>
}