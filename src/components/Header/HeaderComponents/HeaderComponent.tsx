import React from 'react'
import GradientText from '../../react-bits/GradientText'

interface IHeaderComponentProps {
    preHeader: string,
    header: string,
    description?: string
}


const HeaderComponent: React.FC<IHeaderComponentProps> = ({ preHeader, header }) => {
    return (
        <>
            <h1>
                {!preHeader ? "" : "IT"}
            </h1>
            <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={8}
                showBorder={false}
            >
                {header}
                
            </GradientText>
        </>
    )
}

export default HeaderComponent
