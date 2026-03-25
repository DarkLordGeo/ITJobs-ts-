import { Bookmark, Share } from "lucide-react"
import { useFetchData } from "../../hooks/useFetchData"
// import type { IData } from "../../interfaces/data.interface"
import SpotlightCard from "../react-bits/SpotlightCard"
import { useNavigate } from "react-router"
// import { apiUrl } from "../../api/apiUrl"

const JobCard = () => {
    const { data, isLoading, error } = useFetchData()
    const navigate = useNavigate()

    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>error</h1>

    const isBookmark = true


    console.log(data, 'data')

    return (
        <div>
            <div
                className="p-5 rounded-md cursor-pointer w-full text-white flex gap-8 flex-col h-full overflow-y-auto border-2 border-red-500"
            >

                <SpotlightCard
                    // key={[4]}
                    spotlightColor="rgba(0, 229, 255, 0.2)"

                >
                    <div className="flex gap-2 sm:flex-row flex-col-reverse">
                        <div className="w-full justify-start flex s-start flex-col gap-5"
                        // onClick={() => navigate(`/job/${[4]}`)}
                        >
                            <div className="flex gap-2  flex-col s-start">
                                <h1 className="font-bold text-[16px] lg:text-xl">Lorem ipsum dolor sit amet.</h1>
                                <h2 className="text-[14px] lg:text-[16px]">{[1]}</h2>
                            </div>
                            <div className="flex gap-5">
                                <p className="text-[14px] break-normal">{[2]}</p>
                                -
                                <p className="text-[14px] break-normal"></p>
                            </div>
                        </div>
                        <div className="w-auto  flex justify-between s-start ">
                            <div>lorem50</div>
                            <div className="flex flex-row gap-2.5 z-1">
                                <Bookmark
                                    className={` 
                                                        ${isBookmark && 'fill-white'}
                                                        h-[1.2rem] w-[1.2rem] hover:scale-120 transition-all hover:fill-white duration-200 ease-in-out `}
                                // onClick={() => { addBookmark(key) }}
                                />
                                <Share className='h-[1.2rem] w-[1.2rem] hover:scale-120 transition-all duration-200 ease-in-out'
                                    onClick={() => navigate(`/job/d`)}
                                />
                            </div>
                        </div>
                    </div>
                </SpotlightCard>


            </div>
        </div>
    )
}

export default JobCard
