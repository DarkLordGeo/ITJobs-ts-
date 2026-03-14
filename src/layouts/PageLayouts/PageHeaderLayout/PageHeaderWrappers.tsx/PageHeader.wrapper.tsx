import React from 'react'

interface IPageHeaderProps {
    children: React.ReactNode
    description: string
}

const PageHeaderWrapper: React.FC<IPageHeaderProps> = ({ children, description }) => {
    return (
        <div className="text-white text-center items-center flex justify-center text-[2.5rem] md:text-[3.5rem] lg:text-[5rem] font-bold flex-col">
            <div className='flex'>
                {children}
            </div>
            <p className="m-0 text-sm font-bold md:text-xl">
                {description}
            </p>
        </div>
    )
}

export default PageHeaderWrapper
