import React from 'react'
import NavigationList from '../NavigationList'
const NavigationListWrapper: React.FC = () => {
    return (
        <ul className="items-center justify-between gap-4 lg:gap-8 hidden md:flex">
            <NavigationList route_path='/bookmark' route_name='bookmark' />
            <NavigationList route_path='/about' route_name='about' />
        </ul>
    )
}

export default NavigationListWrapper
