import { useState, useEffect } from 'react'
import axios from 'axios'


const useFetch = (endpoint, query) =>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // console.log(endpoint, query);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7dc8fec627mshd136bd3377c6c1ap17106fjsnbd018b19e320',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          },
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query }
        
      };
    
      const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request
            (options);

            // console.log(response.data.data);
            setData(response.data.data);
            setIsLoading(false);
        }catch (error) {

            // console.error(error);
            setError(error);
            alert('there is an error');
        } finally {
            setIsLoading(false);
        }
      }

      useEffect(() => {
        fetchData();
      },[]);  

      const refetch = () => {
        setIsLoading(true);
        fetchData();
      }

      return {data, isLoading, error, refetch}
}

export default useFetch;