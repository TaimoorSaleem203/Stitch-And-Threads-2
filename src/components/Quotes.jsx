
const Quotes = () => {
  return (
    <section className='mt-36 overflow-x-hidden'>
        <div className='max-w-4xl mx-auto flex flex-col gap-8 items-center text-center p-12'>
            <h1 className='max-w-prose uppercase font-heading text-black text-2xl md:text-3xl lg:text-4xl font-bold mx-auto leading-relaxed'>“I’ve tried many services, but this team actually understands production requirements. The quality shows in every stitch.”</h1>
            <p className="text-text font-body uppercase text-lg md:text-xl">Michael Torres</p>

            <div className="flex justify-center items-center gap-5">
              <button aria-label="Previous quote" className="transition-all duration-150 hover:scale-105 active:scale-95 focus:outline-none cursor-pointer bg-primary rounded-full w-12 h-12 text-white"><i className="ri-arrow-left-line"></i></button>
              <button aria-label="Next quote" className="transition-all duration-150 hover:scale-105 active:scale-95 focus:outline-none cursor-pointer bg-primary rounded-full w-12 h-12 text-white"><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
    </section>
  )
}

export default Quotes