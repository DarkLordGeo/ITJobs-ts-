import React from "react"

interface ITopSectionWrapper {
    children: React.ReactNode
}

export const TopSectionWrapper: React.FC<ITopSectionWrapper> = ({ children }) => {
    return (
        <div className='h-100 lg:h-125 flex items-center justify-center gap-4 border-b border-border-gray flex-col border-2'>
            {children}
        </div>
    )
}