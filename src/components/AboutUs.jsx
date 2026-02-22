import badge1 from "../assets/AboutBadge1.png"
import badge2 from "../assets/AboutBadge2.png"

const Header = () => {
  
  const info = [
    {"title":"Stitch Accuracy","desc":"Precise stitch placement to maintain clean edges and sharp details.","percent":"95%"},
    {"title":"Fabric Compatibility","desc":"Digitizing adjusted for cotton, polyester, caps, jackets, and more.","percent":"90%"},
    {"title":"Design Balance","desc":"Proper density and spacing to prevent puckering or thread breaks.","percent":"95%"}
  ]
  
  return (
    <section className='w-full mx-auto grid grid-cols-1 justify-between' id="about">
      <div className='flex flex-col gap-8 items-start'>
        <h1 className='font-heading uppercase text-4xl md:text-5xl lg:text-6xl font-bold text-primary'>What is
          Embroidery <span className='text-black'>Digitizing?</span></h1>
        <p className="text-side max-w-lg leading-relaxed text-md lg:text-lg font-medium">Embroidery digitizing is the process of transforming logos or artwork into a digital stitch file that embroidery machines can read. At Stitch N Threads, we focus on stitch accuracy, smooth edges, and proper density so your design looks sharp on any fabric.</p>
      </div>

      <div className="flex flex-col gap-8 mt-10">
        {info.map((item)=>{
          return(
            <div>
              <h1 className="text-text font-bold text-2xl font-heading uppercase">{item.title}</h1>
              <div className="flex flex-1 mt-1 max-w-lg w-full justify-between">
                <h6 className="font-body max-w-xs md:max-w-lg">{item.desc}</h6>
                <p className="font-bold">{item.percent}</p>
              </div>
              <div className="relative rounded-lg mt-3 max-w-lg w-full h-2 bg-primary">
                <div className="absolute w-full rounded-lg right-0 max-w-14 h-2 bg-slate-300"></div>
                <div className="bg-white border-2 border-primary absolute -translate-x-12 translate-y-1 bottom-0 right-0 w-full h-4 max-w-4 rounded-full"></div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

const AboutUs = () => {
  return (
      <section className="mt-36 layout-container grid grid-cols-1 gap-10 md:gap-5 lg:grid-cols-2 items-center">
        <Header />

        <div className="flex flex-col overflow-hidden items-center gap-5 group">
          <img src={badge1} alt="badge1" className="w-full h-full object-cover mx-auto" />
          <img src={badge2} alt="badge2" className="w-full h-full object-cover mx-auto"/>
        </div>

      </section>
  )
}


export default AboutUs