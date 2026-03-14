import React, { useState } from 'react'
import NavbarLogo from './NavbarComponents/NavbarLogo'
import NavigationListWrapper from './NavbarComponents/NavbarWrappers/NavigationList.wrapper'
import { Menu } from 'lucide-react'
import ResponsiveNavbar from './NavbarComponents/ResponsiveNavbar'
const Navbar: React.FC = () => {
    const [open, isOpen] = useState(false)
    const openNavbar = () => {
        isOpen(!open)
    }
    return (
        <>
            <nav
                className="
            left-1/2 translate-x-[-50%] fixed z-3
            flex items-center justify-between mb-0 mt-8 
            text-white border border-border-gray 
            
            w-5/6 md:w-4/6 lg:w-3/6 transition-all
            rounded-full 
            backdrop-blur-md px-12 py-4 h-20"
            >
                <NavbarLogo LogoName='ITJobs' />
                <NavigationListWrapper />
                <Menu className="cursor-pointer block md:hidden"
                    onClick={() => openNavbar()}
                />
            </nav>
            <ResponsiveNavbar
                IsResponsive={open}
            />
        </>

    )
}

export default Navbar
