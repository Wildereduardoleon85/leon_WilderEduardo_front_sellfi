import { useState, useEffect } from 'react'
import { fetchList } from '../helpers/fetchData';
import { List } from '../interfaces/interfaces'

export const useFetchList = () => {
    
    const [state, setState] = useState<{data: List[], loading: boolean}>({
        data: [],
        loading: true
    });

    useEffect(() => {
        fetchList()
            .then(info => {
                setState({
                    data: info,
                    loading: false
                });
            })
    }, [])

    return state;
}