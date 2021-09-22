import { useState, useEffect } from 'react'
import { fetchList } from '../helpers/fetchData';
import { List } from '../interfaces/interfaces'
import axios from 'axios'


export const useFetchInfo = () => {
    
    const [state, setState] = useState<{data: any, loading: boolean}>({
        data: {},
        loading: true
    });

    useEffect(() => {
        getDefaultCity()
    }, [])

    const getDefaultCity = async() => {
        const res = await axios.get('https://api.gael.cloud/general/public/clima/SCQN')
        const data = res.data
        setState({
            data: data,
            loading:false
        })
      }

    return state;
}