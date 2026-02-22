import Navbar from "./components/Navbar.jsx"
import LandPage from "./components/LandPage.jsx"
import AboutUs from "./components/AboutUs.jsx"
import Services from "./components/Services.jsx"
import Portfolio from "./components/Portfolio.jsx"
import Quotes from "./components/Quotes.jsx"
import ContactUs from "./components/ContactUs.jsx"
import FAQs from "./components/FAQs.jsx"
import Subscription from "./components/Subscription.jsx"
import Footer from "./components/Footer.jsx"
import MarketBanner from "./components/MarketBanner.jsx"
import Badges from "./components/Badges.jsx"

const App = () => {
  return (
    <>

      <section className="overflow-hidden scroll-smooth">
        <Navbar />
        <LandPage />
        <AboutUs />
        <Services />
        <MarketBanner />
        <Portfolio />
        <Quotes /> 
        <Badges />
        {/* <ContactUs /> */}
        {/* <FAQs /> */}
        <Subscription />
        <Footer />
      </section>

    </>
  )
}

export default App