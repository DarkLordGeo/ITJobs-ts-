import React from 'react'

import TopSection from '../components/TopSection/TopSection'
import MainContent from '../components/MainContent/MainContent'
import PageLayout from '../layouts/PageLayouts/PageLayout/PageLayout'
// import { getApiUrl } from '../api/fetchData'

const MainPage: React.FC = () => {
    // const api_url = getApiUrl()
    // console.log(getApiUrl())
    return (
        <PageLayout>
            <TopSection />
            <MainContent />
        </PageLayout>
    )
}

export default MainPage
