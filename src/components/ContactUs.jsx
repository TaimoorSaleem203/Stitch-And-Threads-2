import post1 from "../assets/contactPoster1.png"
import post2 from "../assets/contactPoster2.png"
import post3 from "../assets/contactPoster3.png"
import post4 from "../assets/contactPoster4.png"
import post5 from "../assets/contactPoster5.png"
import post6 from "../assets/contactPoster6.png"

const Img = ({ src }) => {
  return (
    <div className="overflow-hidden rounded-xl h-full w-full group">
      <img 
        src={src} 
        alt="Portfolio work" 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
      />
    </div>
  )
}

const ContactUs = () => {
  return (
    <section className="mt-28 bg-white" id="contact%20us">
      <div className="max-w-7xl mx-auto p-6 md:p-10 lg:p-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
          
          <div className="hidden md:flex flex-col gap-4 col-span-1">
            <div className="h-48">
              <Img src={post1} />
            </div>
            <div className="h-64">
              <Img src={post2} />
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-3 bg-secondary rounded-2xl flex flex-col justify-center items-center text-center p-8 lg:p-16 gap-6 order-first md:order-none border border-slate-100 shadow-sm relative overflow-hidden group">
   
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700"></div>
            
            <i className="ri-instagram-line text-5xl text-primary animate-bounce-slow"></i>
            
            <h2 className="font-heading text-black uppercase text-3xl lg:text-5xl font-black leading-tight z-10">
              follow us on <br />
              <span className="text-primary italic">instagram</span>
            </h2>
            
            <p className="font-body max-w-xs text-slate-500 text-sm lg:text-base leading-relaxed z-10">
              Stay connected with our latest work, client projects, and behind-the-scenes updates.
            </p>
            
            <button className="group/btn relative overflow-hidden transition-all duration-300 active:scale-95 text-sm uppercase bg-black text-white px-10 py-4 rounded-full font-bold tracking-widest z-10 hover:bg-primary hover:shadow-xl hover:shadow-primary/30">
              <span className="relative z-10">Follow Now</span>
            </button>
          </div>

          <div className="hidden md:flex flex-col gap-4 col-span-1">
            <div className="h-64">
              <Img src={post6} />
            </div>
            <div className="h-48">
              <Img src={post4} />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:hidden">
            <div className="h-40"><Img src={post3} /></div>
            <div className="h-40"><Img src={post5} /></div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactUs