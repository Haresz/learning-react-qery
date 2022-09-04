import { useParams } from "react-router-dom"
import { useSuperHeroData } from "../hooks/useSuperHeroData"


export const UserPage = () => {

    const {id} = useParams()
    const {isLoading, data,isError,error} = useSuperHeroData(id)

    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }
    console.log('data', data.name)
    return(
        <div>
            {data?.data.name} - {data?.data.username}
        </div>
    ) 
}