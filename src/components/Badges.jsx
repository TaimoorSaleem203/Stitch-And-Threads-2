import badge1 from "../assets/badge1.png"
import badge2 from "../assets/badge2.png"
import badge3 from "../assets/badge3.png"


const Badges = () => {
  return (
    <section className="layout-container mt-36 flex flex-wrap justify-center items-center gap-8">
        <img src={badge2} className="bg-text/10 rounded-xl px-6 py-6" alt="badge2" />
        <img src={badge1} className="rounded-xl" alt="badge1" />
        <img src={badge3} className="bg-text/10 rounded-xl px-6 py-6" alt="badge3" />
    </section>
  )
}

export default Badges