import React from 'react'
import { PageContentLayout } from '../../layouts/PageLayouts/PageContentLayout/PageContentLayout'
import JobCard from '../JobCard/JobCard'
import { useFetchData } from '../../hooks/useFetchData'
// import { bookmarks_list } from '../../store/store.ts'
import { bookmarks } from '../../store/store'


const MainContent: React.FC = () => {
    const { data, isLoading, error } = useFetchData()
    const bookmark_list = bookmarks()
    
    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>error</h1>

    return (
        <PageContentLayout >

            {data?.map(({ company, date, description, job_id, job_link, position }) => {
                const isBookmark = bookmark_list.includes(job_id)
                return (
                    <JobCard
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
            })}


            {/* {data?.map(({ company, date, description, job_id, job_link, position }) => (

                <JobCard
                    company={company}
                    date={date}
                    description={description}
                    job_id={job_id}
                    job_link={job_link}
                    position={position} />
            ))} */}

        </PageContentLayout >
    )
}

export default MainContent
