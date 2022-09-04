import { useQuery } from "react-query"
import axios from "axios"

const fetchPostsByTitle = (title) => {
    return axios.get(`https://my-json-server.typicode.com/typicode/demo/posts/${title}`)
}

export const DependentQueries = ({title}) => {
    const {data: posts} = useQuery(['posts', title], () => fetchPostsByTitle(title))
    return <div>DependentQueries</div>
}