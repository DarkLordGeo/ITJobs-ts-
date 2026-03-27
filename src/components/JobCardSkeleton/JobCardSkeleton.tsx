import { Skeleton } from '../ui/skeleton'
import SpotlightCard from '../react-bits/SpotlightCard'

const JobCardSkeleton = ({ card }: { card: number }) => {
    return Array(card)
        .fill(0)
        .map((_, index) => (
            <div
                className="w-full p-5 rounded-md cursor-pointer  text-white flex gap-8 flex-col h-full overflow-y-auto "
            >
                <SpotlightCard
                    key={index}
                    spotlightColor="rgba(0, 229, 255, 0.2)"
                // className='w-full'
                // className="w-full p-5 rounded-md cursor-pointer  text-white flex gap-8 flex-col h-full overflow-y-auto "

                >
                    <div className="flex gap-2 sm:flex-row flex-col-reverse h-25 w-full" key={index}>
                        <div className="w-full justify-start flex items-start flex-col gap-5">
                            <div className="flex gap-2  flex-col items-start">
                                <Skeleton className='w-42 h-4 bg-gray-300/10' />
                                <Skeleton className='w-62 h-4 bg-gray-300/10' />
                            </div>
                            <div className="flex gap-5 items-center justify-center">
                                <Skeleton className='w-18 h-4 bg-gray-300/10' />
                                -
                                <Skeleton className='w-18 h-4 bg-gray-300/10' />
                            </div>
                        </div>
                        <div className="w-auto  flex justify-between items-start ">
                            <div></div>
                            <div className="flex flex-row gap-2.5 z-1">
                                {/* <Skeleton className='w-5 h-5 bg-gray-300/10 rounded-sm' />
                            <Skeleton className='w-5 h-5 bg-gray-300/10 rounded-sm' /> */}
                            </div>
                        </div>
                    </div>
                </SpotlightCard>

            </div>

        ))
}

export default JobCardSkeleton
