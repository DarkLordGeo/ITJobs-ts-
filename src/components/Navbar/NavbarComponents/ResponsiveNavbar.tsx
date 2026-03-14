import React from 'react'
import NavigationList from './NavigationList'

interface IResponsiveStatus {
    IsResponsive: boolean
}

const ResponsiveNavbar: React.FC<IResponsiveStatus> = ({ IsResponsive }) => {
    return (
        <ul className={`
          ${IsResponsive
                ? 'opacity-100 visible'
                : 'opacity-0 invisible'}  
            fixed
            justify-between gap-12 
            z-3
            flex-col top-30
            left-1/2 translate-x-[-50%] 
            flex mb-0 w-5/6
            text-white border border-border-gray
            rounded-3xl px-6 py-4
            transition-all items-center
            backdrop-blur-md
            `}>
            <NavigationList route_path='/bookmark' route_name='bookmark' responsive_class={true} />
            <NavigationList route_path='/about' route_name='about' responsive_class={true} />
        </ul>
    )
}

export default ResponsiveNavbar
