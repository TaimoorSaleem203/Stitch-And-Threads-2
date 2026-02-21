
import Img1 from "../assets/ServiceImg1.png"
import Img2 from "../assets/ServiceImg2.png"
import Img3 from "../assets/ServiceImg3.png"

const Services = () => {

    const cards = [
        { "badge": Img1, "title": "Left Chest Digitizing", "desc": "Optimized for small logos and branding, perfect for polos, shirts, and uniforms. Clean stitches and balanced density ensure clarity even at smaller sizes.", "color": "bg-[#2C2C2C]" },
        { "badge": Img2, "title": "Jacket Back Digitizing", "desc": "Designed for large-scale embroidery with detailed coverage. Ideal for jackets and outerwear where bold impact and precision matter.", "color": "bg-text" },
        { "badge": Img3, "title": "3D Puff Digitizing", "desc": "Specialized digitizing for raised embroidery using foam, giving your design depth and a bold, premium look.", "color": "bg-primary" }
    ]

    return (
        <section className='relative bg-secondary w-full h-full p-6 md:p-8 lg:p-12 mx-auto mt-36' id="services">
            <div className='w-full text-center flex flex-col gap-4'>
                <h1 className='uppercase text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-8'>Our Digitizing <span className='text-black'>Services</span></h1>
                <p className='text-text/75 max-w-prose sm:text-md md:text-lg mx-auto'>Each digitizing style is crafted to match placement, fabric type, and design complexity.</p>
                {/* <img className="hidden lg:block absolute max-w-[350px] w-full -translate-y-20 -translate-x-20 right-0 top-0" src={ServiceImg} alt="Service illustration" /> */}
            </div>

            <div className="max-w-7xl w-full flex md:flex-row flex-col gap-10 justify-center mx-auto mt-20">
                {cards.map(({ badge, title, desc, color }, indx) => {
                    return (
                        <div key={indx} className="group flex flex-col items-center transition-transform ease-in-out duration-300 hover:-translate-y-2">

                            <div className="overflow-hidden max-w-xs w-full mx-auto rounded-lg">
                                <img
                                    src={badge}
                                    className="transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                                    alt={title}
                                />
                            </div>

                            <div className={`flex flex-col gap-2 max-w-xs min-h-44 ${color} p-6 rounded-lg`}>
                                <div className="flex items-center justify-between">
                                    <h1 className="font-heading text-xl text-white uppercase font-bold">{title}</h1>
                                    <button className="bg-white rounded-full flex items-center justify-center w-7 h-7 p-2 cursor-pointer active:scale-95"><i className="ri-arrow-right-line text-sm font-bold text-primary"></i></button>
                                </div>
                                <p className="text-white/50 text-sm md:text-md font-body">{desc}</p>
                            </div>
                        </div>

                    )
                })}
            </div>

            <div>

            </div>

        </section>
    )
}

export default Services