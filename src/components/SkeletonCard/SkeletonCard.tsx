import SpotlightCard from '../react-bits/SpotlightCard'
import { Share2 } from 'lucide-react'
import { Skeleton } from '../ui/skeleton'

const SkeletonCard = () => {
    return (
        <SpotlightCard
            spotlightColor="rgba(0, 229, 255, 0.1)"
        >
            <div className='h-auto  rounded-md cursor-pointer w-full text-white flex gap-8 flex-col'>
                <div className="flex gap-2 flex-col h-auto">
                    <div className="w-full justify-start flex items-start flex-col gap-5">
                        <div className="flex gap-2 flex-row w-full justify-between">
                            <Skeleton className='w-42 h-8 bg-gray-300/10' />
                            {/* company name */}
                            <Skeleton className='w-42 h-8 bg-gray-300/10' />
                            {/* company position */}
                        </div>
                        <div className="flex gap-5 items-center">
                            <Skeleton className='w-32 h-5 bg-gray-300/10' />
                            -
                            <Skeleton className='w-32 h-5 bg-gray-300/10' />

                        </div>
                        <div className='flex w-full'>
                            <Skeleton className='w-full h-96 bg-gray-300/10' />
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-end mt-8'>
                        {/* <Skeleton>Go back</Skeleton> */}
                        <div className='flex gap-2 flex-row w-full justify-between'>
                            <Skeleton className='w-32 h-5 bg-gray-300/10' />
                            <div>

                            </div>
                        </div>
                        <Share2
                            className='h-[1.2rem] w-[1.2rem] hover:scale-120 transition-all duration-200 ease-in-out'
                            onClick={() => console.log("sharing a job")}
                        />
                    </div>
                </div>

            </div>
        </SpotlightCard>
    )
}

export default SkeletonCard
