import React from 'react'

interface IMainPageLayout {
    children: React.ReactNode
}

const MainPageLayout: React.FC<IMainPageLayout> = ({ children }) => {
    return (
        <div className='h-auto'>
            {children}
        </div>
    )
}

export default MainPageLayout
