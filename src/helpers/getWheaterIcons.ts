export const getIcons = (estado: string): string | undefined => {
    if(estado === 'Escasa nubosidad'){
        return '/img/wheaterIcons/cloudy-day-1.svg'
    }
    if(estado === 'Cubierto'){
        return '/img/wheaterIcons/cloudy.svg'
    }
    if(estado === 'Nublado'){
        return '/img/wheaterIcons/cloudy-day-3.svg'
    }
    if(estado === 'Despejado'){
        return '/img/wheaterIcons/day.svg'
    }
    if(estado === 'Nubosidad parcial'){
        return '/img/wheaterIcons/cloudy-day-2.svg'
    }
    if(estado === 'Nublado y chubascos'){
        return '/img/wheaterIcons/rainy-4.svg'
    }
    if(estado === 'Cubierto y lluvia'){
        return '/img/wheaterIcons/rainy-5.svg'
    }
    if(estado === 'Despejado y niebla'){
        return '/img/wheaterIcons/cloudy-day-1.svg'
    }
}