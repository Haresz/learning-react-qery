import { useQuery } from "react-query";
import axios from "axios";


const fetchingUsers = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
}
  

export const useSuperHeroesData = (onSucces, onError) => {
    return useQuery(
        'users', 
        fetchingUsers,
        {
          // cacheTime: 5000,
          // staleTime: 30000,
          // refetchOnMount: true,
          // refetchOnWindowFocus: true
          // refetchInterval: 2000,
          // refetchIntervalInBackground: true
          // enabled: false,
          onSuccess: onSucces,
          onError: onError,
        //   select: (data) =>{
        //     const usuersName = data.data.map((hero) => hero.name)
        //     return usuersName;
        //   },
        }
    );
}