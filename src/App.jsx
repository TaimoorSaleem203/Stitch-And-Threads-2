import Navbar from "./components/Navbar"
import LandPage from "./components/LandPage"
import AboutUs from "./components/AboutUs"
import Services from "./components/Services"

const App = () => {
  return (
    <>

    <section className="overflow-x-hidden">
      <Navbar />
      <LandPage />
      <AboutUs />
      <Services />

    </section>
    </>
  )
}

export default App