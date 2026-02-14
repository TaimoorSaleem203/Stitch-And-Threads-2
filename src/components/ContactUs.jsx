import post1 from "../assets/contactPoster1.png"
import post2 from "../assets/contactPoster2.png"
import post3 from "../assets/contactPoster3.png"
import post4 from "../assets/contactPoster4.png"
import post5 from "../assets/contactPoster5.png"
import post6 from "../assets/contactPoster6.png"

const Img = ({src}) => {
  return (
    <img src={src} alt="arrow" className="w-full h-full object-cover rounded-lg"/>
  )
}

const ContactUs = () => {
  return (
    <section className="mt-28">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:flex-row md:gap-2 p-6 md:p-10 lg:p-12">
        <div className="flex flex-col gap-2">
          <div className="h-[200px]">
            <Img src={post1}  />
          </div>
          <div className="grid grid-cols-2 gap-4 h-[200px]">
            <Img src={post2}  />
            <Img src={post3}  />
          </div>
        </div>
        <div className="bg-secondary py-16 rounded-xl flex flex-col justify-center items-center text-center gap-6">
          <h1 className="font-heading text-black uppercase text-3xl lg:text-4xl font-bold">follow us on <span className="text-primary">instagram</span></h1>
          <p className="font-body max-w-prose text-sm lg:text-base">Stay connected with our latest work, client projects, and behind-the-scenes updates.</p>
          <button className="transition-all duration-150 active:scale-95 focus:outline-none text-sm uppercase bg-primary text-white px-6 p-3 rounded-full font-medium">follow us</button>
        </div>
        <div className="flex gap-2 flex-col">
          <div className="h-[200px]">
            <Img src={post6} />
          </div>
          <div className="grid grid-cols-2 gap-4 h-[200px]">
            <Img src={post4}  />
            <Img src={post5}  />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs