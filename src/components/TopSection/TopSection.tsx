import React from 'react'
import Header from '../Header/Header'
import { TopSectionWrapper } from '../../layouts/PageLayouts/TopSectionLayout/TopSectionLayout'
import ColorBends from '../react-bits/ColorBends'
const TopSection: React.FC = () => {
  return (
    <TopSectionWrapper>
      <Header />
      <ColorBends
        colors={["#40f6af", "#1761fc"]}
        rotation={0}
        autoRotate={1}
        speed={0.28}
        scale={1}
        frequency={0.8}
        warpStrength={1}
        mouseInfluence={0}
        noise={0.1}
      />
    </TopSectionWrapper>

  )
}

export default TopSection
