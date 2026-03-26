import React from 'react'
import MainPageLayout from '../../layouts/PageLayouts/PageLayout/PageLayout'
import { PageContentLayout } from '../../layouts/PageLayouts/PageContentLayout/PageContentLayout'
import { useFetchJobData } from '../../hooks/useFetchJobData'
import { useParams } from 'react-router'

const JobPage: React.FC = () => {

    const { id } = useParams()
    const { data, isLoading, error } = useFetchJobData(Number(id))

    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>Error</h1>


    return (
        <MainPageLayout>
            <PageContentLayout>
                {data?.company}
            </PageContentLayout>
        </MainPageLayout>
    )
}
export default JobPage
