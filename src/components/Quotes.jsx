
const Quotes = () => {
  return (
    <section className='mt-36 bg-white layout-container' id="get%20a%20quote">
      <div className='max-w-4xl mx-auto flex flex-col gap-10 items-center justify-center text-center'>
        
        <div className="opacity-20 transition-transform duration-700 hover:rotate-12">
          <i className="ri-double-quotes-l text-6xl text-primary"></i>
        </div>

        <div className="space-y-6 group">
          <h1 className='max-w-prose uppercase font-heading text-black text-2xl md:text-3xl lg:text-4xl font-bold mx-auto leading-relaxed transition-all duration-700 ease-out translate-y-0 opacity-100 group-hover:text-primary/90'>
            “I’ve tried many services, but this team actually understands production requirements. The quality shows in every stitch.”
          </h1>
          
          <div className="w-12 h-1 bg-primary mx-auto transition-all duration-500 group-hover:w-24"></div>
          
          <p className="text-text font-body uppercase text-lg md:text-xl tracking-widest opacity-80">
            — Michael Torres
          </p>
        </div>

        <div className="flex justify-center items-center gap-6 mt-4">
          <button 
            aria-label="Previous quote" 
            className="group flex justify-center items-center transition-all duration-300 hover:bg-black active:scale-90 focus:outline-none cursor-pointer bg-primary rounded-full w-14 h-14 text-white shadow-lg hover:shadow-primary/30"
          >
            <i className="ri-arrow-left-line text-xl transition-transform group-hover:-translate-x-1"></i>
          </button>
          
          <button 
            aria-label="Next quote" 
            className="group flex justify-center items-center transition-all duration-300 hover:bg-black active:scale-90 focus:outline-none cursor-pointer bg-primary rounded-full w-14 h-14 text-white shadow-lg hover:shadow-primary/30"
          >
            <i className="ri-arrow-right-line text-xl transition-transform group-hover:translate-x-1"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Quotes