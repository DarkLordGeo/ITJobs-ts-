import React from "react"
interface IPageContentLayout {
    children: React.ReactNode
}

export const PageContentLayout: React.FC<IPageContentLayout> = ({ children }) => {
    return (
        <div
            className='
        flex items-center
      text-white
        transition-all 
        justify-center w-full
        border-red-500
        border-2
      '
        >
            <div
            //     className="
            // w-full md:w-4/6 lg:w-3/6
            // flex flex-col 
            // transition-all
            // items-center justify-center
            // border-2 border-sky-500
            // "
            >
                {children}
            </div>
        </div>
    )
}