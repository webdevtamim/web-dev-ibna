import { Link, NavLink } from "react-router-dom";
import { FaAlignRight } from 'react-icons/fa';
import Quote from "./Quote";
import { useEffect, useState } from "react";

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 150);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'ABOUT', link: '/#about' },
        { name: 'SERVICES', link: '/#services' },
        { name: 'PORTFOLIO', link: '/#portfolio' },
        { name: 'REVIEWS', link: '/#reviews' },
        { name: 'CONTACT', link: '/#contact' },
        { name: 'BLOGS', link: '/blogs' },
    ];

    const headerStyle = {
        transition: "top 0.3s ease-out",
        top: isScrolled ? "0" : "-80px",
    };

    return (
        <header className={`bg-white ${isScrolled ? 'shadow-lg sticky top-0 z-50 bg-red-400' : ''}`} style={headerStyle} >
            <div className="max-w-[1200px] mx-auto flex justify-between items-center py-5 lg:py-4 lg:px-5 pl-5 gap-5">
                <div><Link to={'/'}><h3 className="text-[#282828] font-extrabold md:text-3xl text-2xl tracking-[0.5px]">Web Dev Ibna
                    <span className="text-[45px] leading-[0px]">.</span>
                </h3></Link></div>
                <nav className="hidden lg:block">
                    <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-semibold text-[#282828] tracking-[0.5px] text-[15px]">
                        {navItems.map((navItem, index) => <li
                            key={index}
                            className="hover:text-[#767474] duration-300"
                        >
                            <a href={navItem.link}>{navItem.name}</a>
                        </li>)}
                    </ul>
                </nav>
                <div className="hidden lg:block">
                    <button className="bg-[#282828] text-white hover:bg-btn-hover visited:bg-btn-hover focus:bg-btn-hover font-semibold text-[15px] tracking-[1px] py-[14px] px-7 rounded leading-[15px] duration-300 active:scale-x-95" onClick={() => document.getElementById('my_modal_3').showModal()}>GET A QUOTE</button>
                    <Quote></Quote>
                </div>
                <div className="dropdown dropdown-end pr-5 lg:hidden">
                    <label tabIndex={0} className="text-2xl text-[#282828] cursor-pointer"><FaAlignRight className="-mb-2"></FaAlignRight></label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow font-semibold text-[#282828] tracking-[0.5px] text-[15px] bg-white w-screen mx-auto mt-7 px-5 border-t rounded-none">
                        {navItems.map((navItem, index) => <li key={index}><NavLink className="hover:text-[#767474] hover:bg-transparent duration-300" to={navItem.link}>{navItem.name}</NavLink></li>)}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;