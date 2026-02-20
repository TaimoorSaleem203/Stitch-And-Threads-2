import AboutImg from "../assets/AboutUs.png"

const TopHeader = () => {
  return (
    <section className='min-w-full mx-auto grid grid-cols-1 mt-36 px-6 xl:px-80' id="about">
      <div className='flex flex-col gap-8 items-center text-center'>
        <h1 className='font-heading uppercase text-4xl md:text-5xl lg:text-6xl font-bold text-primary'>Turning Your Designs Into
          Production-<span className='text-black'>Ready Masterpieces</span></h1>
        <p className="text-side max-w-3xl leading-relaxed font-medium">We help creators, clothing brands, and businesses get flawless embroidery-ready files without the hassle. Every stitch, every detail, every curve — refined with care so your final product looks exactly the way you imagined. From digitizing to vector work and custom patches, our team brings precision, consistency, and fast delivery to every project.</p>
      </div>
    </section>
  )
}

const AboutUs = () => {
  return (
      <section>
        <TopHeader />
        <div className="max-w-7xl mt-14 p-6 lg:px-12 sm:px-6 items-center mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center items-center gap-5 text-white bg-primary text-center p-8 md:p-10 lg:p-20 rounded-lg">
            <h6 className="font-medium uppercase text-white/80">About Us</h6>
            <h4 className="text-white font-medium text-2xl md:text-3xl font-heading uppercase">Premium Embroidery & Apparel
              Services That Bring Your Designs to Life</h4>
            <p className="text-white/80 max-w-prose">From digitizing to custom patches — get studio-quality work delivered fast, accurate, and ready for production.</p>
            <button className="bg-white transition-all ease-in-out active:scale-95 hover:opacity-90 text-primary font-medium mt-5 cursor-pointer py-3 px-5 rounded-lg">Get a Free Quote</button>
          </div>

          <div>
            <img src={AboutImg} alt="Embroidery work preview" className="w-full rounded-lg object-cover" />
          </div>

        </div>

      </section>
  )
}


export default AboutUs