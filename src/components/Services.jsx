
import ServiceImg from "../assets/ServiceImg.png"

const Services = () => {
    return (
        <section className='relative bg-secondary w-full h-full mx-auto mt-36' id="services">
            <div className='w-full text-center flex flex-col gap-4 p-6 md:p-8 lg:p-12'>
                <h1 className='uppercase text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-8'>explore our <span className='text-black'>Services</span></h1>
                <p className='text-text/75 max-w-prose mx-auto'>Everything you need to turn your artwork into high-quality production files.</p>
                <img className="hidden lg:block absolute max-w-[350px] w-full -translate-y-20 -translate-x-20 right-0 top-0" src={ServiceImg} alt="Service illustration" />
            </div>  
        
            <div className="max-w-7xl flex flex-col items-center mx-auto mt-20 px-6">
                {["Embroidery Digitizing", "Vector Tracing", "Screen Separation", "Custom Patches", "DTF Gang Sheets", "Custom Apparels"].map((item, key) => {
                    return (
                        <div
                            key={key}
                            className={`group transition-all duration-500 ease-in-out w-full flex flex-row items-center justify-between border-b border-text/20 py-10 md:py-14 px-4 hover:bg-primary/5 ${key === 0 && "border-t"}`}
                        >
                            <div className="flex items-center gap-4 md:gap-8">
                                <span className="hidden sm:block font-heading text-primary/40 font-bold text-xl">
                                    0{key + 1}
                                </span>
                                <h1 className="uppercase text-black font-heading font-bold text-2xl sm:text-xl md:text-4xl lg:text-5xl transition-transform duration-500 group-hover:translate-x-4">
                                    {item}
                                </h1>
                            </div>
                            <button
                                className="transition-all duration-500 group-hover:-translate-x-4"
                                aria-label={item}
                            >
                                <i className="ri-arrow-right-down-long-line text-2xl md:text-4xl lg:text-5xl text-text/40 group-hover:text-primary group-hover:rotate-[-45deg] transition-all duration-500 inline-block"></i>
                            </button>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default Services