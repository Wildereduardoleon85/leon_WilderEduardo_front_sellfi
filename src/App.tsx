import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import './App.css'

const App = () => {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <section>
          <Hero/>
        </section>
      </main>
    </>
  );
}

export default App;
