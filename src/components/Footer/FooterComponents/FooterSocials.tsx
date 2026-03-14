import React from 'react'
import { Github, Linkedin } from "lucide-react"

const FooterSocials: React.FC = () => {
    return (
        <div className='flex items-center justify-center gap-5'>
            <a href="https://github.com/DarkLordGeo/" aria-label='Github link'>
                <Github />
            </a>
            <a href="https://www.linkedin.com/in/lasha-ergeshidze-6822ba2a5/" aria-label='Linkedin link'>
                <Linkedin />
            </a>
        </div>
    )
}

export default FooterSocials
