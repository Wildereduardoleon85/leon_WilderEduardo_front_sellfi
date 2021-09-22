import axios from 'axios'
import { List, WheaterInfo } from '../interfaces/interfaces'

export const fetchList = async (): Promise<List[]> => {
    const res = await axios.get('/api/v1/clima')
    const data = res.data.map((item: any) => {
        return {codigo: item.Codigo, ciudad: item.Estacion}
    })
    return data
}

export const getDefaultCity = async(): Promise<WheaterInfo> => {
    const res = await axios.get('/api/v1/clima/SCQN')
    const data = {
        temperatura: Number(res.data.Temp),
        loading: false,
        humedad: Number(res.data.Humedad),
        estado: res.data.Estado,
        ciudad: res.data.Estacion
    }
    return data
}

export const getInfo = async(text: string): Promise<WheaterInfo> => {
    const res = await axios.get(`api/v1/clima/${text}`)
    const data = {
      temperatura: Number(res.data.Temp),
      humedad: res.data.Humedad,
      estado: res.data.Estado,
      ciudad: res.data.Estacion,
      loading: false
    }
    return data
}


