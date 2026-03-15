import React from 'react'
import { PageContentLayout } from '../../layouts/PageLayouts/PageContentLayout/PageContentLayout'
import JobCard from '../JobCard/JobCard'



const MainContent: React.FC = () => {
    return (
        <PageContentLayout >
            <JobCard />
        </PageContentLayout >
    )
}

export default MainContent
