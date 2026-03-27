import React from 'react'
import { Link } from 'react-router'

interface LogoNameProp {
    LogoName: string
}
const NavbarLogo: React.FC<LogoNameProp> = ({ LogoName }) => {
    return (
        <div>
            <Link to={'/jobs'}>
                <h1 className="text-2xl cursor-pointer">{LogoName}</h1>
            </Link>
        </div>
    )
}

export default NavbarLogo
