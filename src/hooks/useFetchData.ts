import { useState, useEffect } from 'react'
import { fetchData } from '../helpers/fetchData';

export const useFetchData = () => {
    
    const [state, setState] = useState<{data: object[], loading: boolean}>({
        data: [],
        loading: true
    });

    useEffect(() => {
        fetchData()
            .then( info => {
                setState({
                    data: info,
                    loading: false
                });
            })
    }, [])

    return state;
}