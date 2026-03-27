import React from 'react'

import TopSection from '../components/TopSection/TopSection'
import MainContent from '../components/MainContent/MainContent'
import PageLayout from '../layouts/PageLayouts/PageLayout/PageLayout'

const MainPage: React.FC = () => {

    return (
        <PageLayout>
            <TopSection />
            <MainContent />
        </PageLayout>
    )
}

export default MainPage
