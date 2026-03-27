import React from 'react'
import MainPageLayout from '../../layouts/PageLayouts/PageLayout/PageLayout'
import { PageContentLayout } from '../../layouts/PageLayouts/PageContentLayout/PageContentLayout'
import { useFetchJobData } from '../../hooks/useFetchJobData'
import { useParams } from 'react-router'
import { Share2 } from 'lucide-react'
import SpotlightCard from '../../components/react-bits/SpotlightCard'

const JobPage: React.FC = () => {

    const { id } = useParams()
    const { data, isLoading, error } = useFetchJobData(Number(id))


    console.log(data?.description)

    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>Error</h1>

    // console.log(data)

    let whole_description = ''

    // useEffect(() => {
    //     data?.description?.forEach((text) => whole_description += text)
    // }, [])


    console.log(data?.description?.forEach((text: string) => text))

    const description_text = (
        <>
            {
                whole_description.split(/\n|\r\n/).map((segment, index) => (
                    <>
                        {index > 0 && <br />}
                        {segment.replace("**", '•')}
                    </>
                ))
            }
        </>
    )



    return (
        <MainPageLayout>
            <PageContentLayout>
                <SpotlightCard
                    key={data?.job_id}
                    spotlightColor="rgba(0, 229, 255, 0.1)"
                >
                    <div className="flex gap-2 sm:flex-row flex-col-reverse h-auto" key={data?.job_id}>
                        <div className="w-full justify-start flex items-start flex-col gap-5">
                            <div className="flex gap-2 flex-row w-full justify-between">
                                <h1 className="font-bold text-[16px] lg:text-xl">{data?.company}</h1>
                                <h2 className="text-[14px] lg:text-[16px]">{data?.position}</h2>
                            </div>
                            <div className="flex gap-5">
                                {/* <p className="text-[14px] break-normal">{data?.date[0].replace(/\t/g, ' ').replace(/\n/g, " ").replace("<b>", "").replace("</b>", "").trim()}</p> */}
                                -
                                {/* <p className="text-[14px] break-normal">{data?.date[1].replace(/\t/g, ' ').replace(/\n/g, " ").replace("<b>", "").replace("</b>", "").trim()}</p> */}
                            </div>
                            <div>
                                <p className="text-[14px] break-normal">
                                    {description_text}
                                </p>
                            </div>
                            <div className='flex gap-2 flex-row w-full justify-between'>
                                <a
                                    href={`${data?.job_link}`}
                                    className="text-[14px] break-normal hover:underline"
                                >
                                    Job link
                                </a>
                                <Share2
                                    className='h-[1.2rem] w-[1.2rem] hover:scale-120 transition-all duration-200 ease-in-out'
                                    onClick={() => { navigator.clipboard.writeText('this') }}
                                />
                            </div>
                        </div>
                        <div className="w-auto flex justify-between items-start ">
                            <div></div>
                            <div className="flex flex-row gap-2.5">
                            </div>
                        </div>
                    </div>
                </SpotlightCard>
            </PageContentLayout>
        </MainPageLayout>
    )
}
export default JobPage
