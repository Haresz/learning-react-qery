import { Link } from "react-router-dom"
import { useSuperHeroesData } from "../hooks/useSuperHerosData"
import { SuperHeroesPage } from "./Posts.page"

export const RQSuperHeroesPage = () => {
  const onSucces = (data) => {
    console.log('Perform side effect after data feching', data)
  }

  const onError = (error) => {
    console.log('Perform side effect afte encountering error', error)
  }


  const {isLoading, data, isError, error, isFetching, refetch} =
    useSuperHeroesData(onSucces, onError)

  console.log(isLoading, isFetching)

  if(isLoading || isFetching){
    return <h2>Loading...</h2>
  }

  if(isError){
    return <h2>{error.message}</h2>
  }

  return(
    <>
      <h2>React Query Super Heroes Page</h2>
      <button onClick={refetch}>Fetch Users</button>
      {
        data?.data.map((user) =>{
          return <div key={user.id} >
            <Link to={`/users/${user.id}`}>{user.username}</Link>
          </div>
        })
      }
      {/* {
        data.map((usersName) => {
          return <div key={usersName}>{usersName}</div>
        })
      } */}
    </>
  ) 
}

