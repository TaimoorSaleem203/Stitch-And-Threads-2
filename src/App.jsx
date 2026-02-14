import Navbar from "./components/Navbar.jsx"
import LandPage from "./components/LandPage.jsx"
import AboutUs from "./components/AboutUs.jsx"
import Services from "./components/Services.jsx"
import Portfolio from "./components/Portfolio.jsx"
import Quotes from "./components/Quotes.jsx"
import ContactUs from "./components/ContactUs.jsx"
import FAQs from "./components/FAQs.jsx"

const App = () => {
  return (
    <>

    <div className="overflow-hidden">
      <Navbar />
      <LandPage />
      <AboutUs />
      <Services />
      <Portfolio />
      <Quotes /> 
      <ContactUs />
      <FAQs />

    </div>

    </>
  )
}

export default App