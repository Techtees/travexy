
'use client'
import { useState } from "react";
import Link from "next/link"
import Button from "./utils/Button";
import { NAV_LINKS } from "@/constants";

interface MenuProps {
    isOpen: boolean;
    toggle: () => void;
}

const MobileMenu = ({isOpen, toggle}: MenuProps) => {
    return(
        <div className={`w-full bg-blue-70 h-[100%] fixed left-0 z-40 transition-all ease-in-out delay-400 ${isOpen ? 'top-0 ' :'-top-[100%] '}`}>
            <div className="flex justify-end">
                <span className="text-white text-xl font-bold p-3 " onClick={toggle}>x</span>
            </div>
            <div className="mt-6">
                <ul className="flex flex-col space-y-12">
                    {NAV_LINKS.map((link) => (
                        <Link href={link.href} key={link.key} className="regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all font-bold hover:text-green-500">
                        {link.label}
                        </Link>
                    ))}
                </ul>

                <div className="flexCenter mt-12">
                    <Button 
                        type="button"
                        title="Login"  
                        icon="/user.svg"
                        variant="btn_dark_green"
                    />
                 </div>
            </div>
        </div>
    )
}

export default MobileMenu