'use client'
import { NAV_LINKS } from "@/constants";
import Link from "next/link"
import Button from "./utils/Button";
import Image from "next/image";
import { useState } from "react";
import MobileMenu from "./MobileMenu";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const ToggleMobile= () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className="flexBetween py-4 max-container padding-container">
            <Link href='/'>
               <div className="font-bold text-xl text-transform uppercase">
                Trave<span className="text-green-500">xy</span>
               </div>
            </Link>
            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                    {link.label}
                    </Link>
                ))}
            </ul>
            <div className="lg:flexCenter hidden">
               <Button 
                type="button"
                title="Login"  
                icon="/user.svg"
                variant="btn_dark_green"
               />
            </div>
            <Image 
                src= "menu.svg"
                alt= "menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
                onClick={ToggleMobile}
            />
            <MobileMenu isOpen= {isOpen} toggle = {ToggleMobile}/>
        </nav>
    )
}

export default Navbar;