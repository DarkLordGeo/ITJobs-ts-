import React from 'react'
import { PageContentLayout } from '../../layouts/PageLayouts/PageContentLayout/PageContentLayout'
import JobCard from '../JobCard/JobCard'
import { useFetchJobsData } from '../../hooks/useFetchJobsData'
// import { bookmarks_list } from '../../store/store.ts'
import { bookmarks } from '../../store/store'


const MainContent: React.FC = () => {
    try {
        const { data, isLoading, error } = useFetchJobsData()
        const bookmark_list = bookmarks()
        // console.log(data)

        console.log('loading: ', isLoading, 'error', error)

        const content = data?.map(({ company, date, description, job_id, job_link, position }, index) => {
            const isBookmark = bookmark_list.includes(job_id)
            return (
                <JobCard
                    index={index}
                    key={job_id}
                    company={company}
                    date={date}
                    description={description}
                    job_id={job_id}
                    job_link={job_link}
                    position={position}
                    isBookmark={isBookmark}
                />
            )
        }) || <>loading...</>

        if (isLoading) return <h1>Loading...</h1>
        if (error) return <h1>error</h1>

        return (
            <PageContentLayout >
                {content}
                {/* {data?.map(({ company, date, description, job_id, job_link, position }, index) => {
                const isBookmark = bookmark_list.includes(job_id)
                return (
                    <JobCard
                        index={index}
                        key={job_id}
                        company={company}
                        date={date}
                        description={description}
                        job_id={job_id}
                        job_link={job_link}
                        position={position}
                        isBookmark={isBookmark}
                    />
                )
            })} */}


            </PageContentLayout >
        )

    }
    catch (err) {
        console.log(err)
    }

}

export default MainContent
