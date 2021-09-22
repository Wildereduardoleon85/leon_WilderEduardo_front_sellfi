import { BgFunction } from '../interfaces/interfaces'

export const getDayString = (date: Date): string | undefined => {
    if(date.getDay() === 1){
      return 'Lunes'
    }
    if(date.getDay() === 2){
      return 'Martes'
    }
    if(date.getDay() === 3){
      return 'Miércoles'
    }
    if(date.getDay() === 4){
      return 'Jueves'
    }
    if(date.getDay() === 5){
      return 'Viernes'
    }
    if(date.getDay() === 6){
      return 'Sábado'
    }
    if(date.getDay() === 0){
      return 'Domingo'
    }
  }

export const getTime = (date: Date): string | undefined => {
    const hours = date.getHours()
    const minutes = date.getMinutes()

    if(minutes < 10){
      return `${String(hours)}:0${String(minutes)}`
    }

    return `${String(hours)}:${String(minutes)}`
}

export const getBackground = (date: Date): BgFunction => {
    const hours = date.getHours()
    if(hours >= 6 && hours <= 8){
        return {bg: '/img/amanecer.jpg', color: 'rgb(189, 69, 41)'}
    }
    if(hours >= 9 && hours <= 17){
        return {bg: '/img/dia.jpg', color: 'inherit'}
    }
    if(hours >= 18 && hours <= 20){
        return {bg: '/img/atardecer.jpg', color: '#7C4830'}
    }
    if(hours >= 21 || hours <= 5){
        return {bg: '/img/noche.jpg', color: '#0E1928'}
    }else{
        return {bg: 'no results', color: 'inherit'}
    }
}