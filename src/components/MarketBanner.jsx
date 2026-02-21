import icon1 from "../assets/marketIcon1.png"
import icon2 from "../assets/marketIcon2.png"
import icon3 from "../assets/marketIcon3.png"
import icon4 from "../assets/marketIcon4.png"

const MarketBanner = () => {

    const cards = [
        {"icon":icon1,"title":"Quick Turnaround","desc":"Fast digitizing without compromising stitch quality or accuracy."},
        {"icon":icon2,"title":"Money Back Guarantee","desc":"If you’re not satisfied, we make it right. Your trust matters to us."},
        {"icon":icon3,"title":"Precision & Accuracy","desc":"Every design is carefully digitized with clean stitch flow and sharp detailing."},
        {"icon":icon4,"title":"Dedicated Support","desc":"Our team is available to guide you and answer questions throughout the process."},
    ]

    return (
        <>
            <section className="mt-36 layout-container md:gap-5 items-center">
                <div className='flex flex-col gap-10 items-center'>
                    <h1 className='font-heading uppercase text-4xl md:text-5xl lg:text-6xl font-bold text-primary'>
                        WHY OUR DIGITIZING <span className='text-black'>STANDS OUT</span></h1>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center mx-auto lg:gap-5 md:gap-8 gap-10 mt-12">
                        {cards.map(({icon,title,desc})=>{
                            return (
                                <div className="flex flex-col transition-all duration-300 ease-in-out rounded-xl items-start gap-8">
                                    <img src={icon} className="bg-secondary rounded-lg p-2 w-12 md:w-14" alt="" />
                                    <div className="flex flex-col gap-2">
                                        <h1 className="font-body uppercase text-md md:text-lg lg:text-xl font-bold">{title}</h1>
                                        <p className="text-md text-side/80">{desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

        </>
    )
}

export default MarketBanner