import React from 'react'
import { type NavigationLists } from '../../../interfaces/navigationList.interface'
import { Link } from 'react-router'
const NavigationList: React.FC<NavigationLists> = ({ route_path, route_name, responsive_class }) => {
    return (
        <li className={`${responsive_class ?
            'text-xl text-white cursor-pointer hover:underline'
            : 'text-[16px] text-white cursor-pointer hover:underline'}`
        }>
            <Link to={route_path}>
                {route_name}
            </Link>
        </li>
    )
}

export default NavigationList
