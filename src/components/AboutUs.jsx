import badge1 from "../assets/AboutBadge1.png"
import badge2 from "../assets/AboutBadge2.png"

const Header = () => {
  
  const info = [
    {"title":"Stitch Accuracy","desc":"Precise stitch placement to maintain clean edges and sharp details.","percent":"95%"},
    {"title":"Fabric Compatibility","desc":"Digitizing adjusted for cotton, polyester, caps, jackets, and more.","percent":"90%"},
    {"title":"Design Balance","desc":"Proper density and spacing to prevent puckering or thread breaks.","percent":"95%"}
  ]
  
  return (
    <section className='min-w-full mx-auto grid grid-cols-1 mt-36 justify-between' id="about">
      <div className='flex flex-col gap-8 items-start'>
        <h1 className='font-heading uppercase text-4xl md:text-5xl lg:text-6xl font-bold text-primary'>What is
          Embroidery <span className='text-black'>Digitizing?</span></h1>
        <p className="text-side max-w-lg leading-relaxed text-lg font-medium">Embroidery digitizing is the process of transforming logos or artwork into a digital stitch file that embroidery machines can read. At Stitch N Threads, we focus on stitch accuracy, smooth edges, and proper density so your design looks sharp on any fabric.</p>
      </div>

      <div className="flex flex-col gap-8 mt-10">
        {info.map((item)=>{
          return(
            <div>
              <h1 className="text-text font-bold text-2xl font-heading uppercase">{item.title}</h1>
              <div className="flex mt-1 max-w-lg w-full justify-between">
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
      <section className="w-full max-w-7xl max-h-full mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 gap-12 lg:grid-cols-2 md:gap-5 items-center">
        <Header />

        <div className="flex flex-col gap-5 items-center max-w-xl w-full">
          <img src={badge1} alt="" />
          <img src={badge2} alt="" />
        </div>

      </section>
  )
}


export default AboutUs