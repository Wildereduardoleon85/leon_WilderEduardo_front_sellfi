export interface WheaterInfo {
    temperatura: number,
    humedad: number,
    estado: string,
    ciudad: string,
    loading: boolean
}

export interface List {
    codigo: string,
    ciudad: string
}

export interface BgFunction {
    bg: string,
    color: string
}