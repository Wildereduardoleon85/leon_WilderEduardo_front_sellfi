export const getIcons = (estado: string, date: Date): string | undefined => {
    const horas = date.getHours()
    if(estado === 'Escasa nubosidad' && horas >= 6 && horas <= 20){
        return '/img/wheaterIcons/cloudy-day-1.svg'
    }
    if(estado === 'Cubierto' && horas >= 6 && horas <= 20){
        return '/img/wheaterIcons/cloudy.svg'
    }
    if(estado === 'Nublado' && horas >= 6 && horas <= 20){
        return '/img/wheaterIcons/cloudy-day-3.svg'
    }
    if(estado === 'Despejado' && horas >= 6 && horas <= 20){
        return '/img/wheaterIcons/day.svg'
    }
    if(estado === 'Nubosidad parcial' && horas >= 6 && horas <= 20){
        return '/img/wheaterIcons/cloudy-day-2.svg'
    }
    if(estado === 'Nublado y chubascos' && horas >= 6 && horas <= 20){
        return '/img/wheaterIcons/rainy-4.svg'
    }
    if(estado === 'Cubierto y lluvia' && horas >= 6 && horas <= 20){
        return '/img/wheaterIcons/rainy-5.svg'
    }
    if(estado === 'Despejado y niebla' && horas >= 6 && horas <= 20){
        return '/img/wheaterIcons/cloudy-day-1.svg'
    }
    // Night
    if(estado === 'Escasa nubosidad' && horas >= 21 ){
        return '/img/wheaterIcons/cloudy-night-1.svg'
    }
    if(estado === 'Escasa nubosidad' && horas <= 5){
        return '/img/wheaterIcons/cloudy-night-1.svg'
    }
    if(estado === 'Cubierto' && horas >= 21){
        return '/img/wheaterIcons/cloudy.svg'
    }
    if(estado === 'Cubierto' && horas <= 5){
        return '/img/wheaterIcons/cloudy.svg'
    }
    if(estado === 'Nublado' && horas >= 21){
        return '/img/wheaterIcons/cloudy-night-3.svg'
    }
    if(estado === 'Nublado' && horas <= 5){
        return '/img/wheaterIcons/cloudy-night-3.svg'
    }
    if(estado === 'Despejado' && horas >= 21){
        return '/img/wheaterIcons/night.svg'
    }
    if(estado === 'Despejado' && horas <= 5){
        return '/img/wheaterIcons/night.svg'
    }
    if(estado === 'Nubosidad parcial' && horas >= 21 ){
        return '/img/wheaterIcons/cloudy-night-2.svg'
    }
    if(estado === 'Nubosidad parcial' && horas <= 5){
        return '/img/wheaterIcons/cloudy-night-2.svg'
    }
    if(estado === 'Nublado y chubascos' && horas >= 21 ){
        return '/img/wheaterIcons/rainy-4.svg'
    }
    if(estado === 'Nublado y chubascos' && horas <= 5){
        return '/img/wheaterIcons/rainy-4.svg'
    }
    if(estado === 'Cubierto y lluvia' && horas >= 21 ){
        return '/img/wheaterIcons/rainy-5.svg'
    }
    if(estado === 'Cubierto y lluvia' && horas <= 5){
        return '/img/wheaterIcons/rainy-5.svg'
    }
    if(estado === 'Despejado y niebla' && horas >= 21 ){
        return '/img/wheaterIcons/cloudy-night-1.svg'
    }
    if(estado === 'Despejado y niebla' && horas <= 5){
        return '/img/wheaterIcons/cloudy-night-1.svg'
    }
}