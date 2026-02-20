import { useState } from "react"


const TopBar = () => {
    return (
        <div className="bg-primary tracking-wide text-white p-2 flex justify-center items-center">
            <i class="hidden md:block ri-arrow-left-s-line -translate-x-10"></i>
            <span className="text-[12px] text-center max-w-prose sm:text-[14px] md:text-[16px]">Free shipping on US orders $100+ & Free exchanges</span>
            <i class="hidden md:block ri-arrow-right-s-line translate-x-10"></i>
        </div>
    )
}

const MainNav = () => {
    return (
        <nav className="relative w-full bg-white mx-auto flex items-center justify-between p-6 px-16">
            <a href={`#home`} className="text-text text-xl md:text-2xl font-extrabold cursor-pointer">STITCH <span className="text-primary font-semibold">&</span> THREADS</a>

            <ul className="hidden md:flex items-center gap-6 uppercase font-medium tracking-wider">
                {['Home', 'About', 'Services', 'Portfolio', 'Contact Us', 'Get a Quote'].map((item, key) => {
                    return (
                        <li key={key} className="flex items-center gap-1">
                            <a href={`#${item.toLowerCase()}`} className="hover:text-primary px-1 text-[16px]">{item}</a>
                            {item == "Services" && <i className="ri-arrow-down-s-line cursor-pointer"></i>}
                        </li>
                    )
                })}
            </ul>

            <div className="hidden md:flex items-center gap-6">
                <div className="flex items-center gap-3 text-xl">
                    <i className="ri-search-line cursor-pointer hover:text-primary transition-all"></i>
                    <div className="w-[1px] h-6 bg-slate-200"></div>
                    <i className="ri-facebook-circle-fill text-2xl cursor-pointer hover:scale-110 transition-transform"></i>
                    <i className="ri-instagram-fill text-2xl cursor-pointer hover:scale-110 transition-transform"></i>
                </div>
            </div>

            <SideBar />
        </nav>
    )
}

const SideBar = () => {

    const [isSide, setIsSide] = useState(false)

    return (
        <>
            <i onClick={() => setIsSide(!isSide)} className={`${isSide ? "ri-close-line hidden" : "ri-menu-line"} block md:hidden font-bold text-xl cursor-pointer`}></i>
            <aside className={`md:hidden bg-white z-20 p-10 fixed inset-0 drop-shadow-md h-full max-w-[300px] transition-transform duration-300 ease-in-out ${isSide ? "translate-x-0" : "-translate-x-80"}`}>
                <div className="flex items-center justify-between">
                    <h1 className="text-text text-xl font-extrabold cursor-pointer">STICH <span className="text-primary font-semibold">&</span> THREADS</h1>
                    <i onClick={() => setIsSide(!isSide)} className={`ri-close-line block md:hidden font-bold text-2xl cursor-pointer`}></i>

                </div>
                <ul className="flex flex-col item-start mt-10 gap-6 uppercase font-medium tracking-wider">
                    {['Home', 'About', 'Services', 'Portfolio', 'Contact Us', 'Get a Quote'].map((item, key) => {
                        return (
                            <li key={key} className="flex items-center gap-1">
                                <a href={`#${item.toLowerCase()}`} className="hover:text-primary">{item}</a>
                                {item == "Services" && <i className="ri-arrow-down-s-line cursor-pointer"></i>}
                            </li>
                        )
                    })}
                </ul>

                <div className="flex mb-3 items-center gap-4 text-2xl absolute bottom-0 transition-all duration-300 ease">
                   {/* <i className="ri-search-line cursor-pointer hover:text-primary transition-all"></i> */}
                    {/* <div className="w-[1px] h-6 bg-slate-200"></div> */}
                    <i className="ri-facebook-circle-fill text-2xl cursor-pointer hover:scale-110 transition-transform"></i>
                    <i className="ri-instagram-fill text-2xl cursor-pointer hover:scale-110 transition-transform"></i>
                </div>

            </aside>

        </>
    )
}

const Navbar = () => {
    return (
        <>
            <header className="relative font-body">
                <TopBar />
                <MainNav />
            </header>
        </>
    )
}

export default Navbar