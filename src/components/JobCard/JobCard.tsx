import { Bookmark, Share } from "lucide-react"
// import { useFetchData } from "../../hooks/useFetchData"
import type { IData } from "../../interfaces/data.interface"
import SpotlightCard from "../react-bits/SpotlightCard"
import { useNavigate } from "react-router"
// import { useStore } from "zustand"
import { useAddBookmark, useRemoveBookmark } from "../../store/store"
// import { useAddBookmark } from "../../store/store"
// import { apiUrl } from "../../api/apiUrl"

const JobCard = ({ company, date, description, job_id, position, isBookmark }: IData) => {
    // const addBookmark = useAppStore((state) => state.addBookmark)
    // adding bookmark hook
    const addBookmark = useAddBookmark()
    const removeBookmark = useRemoveBookmark()
    const navigate = useNavigate()

    return (
        <div
            className="w-full p-5 rounded-md cursor-pointer  text-white flex gap-8 flex-col h-full overflow-y-auto border-2 border-red-500"
        >
            <SpotlightCard
                spotlightColor="rgba(0, 229, 255, 0.2)"

            >
                <div className="flex gap-2 sm:flex-row flex-col-reverse">
                    <div className="w-full justify-start flex s-start flex-col gap-5"
                    >
                        <div className="flex gap-2  flex-col s-start">
                            <h1 className="font-bold text-[16px] lg:text-xl">{company}</h1>
                            <h2 className="text-[14px] lg:text-[16px]">{position}</h2>
                        </div>
                        <div className="flex gap-5">
                            <p className="text-[14px] break-normal">{date[0]
                                .replaceAll("<b>", "").replaceAll("</b>", "")}
                            </p>
                            -
                            <p className="text-[14px] break-normal">{date[1]
                                .replaceAll("<b>", "").replaceAll("</b>", "")}</p>
                        </div>
                    </div>
                    <div className="w-auto  flex justify-between s-start ">
                        <div>{description}</div>
                        <div className="flex flex-row gap-2.5 z-1">
                            <Bookmark
                                onClick={() => isBookmark ? removeBookmark(job_id) : addBookmark(job_id)}
                                className={` 
                                    ${isBookmark && 'fill-white'}
                                    h-[1.2rem] w-[1.2rem] hover:scale-120 transition-all hover:fill-white duration-200 ease-in-out `}
                            />
                            <Share className='h-[1.2rem] w-[1.2rem] hover:scale-120 transition-all duration-200 ease-in-out'
                                onClick={() => navigate(`/job/d`)}
                            />
                        </div>
                    </div>
                </div>
            </SpotlightCard>
        </div>
    )
}

export default JobCard
