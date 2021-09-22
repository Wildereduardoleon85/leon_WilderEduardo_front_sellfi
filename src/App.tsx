import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import { useState, useEffect } from 'react'
import { WheaterInfo } from './interfaces/interfaces'
import { getDefaultCity, getInfo } from './helpers/fetchData'
import './App.css'

const App = () => {

  const [wheaterInfo, setWheaterInfo] = useState<WheaterInfo>({
    temperatura: 0,
    humedad: 0,
    estado: '',
    ciudad: '',
    loading: true
  })

  useEffect(() => {
    getDefaultCity()
      .then(data => {
        const {temperatura, humedad, estado, ciudad, loading} = data
        setWheaterInfo({
            temperatura, humedad, estado, ciudad, loading
          })
        })
  }, [])

  const getWheaterInfo = (text: string) => {
    setWheaterInfo({...wheaterInfo, loading: true})
    getInfo(text)
      .then(data => {
        const {temperatura, humedad, estado, ciudad, loading} = data
        setWheaterInfo({
          temperatura, humedad, estado, ciudad, loading
        })
      })
  }

  return (
    <>
      <header>
        <Navbar getWheaterInfo={getWheaterInfo}/>
      </header>
      <main>
        <section>
          <Hero wheaterInfo={wheaterInfo}/>
        </section>
      </main>
    </>
  );
}

export default App;
