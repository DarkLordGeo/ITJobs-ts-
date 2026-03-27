import React from 'react'
import { PageContentLayout } from '../../layouts/PageLayouts/PageContentLayout/PageContentLayout'
import { useFetchJobsData } from '../../hooks/useFetchJobsData'
// import { bookmarks_list } from '../../store/store.ts'
import { bookmarks } from '../../store/store'
import JobCardSkeleton from '../JobCardSkeleton/JobCardSkeleton'
import JobCard from '../JobCard/JobCard'
// import type { IData } from '@/interfaces/data.interface'


const MainContent: React.FC = () => {

    const data = useFetchJobsData()
    const bookmark_list = bookmarks()

    // console.log(data?.data?.length)
    // console.log(data?.data)

    if (data.error) return <h1>Error</h1>

    const content = data?.data !== undefined && data?.data?.map(({ company, date, desciption, job_id, job_link, position }, index) => {
        const isBookmark = bookmark_list.includes(job_id)
        return (
            <JobCard
                index={index}
                key={job_id}
                company={company}
                date={date}
                desciption={desciption}
                job_id={job_id}
                job_link={job_link}
                position={position}
                isBookmark={isBookmark}
            />
        )
    })

    return (
        <PageContentLayout >
            {data.isLoading && <JobCardSkeleton card={200} />}

            {content}
        </PageContentLayout >
    )


}

export default MainContent
