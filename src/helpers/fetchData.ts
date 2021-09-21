import axios from 'axios';

export const fetchData = async (): Promise<object[]> => {
    const res = await axios.get('https://api.gael.cloud/general/public/clima')
    const data = res.data

    return data
}
