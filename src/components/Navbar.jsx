import { useState } from "react"

const TopBar = () => {
    return (
        <div className="bg-primary tracking-wide text-white p-2 flex justify-center items-center">
            <i class="hidden md:block ri-arrow-left-s-line -translate-x-10"></i>
            <span className="text-sm text-center sm:max-w-full sm:text-[16px]">Free shipping on US orders $100+ & Free exchanges</span>
            <i class="hidden md:block ri-arrow-right-s-line translate-x-10"></i>
        </div>
    )
}

const MainNav = () => {
    return (
        <nav className="relative w-full bg-white mx-auto flex items-center justify-between p-6 px-16">
            <h1 className="text-text text-2xl font-extrabold cursor-pointer">STICH & THREADS</h1>

            <ul className="hidden md:flex items-center gap-6 uppercase font-medium tracking-wider">
                {['Home', 'About', 'Services', 'Portfolio', 'Contact Us', 'Get a Quote'].map((item, key) => {
                    return (
                        <li key={key} className="flex items-center gap-1">
                            <a href="#" className="hover:text-primary px-1 text-[16px]">{item}</a>
                            {item == "Services" && <i className="ri-arrow-down-s-line cursor-pointer"></i>}
                        </li>
                    )
                })}
            </ul>

            <div className="hidden md:flex items-center gap-4 text-2xl">
                <button aria-label="Facebook"><i class="ri-facebook-circle-fill cursor-pointer"></i></button>
                <button aria-lablel="Instagram"><i class="ri-instagram-fill cursor-pointer"></i></button>
                <span className="border-l-2 border-y-slate-200 h-12"></span><i className="ri-search-line cursor-pointer"></i>
            </div>

            <SideBar />
        </nav>
    )
}

const SideBar = () => {

    const [isSide, setIsSide] = useState(false)

    return (
        <>
        <i onClick={()=>setIsSide(!isSide)} className={`${isSide ? "ri-close-line" : "ri-menu-line"} block md:hidden font-bold text-xl cursor-pointer`}></i>
        <aside className={`md:hidden bg-white z-10 p-10 fixed inset-0 drop-shadow-md h-screen max-w-[300px] transition-all duration-300 ease-in-out ${isSide ? "translate-x-0" : "-translate-x-80"}`}>
            <h1 className="text-text text-xl sm:text-2xl font-extrabold cursor-pointer">STICH & THREADS</h1>

            <ul className="flex flex-col item-start mt-10 gap-6 uppercase font-medium tracking-wider">
                {['Home', 'About', 'Services', 'Portfolio', 'Contact Us', 'Get a Quote'].map((item, key) => {
                    return (
                        <li key={key} className="flex items-center gap-1">
                            <a href="#" className="hover:text-primary">{item}</a>
                            {item == "Services" && <i className="ri-arrow-down-s-line cursor-pointer"></i>}
                        </li>
                    )
                })}
            </ul>

            <div className="flex items-center gap-4 text-2xl absolute bottom-0 transition-all duration-300 ease">
                <button aria-label="Facebook" className="hover:text-primary"><i class="ri-facebook-circle-fill cursor-pointer"></i></button>
                <button aria-lablel="Instagram" className="hover:text-primary"><i class="ri-instagram-fill cursor-pointer"></i></button>
                <span className="border-l-2 border-y-slate-200 h-12"></span><i className="ri-search-line cursor-pointer"></i>
            </div>

        </aside>
        
        </>
    )
}

const Navbar = () => {
    return (
        <>
            <header className="relative w-screen font-body mx-auto">
                <TopBar />
                <MainNav />
                
            </header>
        </>
    )
}

export default Navbar